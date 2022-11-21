"use client"

import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import navLinks from "@/utils/navLinks"
import CaretDownIcon from "@/icons/CaretDownIcon"

const TopBar = () => {
  return (
    <div className="hidden bg-skin-card px-12 md:block">
      <NavigationMenu.Root className="flex justify-between text-sm">
        <NavigationMenu.List className="flex gap-x-2">
          {navLinks
            .filter(nav => ["top", "top-only"].includes(nav.position))
            .map(nav => (
              <NavigationMenu.Item key={nav.name}>
                <Link
                  href={nav.href}
                  className="flex items-center gap-x-2 px-1 hover:opacity-75"
                >
                  {nav.name}
                </Link>
              </NavigationMenu.Item>
            ))}
        </NavigationMenu.List>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              id="learn"
              className="flex h-full items-center gap-1"
              aria-controls="site-languages"
            >
              English{" "}
              <CaretDownIcon
                aria-hidden
                className="dropdown-caret transition-transform ease-in-out"
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              id="site-languages"
              className="absolute top-7 z-30 border bg-skin-base p-1 shadow-lg"
            >
              <ul className="List one">
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="inline-block w-full p-1 hover:bg-skin-card"
                      href="#"
                    >
                      English
                    </Link>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="inline-block w-full cursor-not-allowed p-1 opacity-70"
                      tabIndex={-1}
                      href="#"
                    >
                      Burmese
                    </Link>
                  </NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  )
}

export default TopBar
