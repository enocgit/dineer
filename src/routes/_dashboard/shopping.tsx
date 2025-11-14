import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { Trash2, XIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingListItem } from "@/types";

const items = [
  { id: 1, name: "Chicken", recipeName: "Chicken Recipe", category: "Meat" },
  {
    id: 2,
    name: "Tomatoes",
    recipeName: "Tomato Recipe",
    category: "Vegetables",
  },
  {
    id: 3,
    name: "Bread",
    recipeName: "Bread Recipe",
    category: "Vegetables",
  },
];

export const Route = createFileRoute("/_dashboard/shopping")({
  ssr: false,
  component: RouteComponent,
});

function RouteComponent() {
  const groupedItems = items.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, ShoppingListItem[]>,
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center justify-between">
          <article>
            <h1 className="mb-2 text-3xl font-bold">Shopping List</h1>
            <p className="text-muted-foreground">Items you need to buy</p>
          </article>
          {items.length > 0 && (
            <Button variant="destructive" aria-label="Clear all items">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear All
            </Button>
          )}
        </div>

        {items.length === 0 ? (
          <Card>
            <CardContent className="text-muted-foreground p-12 text-center">
              <p className="mb-2 text-lg">Your shopping list is empty</p>
              <p>Add missing ingredients from recipes to your list</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedItems).map(([category, categoryItems]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {category}
                    <Badge variant="secondary">{categoryItems.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categoryItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-muted/50 flex items-center justify-between rounded-lg p-3"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        {item.recipeName && (
                          <p className="text-muted-foreground text-xs">
                            For: {item.recipeName}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-label="Remove item"
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="text-muted-foreground text-center text-sm">
            {items.length} item{items.length !== 1 ? "s" : ""} in your shopping
            list
          </div>
        )}
      </div>
    </main>
  );
}
