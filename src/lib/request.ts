import { API_URL } from "@/constants";
import type { AxiosResponse, Method } from "axios";
import axios from "axios";

type QueryParams = Record<string, string | number | boolean>;

interface RequestOptions<Data = unknown> {
  method?: Method;
  url: string;
  data?: Data;
  params?: QueryParams;
}

export async function request<Data = unknown, Response = unknown>({
  method = "post",
  url,
  data,
  params,
}: RequestOptions<Data>): Promise<Response> {
  const res: AxiosResponse<Response> = await axios.request({
    method,
    url: `${API_URL}/api${url}`,
    data,
    params,
  });

  return res.data;
}
