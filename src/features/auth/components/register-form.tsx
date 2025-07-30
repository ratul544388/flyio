"use client";

import { FormInput } from "@/components/form-input";
import { FormPasswordInput } from "@/components/form-password-input";
import { FormWrapper } from "@/components/form-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FormSelect } from "@/components/form-select";
import { cn } from "@/lib/utils";
import { useRegister } from "../hooks/use-register";

export const RegisterForm = () => {
  const { register, isPending, form } = useRegister();

  return (
    <FormWrapper
      form={form}
      onSubmit={register}
      title="Register to FLYIO"
      description="Seamless flight booking at your fingertips. Find the best deals, choose your seats, and get ready to fly — all in one place."
    >
      <FormInput
        control={form.control}
        name="name"
        autoFocus
        disabled={isPending}
      />
      <FormInput control={form.control} name="email" disabled={isPending} />
      <FormInput
        type="number"
        control={form.control}
        name="phone"
        disabled={isPending}
      />
      <FormSelect
        options={[
          {
            label: "Male",
            value: "Male",
          },
          {
            label: "Female",
            value: "Female",
          },
        ]}
        control={form.control}
        name="gender"
        disabled={isPending}
      />
      <FormPasswordInput
        control={form.control}
        name="password"
        disabled={isPending}
      />
      <Button type="submit" className="w-full" disabled={isPending}>
        Register
      </Button>
      <div className="text-sm font-medium text-center">
        Alraedy have an account?{" "}
        <Link href="/login" className={cn("hover:underline", isPending && "opacity-60 pointer-events-none")}>
          Login
        </Link>
      </div>
    </FormWrapper>
  );
};