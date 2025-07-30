"use client";
import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {

  return (
    <div className="min-h-main flex py-6 items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
