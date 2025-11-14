import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

export const Route = createFileRoute("/_dashboard/recipes")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <article>
          <h1 className="mb-2 text-3xl font-bold">Recipe Recommendations</h1>
          <p className="text-muted-foreground">
            Discover delicious recipes based on your pantry
          </p>
        </article>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
            <Input
              placeholder="Search recipes..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              // onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="pl-10"
            />
          </div>
          <Button aria-label="Search">Search</Button>
          <Button variant="outline" aria-label="Search by random">
            Random
          </Button>
        </div>
      </div>
    </main>
  );
}
