import { LoginForm } from "@/features/auth/components/login-form";
import { Metadata } from "next";

export const metadata = (): Metadata => {
  return {
    title: "Login",
  };
};

const Login = () => {
  return <LoginForm />;
};

export default Login;
