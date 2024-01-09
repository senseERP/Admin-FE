"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconBrandGithub, IconLoader2 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { buttonVariants } from "@shadcn/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shadcn/form";
import { Input } from "@shadcn/input";
import { cn } from "lib/shadcn/utils";
import { loginSchema } from "lib/validations/auth";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof loginSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    const signInResult = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });
    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast("Something went wrong", {
        description: "Your sign in request failed. Please try again.",
      });
    }

    toast("Check your email", {
      description: "We sent you a login link. Be sure to check your spam too.",
    });

    router.replace("/");
    //* invalidate the cache
    router.refresh();
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button className={cn(buttonVariants())} disabled={isLoading} type="submit">
              {isLoading && <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </button>
          </div>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsGitHubLoading(true);
          signIn("github");
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <IconBrandGithub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </button>
    </div>
  );
}
