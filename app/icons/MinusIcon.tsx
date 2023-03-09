import { defaultStroke } from "@/lib/utils/utilFuncs"

const MinusIcon = ({ className = "" }: { className?: string }) => {
  const stroke = defaultStroke(className)
  return (
    <svg
      className={`${className} inline-block h-6 w-6 stroke-black ${stroke}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 12h12" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}

export default MinusIcon
