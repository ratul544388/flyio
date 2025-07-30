import React from "react";
import type { UseFormReturn, FieldValues } from "react-hook-form";
import { Form } from "./ui/form";

interface FormWrapperProps<TFormValues extends FieldValues> {
  form: UseFormReturn<TFormValues>;
  onSubmit: (values: TFormValues) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const FormWrapper = <TFormValues extends FieldValues>({
  form,
  onSubmit,
  title,
  description,
  children,
}: FormWrapperProps<TFormValues>) => {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-background border rounded-xl shadow">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-pretty text-sm">
            {description}
          </p>
        )}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 mt-8"
        >
          {children}
        </form>
      </Form>
    </div>
  );
};
