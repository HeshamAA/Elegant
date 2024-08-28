import { useCallback } from "react";
import toast from "react-hot-toast";

type TToast = {
  text: string;
  duration?: number;
  dependency?: number;
};
export const useNatificationToast = ({
  text,
  duration = 2000,
  dependency,
}: TToast) => {
  const notify = useCallback(() => {
    toast.success(`${text}`, {
      duration: duration,
      position: "top-right",
      className: "custom-toast",
    });
  }, [dependency]);

  const errorNotify = useCallback(() => {
    toast.error(`${text}`, {
      duration: duration,
      position: "top-right",
      className: "custom-toast-error",
    });
  }, [dependency]);

  return { notify, errorNotify };
};
