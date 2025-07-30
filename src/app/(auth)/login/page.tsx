import { LoginForm } from "@/features/auth/components/login-form";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Login",
});

const Login = () => {
  return <LoginForm />;
};

export default Login;
