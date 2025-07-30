export type ApiResponse<T = unknown> = {
  ok: boolean;
  message: string;
  statusCode: number;
  data: T;
};

export type ApiErrorResponse = {
  ok: boolean;
  message: string;
  errorDetails: {
    name: string;
    message: string;
    status?: number;
  };
};