import { MouseEventHandler } from "react"
import Link from "next/link"
import * as Collapsible from "@radix-ui/react-collapsible"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import MinusIcon from "@/icons/MinusIcon"
import PlusIcon from "@/icons/PlusIcon"

type Props = {
  title: string
  mobile?: boolean
  menuList: {
    name: string
    href: string
  }[]
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const CollapsibleMenu = ({
  title,
  mobile = false,
  menuList,
  onClick,
}: Props) => {
  return (
    <Collapsible.Root className={`${mobile ? "py-0" : "py-3"}`}>
      <Collapsible.Trigger
        className={`flex w-full items-center justify-between p-2 font-serif text-lg font-medium hover:bg-skin-muted`}
      >
        {title}
        <PlusIcon className="plus-icon" />
        <MinusIcon className="minus-icon" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <ul className="flex flex-col px-2 font-sans text-[15px]">
          {menuList.map(menu => (
            <li key={menu.name}>
              <NavigationMenu.Link asChild>
                <Link
                  href={menu.href}
                  className={`text-link ${
                    mobile ? "block p-2 text-base hover:bg-skin-muted" : ""
                  }`}
                  onClick={onClick}
                >
                  {menu.name}
                </Link>
              </NavigationMenu.Link>
            </li>
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export default CollapsibleMenu
