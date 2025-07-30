"use client";

import React from "react";
import { FormInput } from "@/components/form-input";
import { FormPasswordInput } from "@/components/form-password-input";
import { FormWrapper } from "@/components/form-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLogin } from "../hooks/use-login";

export const LoginForm = () => {
  const { login, isPending, form } = useLogin();

  return (
    <FormWrapper
      form={form}
      onSubmit={login}
      title="Welcome Back to FLYIO"
      description="Log in to manage your bookings, explore new destinations, and take off with the best flight deals available."
    >
      <FormInput
        control={form.control}
        name="email"
        disabled={isPending}
        autoFocus
      />
      <FormPasswordInput
        control={form.control}
        showPasswordRules={false}
        name="password"
        disabled={isPending}
      />
      <Button type="submit" className="w-full" disabled={isPending}>
        Login
      </Button>
      <div className="text-sm font-medium text-center">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className={cn(
            "hover:underline",
            isPending && "opacity-60 pointer-events-none"
          )}
        >
          Create one
        </Link>
      </div>
    </FormWrapper>
  );
};