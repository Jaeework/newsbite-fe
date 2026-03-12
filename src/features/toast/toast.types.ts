export interface ToastState {
  message: string;
  type: "success" | "error" | "info";
  isVisible: boolean;
}
