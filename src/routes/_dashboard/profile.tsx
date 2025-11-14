import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, XIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const dietPreferences = [
  "Vegetarian",
  "Vegan",
  "Gluten-free",
  "Lactose-free",
  "Keto",
  "Paleo",
];

const allergies = ["Peanuts", "Tree Nuts", "Gluten", "Dairy", "Soy"];

export const Route = createFileRoute("/_dashboard/profile")({
  ssr: false,
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl space-y-6">
        <article>
          <h1 className="mb-2 text-3xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">
            Manage your preferences and dietary restrictions
          </p>
        </article>

        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value=""
                // onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value=""
                // onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Diet Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 [&>div]:flex-1">
              <Input
                placeholder="Add diet preference (e.g., Vegetarian)"
                value=""
                // onChange={(e) => setNewDiet(e.target.value)}
                // onKeyDown={(e) => e.key === 'Enter' && addDietPreference()}
              />
              <Button aria-label="Add diet preference">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {dietPreferences.map((diet) => (
                <Badge key={diet} variant="secondary" className="gap-2">
                  {diet}
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Remove diet preference"
                  >
                    <XIcon className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              {dietPreferences.length === 0 && (
                <p className="text-muted-foreground text-sm">
                  No diet preferences added
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Allergies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Add allergy (e.g., Peanuts)"
                value=""
                // onChange={(e) => setNewAllergy(e.target.value)}
                // onKeyDown={(e) => e.key === 'Enter' && addAllergy()}
              />
              <Button aria-label="Add allergy">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {allergies.map((allergy) => (
                <Badge key={allergy} variant="destructive" className="gap-2">
                  {allergy}
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Remove allergy"
                  >
                    <XIcon className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              {allergies.length === 0 && (
                <p className="text-muted-foreground text-sm">
                  No allergies added
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Button aria-label="Save changes" className="w-full">
          Save Changes
        </Button>
      </div>
    </main>
  );
}
