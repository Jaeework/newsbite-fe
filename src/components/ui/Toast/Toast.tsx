import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../features/hooks";
import { hideToast } from "../../../features/toast/toastSlice";
import { cn } from "../../../lib/utils";

const Toast = () => {
  const dispatch = useAppDispatch();

  const { message, type, isVisible } = useAppSelector((state) => state.toast);

  useEffect(() => {
    if (isVisible) {
      //토스트 활성시 n초후 스스로 닫기 액션 실행
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000); // 3초 후에 닫기
      return () => clearTimeout(timer);
    }
  }, [isVisible, dispatch]);

  if (!isVisible) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 fixed bottom-10 left-1/2 z-9999 -translate-x-1/2">
      <div
        className={cn(
          "rounded-xl px-6 py-3 text-sm font-medium shadow-lg transition-all",
          type === "success" && "bg-primary text-white",
          type === "error" && "bg-red-500 text-white",
          type === "info" && "bg-ink text-background",
        )}
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;
