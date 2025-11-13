import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";

const features = [
  {
    title: "Track your pantry",
    description:
      "Add ingredients you have at home and keep your pantry organized",
    icon: <Zap className="size-6" aria-hidden />,
  },

  {
    title: "Find Recipes",
    description:
      "Get personalized recipe recommendations based on what you have",
    icon: <Settings2 className="size-6" aria-hidden />,
  },

  {
    title: "Save Favorites",
    description: "Keep track of recipes you love and create shopping lists",
    icon: <Sparkles className="size-6" aria-hidden />,
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-32">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto grid max-w-sm gap-6 *:text-center">
          {features.map((feature) => (
            <Card className="group border-4 bg-yellow-400/80 border-foreground shadow-zinc-950/5">
              <CardHeader className="pb-3">
                <CardDecorator>{feature.icon}</CardDecorator>

                <h3 className="mt-6 font-medium">{feature.title}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex gap-5 mt-8 md:mt-16">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Built to cover your needs
          </h2>
          <p className="mt-4">
            Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
            repellendus.
          </p>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
