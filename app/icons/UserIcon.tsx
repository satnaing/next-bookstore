import { defaultStroke } from "@/lib/utils/utilFuncs"

const UserIcon = ({ className = "" }: { className?: string }) => {
  const stroke = defaultStroke(className)
  return (
    <svg
      className={`${className} inline-block h-6 w-6 stroke-black ${stroke}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 20v-1a7 7 0 017-7v0a7 7 0 017 7v1M12 12a4 4 0 100-8 4 4 0 000 8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}

export default UserIcon
