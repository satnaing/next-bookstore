"use client"

import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import CollapsibleMenu from "./CollapsibleMenu"
import SearchIcon from "@/icons/SearchIcon"
import CaretDownIcon from "@/icons/CaretDownIcon"
import CartIcon from "@/icons/CartIcon"
import HeartIcon from "@/icons/HeartIcon"
import UserIcon from "@/icons/UserIcon"

const Header = () => {
  return (
    <header className="px-12 shadow">
      <NavigationMenu.Root className="relative flex items-center justify-between py-4">
        <Link href="/" className="font-serif text-3xl font-semibold">
          Next
        </Link>

        <NavigationMenu.List className="flex gap-x-4 text-xl">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              id="learn"
              className="flex h-full items-center gap-2 px-2"
              aria-controls="category-content"
            >
              Category{" "}
              <CaretDownIcon
                aria-hidden
                className="dropdown-caret transition-transform ease-in-out"
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              id="category-content"
              className="absolute top-14 -left-1/2 p-4 shadow-lg"
            >
              <div className="flex gap-x-4">
                <div className="flex basis-1/2 flex-col gap-y-4">
                  <LinkItem title="Popular Now">
                    Build high-quality, accessible design systems and web apps.
                  </LinkItem>
                  <LinkItem title="New Books">
                    A quick tutorial to get you up and running with Radix
                    Primitives.
                  </LinkItem>
                </div>
                <div className="basis-1/2 divide-y">
                  <CollapsibleMenu
                    title="Mystery & Suspense"
                    menuList={mysteryMenuList}
                  />
                  <CollapsibleMenu
                    title="Education & Profession"
                    menuList={educationMenuList}
                  />
                  <CollapsibleMenu
                    title="Literature & Fiction"
                    menuList={literatureList}
                  />
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {navLinks.map(nav => (
            <NavigationMenu.Item key={nav.name}>
              <Link
                href={nav.href}
                className="flex items-center gap-x-2 py-1 px-2"
              >
                {nav.icon} {nav.name}
              </Link>
            </NavigationMenu.Item>
          ))}

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <NavigationMenu.Indicator className="h-1 bg-yellow-400" />
      </NavigationMenu.Root>
    </header>
  )
}

const LinkItem = ({ title, children }: { title: string; children: string }) => {
  return (
    <Link href="/popular-now" className="p-2 hover:bg-skin-fill">
      <div className="font-bold">{title}</div>
      <p className="font-sans text-sm">{children}</p>
    </Link>
  )
}

const mysteryMenuList = [
  { name: "Crime", href: "/crime" },
  { name: "Detective", href: "/detective" },
  { name: "Mysteries", href: "/mysteries" },
  { name: "spy", href: "/spy" },
]

const literatureList = [
  { name: "Colleges", href: "/colleges" },
  { name: "Dictionaries", href: "/dictionaries" },
  { name: "IT & Engineering", href: "/it-and-engineering" },
  { name: "Sales & Marketing", href: "/sales-and-marketing" },
  { name: "English & IELTS", href: "/english-and-ielts" },
  { name: "Science & Maths", href: "/science-and-maths" },
]

const educationMenuList = [
  { name: "Classic", href: "/classic" },
  { name: "Genre Fiction", href: "/genre-fiction" },
  { name: "Sci-Fi & Fantasy", href: "/scifi-and-fantasy" },
  { name: "Romance", href: "/romance" },
]

const navLinks = [
  { name: "Search", icon: <SearchIcon />, href: "/search" },
  { name: "Account", icon: <UserIcon />, href: "/account" },
  { name: "Wishlist", icon: <HeartIcon />, href: "/wishlist" },
  { name: "Cart", icon: <CartIcon />, href: "/cart" },
]

export default Header
