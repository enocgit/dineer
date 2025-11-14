import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/favorites")({
  ssr: false,
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <article>
          <h1 className="mb-2 text-3xl font-bold">My Favorites</h1>
          <p className="text-muted-foreground">Your saved recipes</p>
        </article>
      </div>
    </main>
  );
}
