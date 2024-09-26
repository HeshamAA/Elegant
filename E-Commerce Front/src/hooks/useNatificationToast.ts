import { useCallback } from "react";
import toast from "react-hot-toast";

interface ToastPromiseOptions {
  loading: string;
  success: string | JSX.Element; // Allow string or JSX for success message
  error: string; // Base error message without dynamic content
  duration?: number; // Optional duration
}
export const useNatificationToast = () => {
  const toastPromise = useCallback(
    <T>(
      promise: Promise<T>,
      { loading, success, error, duration = 3000 }: ToastPromiseOptions
    ) => {
      return toast.promise(
        promise,
        {
          loading,
          success: () => `${success}`,
          error: () => `${error}`,
        },
        {
          position: "top-right",
          success: {
            duration,
            className: "custom-toast",
          },
          error: {
            duration : 5000,
            className: "custom-toast-error",
          },
        }
      );
    },
    []
  );

  return { toastPromise };
};
