import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Image } from "@unpic/react";

export default function NotFoundComponent() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 p-5">
      <Image
        src="/images/not-found.png"
        alt="Not Found"
        width={400}
        height={400}
        className="w-100"
      />

      <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
        <h2 className="mb-6 text-5xl font-semibold">Whoops!</h2>
        <h3 className="mb-1.5 text-3xl font-semibold">Something went wrong</h3>
        <p className="text-muted-foreground mb-6 max-w-sm">
          The page you&apos;re looking for isn&apos;t found, we suggest you go
          back to home.
        </p>
        <Button asChild size="lg" className="rounded-lg text-base shadow-sm">
          <Link to="/">Back to home page</Link>
        </Button>
      </div>
    </div>
  );
}
