import { defaultStroke } from "@/lib/utils/utilFuncs"

const MailIcon = ({ className = "" }: { className?: string }) => {
  const stroke = defaultStroke(className)
  return (
    <svg
      className={`${className} inline-block h-6 w-6 stroke-black ${stroke}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 9l5 3.5L17 9"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"></path>
    </svg>
  )
}

export default MailIcon
