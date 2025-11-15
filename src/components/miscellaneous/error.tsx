import { ErrorComponentProps, Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Image } from "@unpic/react";

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 p-5">
      <Image
        src="/images/error.png"
        alt="Error"
        width={400}
        height={400}
        className="aspect-video w-140"
      />

      <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
        <h2 className="mb-6 text-5xl font-semibold">Whoops!</h2>
        <h3 className="mb-1.5 text-3xl font-semibold">Something went wrong</h3>
        <p className="text-muted-foreground mb-6 max-w-sm">
          {error.message || "An unknown error occurred"}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-lg text-base shadow-sm">
            <Link to="/">Back to home page</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-lg text-base shadow-sm"
            onClick={() => reset()}
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
