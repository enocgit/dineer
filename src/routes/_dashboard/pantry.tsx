import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Plus, Search, XIcon } from "lucide-react";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { getUser } from "@/functions/get-user";

const ingredients = [
  { id: 1, name: "Chicken" },
  { id: 2, name: "Tomatoes" },
];

export const Route = createFileRoute("/_dashboard/pantry")({
  ssr: false,
  beforeLoad: async () => {
    const session = await getUser();
    return { session };
  },
  loader: async ({ context }) => {
    if (!context.session) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { session } = Route.useRouteContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [newIngredient, setNewIngredient] = useState("");

  // const { data: ingredients } = useQuery({
  //   queryKey: ["ingredients"],
  //   queryFn: () => readIngredients(),
  // });

  const filteredIngredients = ingredients?.filter((i) =>
    i.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <article>
          <h1 className="mb-2 text-3xl font-bold">My Pantry</h1>
          <p className="text-muted-foreground">
            Manage your available ingredients
          </p>
        </article>

        <Card>
          <CardContent className="space-y-4 px-6">
            <div className="flex items-center gap-2 [&>div]:flex-1">
              <Input
                placeholder="Add ingredient (e.g., chicken, tomatoes)"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                // onKeyDown={(e) => e.key === 'Enter' && handleAddIngredient()}
              />
              <Button aria-label="Add ingredient">
                <Plus className="mr-2 h-4 w-4" />
                Add
              </Button>
            </div>

            <div className="relative">
              <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
              <Input
                placeholder="Search pantry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {filteredIngredients?.length === 0 ? (
          <Card>
            <CardContent className="text-muted-foreground p-12 text-center">
              {ingredients.length === 0 ? (
                <>
                  <p className="mb-2 text-lg">Your pantry is empty</p>
                  <p>Add ingredients to get started!</p>
                </>
              ) : (
                <p>No ingredients match your search</p>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-3">
            {filteredIngredients.map((ingredient) => (
              <Card
                key={ingredient.id}
                className="transition-shadow hover:shadow-md"
              >
                <CardContent className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="capitalize">
                      {ingredient.name}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      Added {new Date(ingredient.addedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label="Remove ingredient"
                    // onClick={() => handleRemoveIngredient(ingredient.id)}
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-muted-foreground text-center text-sm">
          {ingredients.length} ingredient{ingredients.length !== 1 ? "s" : ""}{" "}
          in your pantry
        </div>
      </div>
    </main>
  );
}
