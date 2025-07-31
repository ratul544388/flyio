"use client";
import { Container } from "@/components/container";
import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {

  return (
    <Container className="min-h-main flex py-10 items-center justify-center">
      {children}
    </Container>
  );
};

export default AuthLayout;
