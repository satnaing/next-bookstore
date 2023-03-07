"use client"

import SuccessIcon from "@/icons/SuccessIcon"
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { useRouter } from "next/navigation"

type AlertProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  desc: string
}

const AuthAlert = ({ open, setOpen, title, desc }: AlertProps) => {
  const router = useRouter()

  const handleOutsideClick = () => {
    setOpen(false)
    router.push("/")
  }

  return (
    <AlertDialog.Root open={open} onOpenChange={() => setOpen(prev => !prev)}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          onClick={handleOutsideClick}
          className="fixed inset-0 z-20 bg-skin-dark bg-opacity-70 backdrop-blur-sm"
        />
        <AlertDialog.Content className="fixed top-1/3 left-1/2 z-30 flex max-h-[85vh] w-[90vw] max-w-[400px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded bg-white p-6 focus:outline-none">
          <SuccessIcon className="success stroke h-16 w-16" />
          <AlertDialog.Title className="success m-0 text-xl font-bold tracking-wider">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="mt-4 mb-5 w-64 text-center leading-normal">
            {desc}
          </AlertDialog.Description>
          <AlertDialog.Action asChild autoFocus>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="focus:shadow-red7 inline-flex h-9 items-center justify-center rounded bg-teal-500 px-4 font-medium leading-none text-white outline-2 outline-offset-2 outline-teal-500 hover:bg-opacity-80 active:bg-opacity-90"
            >
              Continue
            </button>
          </AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default AuthAlert
