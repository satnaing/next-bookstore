"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import * as Collapsible from "@radix-ui/react-collapsible"
import CollapsibleMenu from "@/common-components/CollapsibleMenu"
import SocialGroup from "@/common-components/SocialGroup"
import CaretDownIcon from "@/icons/CaretDownIcon"
import MenuIcon from "@/icons/MenuIcon"
import CancelIcon from "@/icons/CancelIcon"
import navLinks from "app/common/utils/navLinks"

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false)

  const handleNavClick = () => {
    setOpenNav(true)
  }

  useEffect(() => {
    document.body.style.overflowY = openNav ? "hidden" : "scroll"
  }, [openNav])

  return (
    <>
      <header className="sticky top-0 z-20 bg-skin-base px-4 shadow md:px-8">
        <NavigationMenu.Root
          aria-label="primary"
          className=" main-navigation relative m-auto flex max-w-6xl items-center justify-between py-4"
        >
          <div className="flex basis-1/3 justify-start md:hidden">
            <button title="menu" className="p-1" onClick={handleNavClick}>
              <MenuIcon />
            </button>
          </div>

          <div className="flex basis-1/3 justify-center md:justify-start">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold md:text-3xl"
            >
              Next
            </Link>
          </div>

          <NavigationMenu.List className="flex basis-1/3 gap-x-2 text-xl md:gap-x-4">
            <NavigationMenu.Item
              className="dropdown-menu hidden after:block after:w-0 after:border after:border-skin-accent after:opacity-0 after:transition-all after:duration-300 after:ease-out
            md:list-item
            "
            >
              <NavigationMenu.Trigger
                id="learn"
                className="flex h-full items-center gap-1 outline-8"
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
                className="absolute top-14 bg-skin-base p-4 shadow-lg lg:-left-1/2"
              >
                <div className="flex gap-x-4">
                  <div className="flex basis-1/2 flex-col gap-y-4">
                    <LinkItem title="Popular Now">
                      Build high-quality, accessible design systems and web
                      apps.
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

            {navLinks
              .filter(nav => ["main", "main-mobile"].includes(nav.position))
              .map(nav => (
                <NavigationMenu.Item
                  key={nav.name}
                  className={`${
                    nav.position === "main"
                      ? "hidden md:list-item"
                      : "list-item"
                  } after:block after:w-0 after:border after:border-skin-accent after:opacity-0 after:transition-all after:delay-200 after:duration-300 after:ease-out after:content-[''] after:hover:w-full after:hover:opacity-100`}
                >
                  <Link
                    href={nav.href}
                    className="flex items-center gap-x-2 py-1 pl-1 pr-2"
                  >
                    {nav.icon}{" "}
                    <span className="hidden md:inline">{nav.name}</span>
                  </Link>
                </NavigationMenu.Item>
              ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </header>
      <div
        className={`fixed top-0 left-0 z-30 h-screen w-full bg-skin-dark transition-all delay-300 duration-500 md:hidden ${
          openNav ? "opacity-50" : "hidden opacity-0"
        }`}
        onClick={() => setOpenNav(false)}
      />
      <div
        className={`fixed top-0 z-30 flex h-screen max-h-screen w-10/12 flex-col items-center overflow-y-scroll bg-skin-base p-4 transition-transform duration-300 md:hidden ${
          openNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          title="Close Menu"
          className="self-end p-1"
          onClick={() => setOpenNav(false)}
        >
          <CancelIcon className="scale-125" />
        </button>
        <div className="flex flex-col items-center">
          <div className="font-serif text-2xl font-medium">Next Book Store</div>
          <p>One of the best book stores in Myanmar</p>
        </div>

        <NavigationMenu.Root
          orientation="vertical"
          className="mt-4 mb-6 self-stretch"
        >
          <NavigationMenu.List className="flex flex-col items-start gap-x-2 divide-y text-xl md:gap-x-4">
            <NavigationMenu.Item className={`flex w-full flex-col`}>
              <Link
                href="/"
                className={`flex items-center gap-x-2 py-1 px-2 text-2xl`}
              >
                <span>Home</span>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="list-item w-full py-2">
              <Collapsible.Root>
                <Collapsible.Trigger
                  aria-controls="category-content-mobile"
                  className="flex h-full w-full items-center justify-between px-2 text-2xl"
                >
                  Category{" "}
                  <CaretDownIcon
                    aria-hidden
                    className="dropdown-caret transition-transform ease-in-out"
                  />
                </Collapsible.Trigger>
                <Collapsible.Content id="category-content-mobile">
                  <ul className="my-2 flex flex-col px-2 font-sans">
                    <li>
                      <NavigationMenu.Link asChild>
                        <Link
                          href="/popular-now"
                          className="block p-2 underline decoration-dotted hover:bg-skin-fill hover:decoration-solid"
                        >
                          Popular Now
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <NavigationMenu.Link asChild>
                        <Link
                          href="/new-books"
                          className="block p-2 underline decoration-dotted hover:bg-skin-fill hover:decoration-solid"
                        >
                          New Books
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <CollapsibleMenu
                        title="Mystery & Suspense"
                        mobile
                        menuList={mysteryMenuList}
                      />
                    </li>
                    <li>
                      <CollapsibleMenu
                        title="Education & Profession"
                        mobile
                        menuList={educationMenuList}
                      />
                    </li>
                    <li>
                      <CollapsibleMenu
                        title="Literature & Fiction"
                        mobile
                        menuList={literatureList}
                      />
                    </li>
                  </ul>
                </Collapsible.Content>
              </Collapsible.Root>
            </NavigationMenu.Item>

            {navLinks.map(nav => (
              <NavigationMenu.Item
                key={nav.name}
                className={`flex w-full flex-col ${
                  nav.position === "main" ? "list-item" : "hidden"
                }`}
              >
                <Link
                  href={nav.href}
                  className={`flex items-center gap-x-2 py-1 px-2 text-2xl`}
                >
                  <span>{nav.name}</span> {nav.icon}
                </Link>
              </NavigationMenu.Item>
            ))}

            <NavigationMenu.Item className={`flex w-full flex-col`}>
              <Link
                href="/about-us"
                className={`flex items-center gap-x-2 py-1 px-2 text-2xl`}
              >
                <span>About Us</span>
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className={`flex w-full flex-col`}>
              <Link
                href="/contact-us"
                className={`flex items-center gap-x-2 py-1 px-2 text-2xl`}
              >
                <span>Contact Us</span>
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <SocialGroup placeBottom />
      </div>
    </>
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
  { name: "Crime", href: "/categories/crime" },
  { name: "Detective", href: "/categories/detective" },
  { name: "Mysteries", href: "/categories/mysteries" },
  { name: "spy", href: "/categories/spy" },
]

const literatureList = [
  { name: "Classic", href: "/categories/classic" },
  { name: "Genre Fiction", href: "/categories/genre-fiction" },
  { name: "Sci-Fi & Fantasy", href: "/categories/scifi-and-fantasy" },
  { name: "Romance", href: "/categories/romance" },
]

const educationMenuList = [
  { name: "Colleges", href: "/categories/colleges" },
  { name: "Dictionaries", href: "/categories/dictionaries" },
  { name: "IT & Engineering", href: "/categories/it-and-engineering" },
  { name: "Sales & Marketing", href: "/categories/sales-and-marketing" },
  { name: "English & IELTS", href: "/categories/english-and-ielts" },
  { name: "Science & Maths", href: "/categories/science-and-maths" },
]

export default NavBar
