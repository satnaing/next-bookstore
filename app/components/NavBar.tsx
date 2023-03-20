"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import * as Collapsible from "@radix-ui/react-collapsible"
import CollapsibleMenu from "app/components/CollapsibleMenu"
import SocialGroup from "app/components/SocialGroup"
import CaretDownIcon from "@/icons/CaretDownIcon"
import CartDropdown from "app/components/CartDropdown"
import SearchDialog from "app/components/SearchDialog"
import MenuIcon from "@/icons/MenuIcon"
import CancelIcon from "@/icons/CancelIcon"
import navLinks from "@/lib/utils/navLinks"
import useScroll from "@/lib/hooks/useScroll"

const NavBar = () => {
  const [navClassList, setNavClassList] = useState<string[]>([])
  const scroll = useScroll()

  const [openNav, setOpenNav] = useState(false)

  const closeNav = () => {
    setOpenNav(false)
  }

  useEffect(() => {
    document.body.style.overflowY = openNav ? "hidden" : "scroll"
  }, [openNav])

  // add shadow to nav (with classList) on scroll
  useEffect(() => {
    const _classList = []

    if (scroll.y > 25) _classList.push("!shadow")

    setNavClassList(_classList)
  }, [scroll.y])

  return (
    <>
      <header
        className={`sticky top-0 z-20 bg-skin-base ${navClassList.join(" ")}`}
      >
        <NavigationMenu.Root
          aria-label="primary"
          className=" main-navigation padding-x max-width relative m-auto flex max-w-6xl items-center justify-between py-4"
        >
          <div className="flex basis-1/3 justify-start md:hidden">
            <button
              type="button"
              title="menu"
              className="p-1"
              onClick={() => setOpenNav(true)}
            >
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

          <NavigationMenu.List className="flex basis-1/3 gap-x-2 text-lg md:gap-x-4">
            <NavigationMenu.Item className="nav-menu-dropdown hidden md:list-item">
              <NavigationMenu.Trigger
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
                className="absolute top-14 border border-skin-muted bg-skin-base p-4 shadow-lg lg:-left-1/2"
              >
                <div className="flex gap-x-4">
                  <div className="flex basis-1/2 flex-col gap-y-4">
                    <LinkItem title="Best Seller" href="best-seller">
                      Discover the most captivating literary works that have won
                      the hearts of bookworms
                    </LinkItem>
                    <LinkItem title="New Arrivals" href="new-arrivals">
                      Explore the latest and greatest literary works of fresh
                      titles and exciting authors
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

            <NavigationMenu.Item className="nav-menu">
              <SearchDialog />
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
                  } nav-menu`}
                >
                  <Link
                    href={nav.href}
                    className="flex h-full items-center gap-x-2 py-1 pl-1 pr-2"
                  >
                    {nav.icon}{" "}
                    <span className="hidden md:inline">{nav.name}</span>
                  </Link>
                </NavigationMenu.Item>
              ))}

            {/* Cart Dropdown */}
            <CartDropdown />
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </header>

      {/* ===== Mobile Navigation ===== */}
      <div
        className={`fixed top-0 left-0 z-30 h-screen w-full bg-skin-dark transition-all delay-300 duration-500 md:hidden ${
          openNav ? "opacity-50" : "hidden opacity-0"
        }`}
        onClick={closeNav}
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
          onClick={closeNav}
        >
          <CancelIcon className="scale-125" />
        </button>
        <div className="flex flex-col items-center gap-2">
          <div className="font-serif text-2xl font-medium">Next Book Store</div>
          <p className="text-center">
            One of the best book stores <br />
            in Myanmar
          </p>
        </div>

        <NavigationMenu.Root
          orientation="vertical"
          className="mt-4 mb-6 self-stretch"
        >
          <NavigationMenu.List className="flex flex-col items-start gap-x-2 divide-y text-xl md:gap-x-4">
            <NavigationMenu.Item className={`flex w-full flex-col`}>
              <Link
                href="/"
                className={`flex items-center gap-x-2 py-1 px-2 text-xl`}
                onClick={closeNav}
              >
                <span>Home</span>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="list-item w-full py-2">
              <Collapsible.Root>
                <Collapsible.Trigger
                  aria-controls="category-content-mobile"
                  className="flex h-full w-full items-center justify-between px-2 text-xl"
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
                          href="/categories/best-seller"
                          className="block p-2 font-serif underline decoration-dotted hover:bg-skin-muted hover:decoration-solid"
                          onClick={closeNav}
                        >
                          Best Seller
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <NavigationMenu.Link asChild>
                        <Link
                          href="/categories/new-arrivals"
                          className="block p-2 font-serif underline decoration-dotted hover:bg-skin-muted hover:decoration-solid"
                          onClick={closeNav}
                        >
                          New Arrivals
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <CollapsibleMenu
                        title="Mystery & Suspense"
                        mobile
                        menuList={mysteryMenuList}
                        onClick={closeNav}
                      />
                    </li>
                    <li>
                      <CollapsibleMenu
                        title="Education & Profession"
                        mobile
                        menuList={educationMenuList}
                        onClick={closeNav}
                      />
                    </li>
                    <li>
                      <CollapsibleMenu
                        title="Literature & Fiction"
                        mobile
                        menuList={literatureList}
                        onClick={closeNav}
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
                onClick={closeNav}
              >
                <Link
                  href={nav.href}
                  className={`flex items-center gap-x-2 py-1 px-2 text-xl`}
                >
                  <span>{nav.name}</span> {nav.icon}
                </Link>
              </NavigationMenu.Item>
            ))}

            <NavigationMenu.Item className={`flex w-full flex-col`}>
              <Link
                href="/about-us"
                className={`flex items-center gap-x-2 py-1 px-2 text-xl`}
                onClick={closeNav}
              >
                <span>About Us</span>
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className={`flex w-full flex-col`}>
              <Link
                href="/contact-us"
                className={`flex items-center gap-x-2 py-1 px-2 text-xl`}
                onClick={closeNav}
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

const LinkItem = ({
  title,
  href,
  children,
}: {
  title: string
  href: string
  children: string
}) => {
  return (
    <NavigationMenu.Link asChild>
      <Link href={`/categories/${href}`} className="p-2 hover:bg-skin-muted">
        <div className="font-serif font-medium">{title}</div>
        <p className="font-sans text-sm">{children}</p>
      </Link>
    </NavigationMenu.Link>
  )
}

const mysteryMenuList = [
  { name: "Crime & Thrillers", href: "/categories/crime-and-thrillers" },
  { name: "Detective", href: "/categories/detective" },
  { name: "Mysteries", href: "/categories/mysteries" },
  { name: "spy", href: "/categories/spy" },
]

const literatureList = [
  { name: "Classic", href: "/categories/classic" },
  { name: "Genre Fiction", href: "/categories/genre-fiction" },
  { name: "Sci-Fi & Fantasy", href: "/categories/sci-fi-and-fantasy" },
  { name: "Romance", href: "/categories/romance" },
]

const educationMenuList = [
  { name: "Colleges", href: "/categories/colleges" },
  { name: "Dictionaries", href: "/categories/dictionaries" },
  {
    name: "Architecture & Engineering",
    href: "/categories/architecture-and-engineering",
  },
  { name: "Sales & Marketing", href: "/categories/sales-and-marketing" },
  { name: "English & IELTS", href: "/categories/english-and-ielts" },
  { name: "Science & Maths", href: "/categories/science-and-maths" },
]

export default NavBar
