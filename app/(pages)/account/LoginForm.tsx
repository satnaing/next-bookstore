"use client"

import Input from "@/common-components/Input"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return (
    <section className="flex-1 pb-8 md:pb-0 md:pr-10 xl:pr-20">
      <h2 className="text-xl font-bold">Login</h2>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
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
          label="Password"
          placeholder="Password"
          errorMsg={errors?.password?.message}
          type="password"
          register={register("password", {
            required: {
              value: true,
              message: "This field is required",
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
          className="rounded bg-skin-accent py-2 px-8 font-sans font-medium text-skin-base md:py-1 md:px-5"
        >
          Login
        </button>
      </form>
    </section>
  )
}
