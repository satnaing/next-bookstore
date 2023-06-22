import { create } from "zustand"

/* ===== Toast Store ===== */
type ToastObj = {
  status: "success" | "info" | "error" | "warning"
  message: string
}

type ToastState = {
  toast: boolean
  toastObj?: ToastObj
  setToast: (obj?: ToastObj) => void
}

export const useToastStore = create<ToastState>()(set => ({
  toast: false,
  toastObj: { status: "info", message: "" },
  setToast: obj => set(state => setToast(state, obj)),
}))

function setToast(state: ToastState, toastObj?: ToastObj) {
  if (!toastObj) return { toast: !state.toastObj }

  return {
    toast: !state.toast,
    toastObj,
  }
}
