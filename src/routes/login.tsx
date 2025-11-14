import SignInForm from "@/components/sign-in-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex min-h-svh items-center justify-center overflow-x-hidden p-5">
      <SignInForm />
    </main>
  );
}
