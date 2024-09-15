import { useMutation } from "@tanstack/react-query";
import { getGoogleLoginUrl } from "../_services";
import { enqueueSnackbar } from "notistack";

export const useGetGoogleLoginUrl = () =>
  useMutation({
    mutationFn: getGoogleLoginUrl,
    onError: (error) => {
      enqueueSnackbar("เกิดข้อผิิดพลาดในการเชื่อมต่อกับบัญชี Google", {
        autoHideDuration: 2000,
        anchorOrigin: {
          horizontal: "right",
          vertical: "top",
        },
        variant: "error",
      });
    },
  });
