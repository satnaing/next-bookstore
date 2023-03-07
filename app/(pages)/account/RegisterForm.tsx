"use client"

import React from "react"
import Error from "next/error"
import { useRouter } from "next/navigation"
import axios, { AxiosError } from "axios"
import { useMutation } from "@tanstack/react-query"
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { SubmitHandler, useForm } from "react-hook-form"
import Input from "@/common-components/Input"
import AlertIcon from "@/icons/AlertIcon"
import SuccessIcon from "@/icons/SuccessIcon"
import scrollToTop from "@/utils/scrollToTop"

type Inputs = {
  fullName: string
  email: string
  username: string
  phone: string
  password: string
  confirmPassword: string
  address: string
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const [errorMsg, setErrorMsg] = React.useState<string | null>(null)
  const [open, setOpen] = React.useState(false)

  const mutation = useMutation({
    mutationFn: (userData: Inputs) =>
      axios.post("http://localhost:1337/api/auth/local/register", userData),
    onError: (error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        if (error.code === "ERR_NETWORK") {
          setErrorMsg("Network error occurs.")
        } else if (error.code === "ERR_BAD_REQUEST") {
          setErrorMsg(
            error.response?.data.error.message.replace(
              "This attribute",
              "Phone"
            )
          )
        } else {
          setErrorMsg("An error occurs.")
        }
        scrollToTop()
      } else {
        // Just a stock error
        setErrorMsg("Unknown error occurs.")
      }
    },
    onSuccess: (data, variables, context) => {
      setErrorMsg(null)
      setOpen(true)
    },
  })

  const onSubmit: SubmitHandler<Inputs> = data => {
    mutation.mutate(data)
  }

  return (
    <>
      <section className="flex-1 pt-8 md:pt-0 md:pl-10 xl:pl-20">
        <h2 className="text-xl font-bold">Register</h2>
        {errorMsg && (
          <span className="error mt-2 inline-block">
            <AlertIcon className="stroke-2 align-text-bottom" /> {errorMsg}
          </span>
        )}
        <form action="" className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Full Name"
            placeholder="John Doe"
            errorMsg={errors?.fullName?.message}
            register={register("fullName", {
              pattern: {
                value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                message: "Please enter a valid full name.",
              },
              required: {
                value: true,
                message: "This field is required.",
              },
            })}
          />

          <Input
            label="Email Address"
            placeholder="johndoe@gmail.com"
            errorMsg={errors?.email?.message}
            type="email"
            register={register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
              required: {
                value: true,
                message: "This field is required.",
              },
            })}
          />

          <Input
            label="Username"
            placeholder="johndoe"
            errorMsg={errors?.username?.message}
            register={register("username", {
              required: {
                value: true,
                message: "This field is required.",
              },
              minLength: {
                value: 3,
                message: "Username must be between 3 to 16 characters",
              },
              maxLength: {
                value: 16,
                message: "Username must be between 3 to 16 characters",
              },
            })}
          />

          <Input
            label="Phone"
            placeholder="+959501234 (or) 09501234"
            errorMsg={errors?.phone?.message}
            register={register("phone", {
              required: {
                value: true,
                message: "This field is required.",
              },
              pattern: {
                value: /^(\+?95|\+?959|09)?([2-9]\d{6,9})$/,
                message: "Please enter a valid phone number.",
              },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="password"
            errorMsg={errors?.password?.message}
            register={register("password", {
              required: {
                value: true,
                message: "This field is required.",
              },
              minLength: {
                value: 6,
                message: "Password must contain at least 6 characters",
              },
            })}
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            errorMsg={errors?.confirmPassword?.message}
            register={register("confirmPassword", {
              required: {
                value: true,
                message: "This field is required.",
              },
              validate: (val: string) => {
                if (watch("password") != val) {
                  return "Passwords do no match"
                }
              },
            })}
          />

          <div className="mb-4">
            <label className="font-sans font-medium">
              Address
              <textarea
                placeholder="No (27), 11 M, Hledan, Yangon"
                rows={4}
                className="my-1 block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2 font-normal outline-skin-accent"
                // ref={register("address")}
                {...register("address", {
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                })}
              />
            </label>
            {errors.address && (
              <div className="error">{errors.address.message}</div>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 rounded bg-skin-accent py-2 px-8 font-sans font-medium text-skin-base md:py-1 md:px-5"
          >
            {mutation.isLoading ? "Loading" : "Register"}
          </button>
          {mutation.isSuccess ? <div>Account registered</div> : null}
          {/* {mutation.isError ? (
          <div>
            An error occurred:{" "}
            {mutation.error instanceof Error && mutation.error.response}
          </div>
        ) : null} */}
        </form>
      </section>

      <AlertModal open={open} setOpen={setOpen} />
    </>
  )
}

type AlertProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AlertModal = ({ open, setOpen }: AlertProps) => {
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
            Registration Success
          </AlertDialog.Title>
          <AlertDialog.Description className="mt-4 mb-5 w-64 text-center leading-normal">
            Congratulations! Your account has been successfully created.
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
