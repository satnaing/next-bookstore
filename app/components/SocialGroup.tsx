import Link from "next/link"
import FacebookIcon from "@/icons/FacebookIcon"
import InstagramIcon from "@/icons/InstagramIcon"
import TelegramIcon from "@/icons/TelegramIcon"
import MailIcon from "@/icons/MailIcon"

type Props = {
  className?: string
  placeBottom?: boolean
}

const SocialGroup = ({ className = "", placeBottom = false }: Props) => {
  return (
    <ul
      className={`${className} flex justify-center gap-x-4 py-2 ${
        placeBottom ? "mt-auto mb-0" : ""
      }`}
    >
      {socialData.map(social => (
        <li key={social.name}>
          <Link
            className="rounded bg-skin-gray bg-opacity-0 p-3 hover:bg-opacity-30"
            href={social.href}
          >
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const socialData = [
  {
    name: "Facebook",
    href: "https://fb.com/satnaing.dev",
    icon: (
      <FacebookIcon className="stroke-skin-dark stroke-2 opacity-80 hover:opacity-100" />
    ),
  },
  {
    name: "Instagram",
    href: "https://ig.com/satnaing.dev",
    icon: (
      <InstagramIcon className="stroke-skin-dark stroke-2 opacity-80 hover:opacity-100" />
    ),
  },
  {
    name: "Telegram",
    href: "https://telegram.com/satnaing.dev",
    icon: (
      <TelegramIcon className="stroke-skin-dark stroke-2 opacity-80 hover:opacity-100" />
    ),
  },
  {
    name: "Email",
    href: "mailto:contact@satnaing.dev",
    icon: (
      <MailIcon className="stroke-skin-dark stroke-2 opacity-80 hover:opacity-100" />
    ),
  },
]

export default SocialGroup
