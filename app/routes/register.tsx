import type { Route } from "./+types/register";
import { Form, useActionData } from "react-router";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Register" }];
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();

  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const password = formData.get("password");

  console.log({
    fullName,
    email,
    password,
  });

  return null;
}

export default function RegisterRoute({}: Route.ComponentProps) {
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Register</h1>
        <p className="text-sm text-muted-foreground">Create your account</p>
      </header>

      <Form method="POST" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Register
        </Button>
      </Form>
    </div>
  );
}
