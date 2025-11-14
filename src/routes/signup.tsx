import SignUpForm from "@/components/sign-up-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex min-h-svh items-center justify-center overflow-x-hidden p-5">
      <SignUpForm />
    </main>
  );
}
