import { request } from "@/lib/request";
import { useUser } from "@/providers/user-context-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { registerSchema, RegisterValues } from "../validations";
import { ApiErrorResponse, ApiResponse } from "@/types/api";

export const useRegister = () => {
  const { setToken } = useUser();
  const router = useRouter();
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      gender: undefined,
      phone: "",
    },
  });

  const { mutate, isPending } = useMutation<
    ApiResponse<{ token: string }>,
    AxiosError<ApiErrorResponse>,
    RegisterValues
  >({
    mutationFn: (data: RegisterValues) =>
      request({
        url: "/register",
        data,
      }),
    onSuccess: (response) => {
      router.push("/flights");
      console.log(response);
      setToken(response.data.token);
      toast.success(response.message);
      toast.success("Account created successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });

  return { register: mutate, form, isPending };
};
