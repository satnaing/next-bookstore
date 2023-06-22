"use client"

import { useEffect, useRef, useState } from "react"
import * as RadixToast from "@radix-ui/react-toast"
import { useToastStore } from "@/store/client"
import CancelIcon from "@/icons/CancelIcon"

const Toast = () => {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)
  const { toast, setToast, toastObj } = useToastStore()

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  useEffect(() => {
    if (!toast) return

    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setOpen(true)
      setToast()
    }, 100)
  }, [toast, setToast])

  return (
    <RadixToast.Provider swipeDirection="right" duration={2500}>
      <RadixToast.Root
        className={`grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded border-l-4 ${toastObj?.status} bg-skin-base py-2 px-4 font-sans shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]`}
        open={open}
        onOpenChange={setOpen}
      >
        <RadixToast.Title
          className={`mb-1 text-base font-bold capitalize delay-200 ${toastObj?.status} [grid-area:_title]`}
        >
          {open ? `${toastObj?.status}!` : ""}
        </RadixToast.Title>
        <RadixToast.Description asChild>
          <span className="m-0 text-[13px] leading-[1.3] text-skin-dark [grid-area:_description]">
            {open ? `${toastObj?.message}!` : ""}
          </span>
        </RadixToast.Description>
        <RadixToast.Action asChild altText="Close Notification">
          <button
            type="button"
            title="Close Notification"
            onClick={() => setOpen(false)}
            className="inline-flex h-[25px] items-center justify-center rounded text-xs font-medium leading-[25px] opacity-50 hover:opacity-100 focus:shadow-[0_0_0_0.5px]"
          >
            <CancelIcon />
          </button>
        </RadixToast.Action>
      </RadixToast.Root>
      <RadixToast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </RadixToast.Provider>
  )
}

export default Toast
