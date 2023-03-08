import { defaultStroke } from "@/lib/utils/utilFuncs"

const PlusIcon = ({ className = "" }: { className?: string }) => {
  const stroke = defaultStroke(className)
  return (
    <svg
      className={`${className} inline-block h-6 w-6 stroke-black ${stroke}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12h6m6 0h-6m0 0V6m0 6v6"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}

export default PlusIcon
