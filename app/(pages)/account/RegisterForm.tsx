"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import Input from "@/common-components/Input"

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

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return (
    <section className="flex-1 pt-8 md:pt-0 md:pl-10 xl:pl-20">
      <h2 className="text-xl font-bold">Register</h2>
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
          Register
        </button>
      </form>
    </section>
  )
}
