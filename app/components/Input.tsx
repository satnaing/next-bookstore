import { HTMLInputTypeAttribute } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

type Props = {
  label: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  errorMsg?: string
  register: UseFormRegisterReturn<string>
}

const Input = ({
  label,
  type = "text",
  placeholder,
  errorMsg,
  register,
}: Props) => {
  return (
    <div className="mb-4">
      <label className="font-sans font-medium">
        {label}
        <input
          type={type}
          placeholder={placeholder}
          className="my-1 block w-full rounded border-2 border-skin-gray bg-skin-base py-1 px-2 font-normal outline-skin-accent"
          {...register}
        />
      </label>
      {errorMsg && <div className="error">{errorMsg}</div>}
    </div>
  )
}

export default Input
