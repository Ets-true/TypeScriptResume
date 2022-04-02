export interface DefaultResponse<T> {
  data?: T;
  success: boolean;
  message: string;
}
