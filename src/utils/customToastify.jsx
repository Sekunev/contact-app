import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ToastifySuccess = (msg) => {
  toast.success(msg, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export default ToastifySuccess;
