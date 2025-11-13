import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import z from "zod";
import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { IconBrandGoogle, IconBrandFacebook } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";
import { LabelInputContainer, BottomGradient } from "./label-input-container";

export default function SignUpForm() {
  const navigate = useNavigate({
    from: "/",
  });
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
        },
        {
          onSuccess: () => {
            navigate({
              to: "/dashboard",
            });
            toast.success("Sign up successful");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="shadow-input relative mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      {/* Background element */}
      <img
        src="/images/background/onion.png"
        className="absolute -top-16 -right-10 size-32 rotate-45 sm:top-1 sm:-right-22"
      />
      <Link to="/" aria-label="go home">
        <Logo />
      </Link>
      <h2 className="mt-2 text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Dineer
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Create your free account to track your pantry, find matching recipes,
        and reduce food waste effortlessly.
      </p>

      <form
        className="my-8"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field name="name">
          {(field) => (
            <LabelInputContainer className="mb-4">
              <Label htmlFor={field.name}>Name</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                placeholder="John Doe"
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.map((error) => (
                <p key={error?.message} className="text-red-500">
                  {error?.message}
                </p>
              ))}
            </LabelInputContainer>
          )}
        </form.Field>
        <form.Field name="email">
          {(field) => (
            <LabelInputContainer className="mb-4">
              <Label htmlFor={field.name}>Email</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                placeholder="john.doe@example.com"
                type="email"
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.map((error) => (
                <p key={error?.message} className="text-red-500">
                  {error?.message}
                </p>
              ))}
            </LabelInputContainer>
          )}
        </form.Field>
        <form.Field name="password">
          {(field) => (
            <LabelInputContainer className="mb-4">
              <Label htmlFor={field.name}>Password</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                placeholder="••••••••"
                type="password"
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.map((error) => (
                <p key={error?.message} className="text-red-500">
                  {error?.message}
                </p>
              ))}
            </LabelInputContainer>
          )}
        </form.Field>

        <form.Subscribe>
          {(state) => (
            <Button
              className="group/btn relative w-full"
              type="submit"
              disabled={!state.canSubmit || state.isSubmitting}
            >
              {state.isSubmitting ? "Submitting..." : "Sign up"} &rarr;
              <BottomGradient />
            </Button>
          )}
        </form.Subscribe>

        <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <Button
            variant="secondary"
            className="group/btn shadow-input relative w-full justify-start"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Google
            </span>
            <BottomGradient />
          </Button>
          <Button
            variant="secondary"
            className="group/btn shadow-input relative justify-start"
            type="submit"
          >
            <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Facebook
            </span>
            <BottomGradient />
          </Button>
        </div>
      </form>
      <div className="bg-muted rounded-(--radius) border p-3">
        <p className="text-accent-foreground text-center text-sm">
          Have an account ?
          <Button asChild variant="link" className="px-2">
            <Link to="/login">Sign In</Link>
          </Button>
        </p>
      </div>
    </div>
    // <div className="mx-auto w-full mt-10 max-w-md p-6">
    // 	<h1 className="mb-6 text-center text-3xl font-bold">Create Account</h1>

    // 	<form
    // 		onSubmit={(e) => {
    // 			e.preventDefault();
    // 			e.stopPropagation();
    // 			form.handleSubmit();
    // 		}}
    // 		className="space-y-4"
    // 	>
    // 		<div>
    // 			<form.Field name="name">
    // 				{(field) => (
    // 					<div className="space-y-2">
    // 						<Label htmlFor={field.name}>Name</Label>
    // 						<Input
    // 							id={field.name}
    // 							name={field.name}
    // 							value={field.state.value}
    // 							onBlur={field.handleBlur}
    // 							onChange={(e) => field.handleChange(e.target.value)}
    // 						/>
    // 						{field.state.meta.errors.map((error) => (
    // 							<p key={error?.message} className="text-red-500">
    // 								{error?.message}
    // 							</p>
    // 						))}
    // 					</div>
    // 				)}
    // 			</form.Field>
    // 		</div>

    // 		<div>
    // 			<form.Field name="email">
    // 				{(field) => (
    // 					<div className="space-y-2">
    // 						<Label htmlFor={field.name}>Email</Label>
    // 						<Input
    // 							id={field.name}
    // 							name={field.name}
    // 							type="email"
    // 							value={field.state.value}
    // 							onBlur={field.handleBlur}
    // 							onChange={(e) => field.handleChange(e.target.value)}
    // 						/>
    // 						{field.state.meta.errors.map((error) => (
    // 							<p key={error?.message} className="text-red-500">
    // 								{error?.message}
    // 							</p>
    // 						))}
    // 					</div>
    // 				)}
    // 			</form.Field>
    // 		</div>

    // 		<div>
    // 			<form.Field name="password">
    // 				{(field) => (
    // 					<div className="space-y-2">
    // 						<Label htmlFor={field.name}>Password</Label>
    // 						<Input
    // 							id={field.name}
    // 							name={field.name}
    // 							type="password"
    // 							value={field.state.value}
    // 							onBlur={field.handleBlur}
    // 							onChange={(e) => field.handleChange(e.target.value)}
    // 						/>
    // 						{field.state.meta.errors.map((error) => (
    // 							<p key={error?.message} className="text-red-500">
    // 								{error?.message}
    // 							</p>
    // 						))}
    // 					</div>
    // 				)}
    // 			</form.Field>
    // 		</div>

    // 		<form.Subscribe>
    // 			{(state) => (
    // 				<Button
    // 					type="submit"
    // 					className="w-full"
    // 					disabled={!state.canSubmit || state.isSubmitting}
    // 				>
    // 					{state.isSubmitting ? "Submitting..." : "Sign Up"}
    // 				</Button>
    // 			)}
    // 		</form.Subscribe>
    // 	</form>

    // 	<div className="mt-4 text-center">
    // 		<Button
    // 			variant="link"
    // 			onClick={onSwitchToSignIn}
    // 			className="text-indigo-600 hover:text-indigo-800"
    // 		>
    // 			Already have an account? Sign In
    // 		</Button>
    // 	</div>
    // </div>
  );
}
