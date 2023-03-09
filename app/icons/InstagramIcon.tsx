import { defaultStroke } from "@/lib/utils/utilFuncs"

const InstagramIcon = ({ className = "" }: { className?: string }) => {
  const stroke = defaultStroke(className)
  return (
    <svg
      className={`${className} inline-block h-6 w-6 stroke-black ${stroke}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16a4 4 0 100-8 4 4 0 000 8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z"></path>
      <path
        d="M17.5 6.51l.01-.011"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}

export default InstagramIcon
