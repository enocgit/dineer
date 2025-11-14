import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Search, Refrigerator, Sparkles } from "lucide-react";
import { ReactNode } from "react";

const features = [
  {
    title: "Track your pantry",
    description:
      "Add ingredients you have at home and keep your pantry organized",
    icon: <Refrigerator className="size-6" aria-hidden />,
  },

  {
    title: "Find Recipes",
    description:
      "Get personalized recipe recommendations based on what you have",
    icon: <Search className="size-6" aria-hidden />,
  },

  {
    title: "Save Favorites",
    description: "Keep track of recipes you love and create shopping lists",
    icon: <Sparkles className="size-6" aria-hidden />,
  },
];

export default function Features() {
  return (
    <section className="overflow-x-hidden py-16 md:py-32">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="relative mx-auto grid max-w-sm gap-6 *:text-center @min-4xl:max-w-full @min-4xl:grid-cols-3">
          {/* Background elements */}
          <img
            src="/images/background/broccoli.png"
            className="absolute top-4 -right-22 size-32 rotate-45"
          />
          <img
            src="/images/background/tomato.png"
            className="absolute bottom-4 -left-22 size-32 rotate-12"
          />

          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-foreground border-4 bg-yellow-400/80 shadow-zinc-950/5"
            >
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
        <div className="mt-16 flex flex-col items-center gap-x-10 gap-y-5 text-center md:flex-row md:text-left">
          <h2 className="text-4xl font-semibold text-balance lg:text-5xl">
            Your Kitchen Upgraded
          </h2>
          <p>
            From pantry tracking to instant recipe ideas, Smart Pantry Recipes
            turns everyday ingredients into delicious, stress-free meals.
          </p>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 mask-radial-from-40% mask-radial-to-60% duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">
      {children}
    </div>
  </div>
);
