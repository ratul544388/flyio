import { request } from "@/lib/request";
import { useUser } from "@/providers/user-context-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { loginSchema, LoginValues } from "../validations";
import { ApiErrorResponse, ApiResponse } from "@/types/api";

export const useLogin = () => {
  const { setToken } = useUser();
  const router = useRouter();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation<
    ApiResponse<{ token: string }>,
    AxiosError<ApiErrorResponse>,
    LoginValues
  >({
    mutationFn: (data) =>
      request({
        url: "/login",
        data,
      }),
    onSuccess: (response) => {
      router.push("/flights");
      setToken(response.data.token);
      toast.success(response.message);
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });

  return { login: mutate, form, isPending };
};
