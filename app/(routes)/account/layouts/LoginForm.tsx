"use client"

import React from "react"
import Link from "next/link"
import axios, { AxiosError } from "axios"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import Input from "@/components/Input"
import AuthAlert from "@/components/AuthAlert"
import AlertIcon from "@/icons/AlertIcon"
import scrollToTop from "@/utils/scrollToTop"
import { useAuthStore } from "@/store/client"

type Inputs = {
  identifier: string
  password: string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const { setToken } = useAuthStore()

  const [errorMsg, setErrorMsg] = React.useState<string | null>(null)
  const [fullName, setFullName] = React.useState<string | null>(null)
  const [open, setOpen] = React.useState(false)

  const mutation = useMutation({
    mutationFn: (userData: Inputs) =>
      axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/local/`,
        userData
      ),
    onError: (error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        if (error.code === "ERR_NETWORK") {
          setErrorMsg("Network error occurs.")
        } else if (error.code === "ERR_BAD_REQUEST") {
          setErrorMsg(
            error.response?.data.error.message.replace("identifier", "email")
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
      setToken(data.data.jwt)
      setFullName(data.data.user.fullName)
      setErrorMsg(null)
      setOpen(true)
    },
  })

  const onSubmit: SubmitHandler<Inputs> = data => {
    mutation.mutate(data)
  }

  return (
    <>
      <section className="flex-1 pb-8 md:pb-0 md:pr-10 xl:pr-20">
        <h2 className="text-xl font-bold">Login</h2>
        {errorMsg && (
          <span className="error mt-2 inline-block">
            <AlertIcon className="stroke-2 align-text-bottom" /> {errorMsg}
          </span>
        )}
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email Address"
            placeholder="johndoe@gmail.com"
            errorMsg={errors?.identifier?.message}
            type="email"
            register={register("identifier", {
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
            label="Password"
            placeholder="Password"
            errorMsg={errors?.password?.message}
            type="password"
            register={register("password", {
              required: {
                value: true,
                message: "This field is required",
              },
              minLength: {
                value: 6,
                message: "Password must contain at least 6 characters",
              },
            })}
          />

          <div className="mb-4">
            <Link
              href=""
              className="font-sans text-sm opacity-75 hover:opacity-100"
            >
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="primary-btn-color rounded py-2 px-8 font-sans font-medium md:py-1 md:px-5"
          >
            Login
          </button>
        </form>
      </section>

      <AuthAlert
        open={open}
        setOpen={setOpen}
        title="Login Success"
        desc={`Welcome back, ${fullName}!`}
      />
    </>
  )
}
