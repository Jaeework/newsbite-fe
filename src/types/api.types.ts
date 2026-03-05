export interface ApiResponse<T> {
  success: boolean;
  data: T;
  token?: string;
}

export interface ApiError {
  success: boolean;
  isUserError: boolean;
  message: string | null;
}
