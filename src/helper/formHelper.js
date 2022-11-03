import { toast } from "react-toastify";


export function toastWarn(value) {
    toast.error(value);
}

export function toastSuccess(value) {
    toast.success(value);
}

