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
      className={`${className} my-6 flex justify-center gap-4 ${
        placeBottom ? "mt-auto mb-0" : ""
      }`}
    >
      {socialData.map(social => (
        <li key={social.name}>
          <Link className="p-2" href={social.href}>
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
    icon: <FacebookIcon className="scale-125" />,
  },
  {
    name: "Instagram",
    href: "https://ig.com/satnaing.dev",
    icon: <InstagramIcon className="scale-125" />,
  },
  {
    name: "Telegram",
    href: "https://telegram.com/satnaing.dev",
    icon: <TelegramIcon className="scale-125" />,
  },
  {
    name: "Email",
    href: "mailto:contact@satnaing.dev",
    icon: <MailIcon className="scale-125" />,
  },
]

export default SocialGroup
