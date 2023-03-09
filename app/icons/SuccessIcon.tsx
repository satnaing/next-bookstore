import { defaultStroke } from "@/lib/utils/utilFuncs"

const SuccessIcon = ({ className = "" }: { className?: string }) => {
  const stroke = defaultStroke(className)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} inline-block h-6 w-6 ${stroke}`}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M9 12l2 2l4 -4"></path>
    </svg>
  )
}

export default SuccessIcon
