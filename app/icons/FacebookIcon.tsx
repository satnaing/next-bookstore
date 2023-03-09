import { defaultStroke } from "@/lib/utils/utilFuncs"

const FacebookIcon = ({ className = "" }: { className?: string }) => {
  const stroke = defaultStroke(className)
  return (
    <svg
      className={`${className} inline-block h-6 w-6 stroke-black ${stroke}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}

export default FacebookIcon
