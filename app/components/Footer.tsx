"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import SocialGroup from "app/components/SocialGroup"
import HeartIcon from "@/icons/HeartIcon"

const Footer = () => {
  const pathname = usePathname()

  // hide Footer on /cart and /wishlist on mobile
  const hideOnMobile = ["/cart", "/wishlist"].includes(pathname || "")

  return (
    <footer
      className={`mt-auto shadow-inner ${
        hideOnMobile ? "hidden md:block" : ""
      }`}
    >
      <div className="footer-container mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:grid-rows-3 md:gap-x-6 md:gap-y-0 md:px-8">
        <div className="bookstore-desc col-span-2 md:row-span-2">
          <h2 className="my-2 font-serif text-2xl font-semibold">
            Next Book Store
          </h2>
          <p className="font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            volutpat odio et dapibus dignissim. Praesent maximus tincidunt
            ultricies. Nam sodales dolor arcu, non venenatis odio tempor eu
          </p>
        </div>

        <div className="services md:row-span-3">
          <h2 className="my-1 font-serif text-xl font-semibold">Services</h2>
          {servicesLinks.map(({ id, href, title }) => (
            <div key={id}>
              <Link
                href={href}
                className="text-link inline-block py-1 font-sans"
              >
                {title}
              </Link>
            </div>
          ))}
        </div>

        <div className="about-us md:row-span-3">
          <h2 className="my-1 font-serif text-xl font-semibold">About Us</h2>
          {aboutLinks.map(({ id, href, title }) => (
            <div key={id}>
              <Link
                href={href}
                className="text-link inline-block py-1 font-sans"
              >
                {title}
              </Link>
            </div>
          ))}
        </div>

        <div className="social-group col-span-2">
          <SocialGroup className="md:!justify-start" />
        </div>
      </div>
      <div className="copyright-notice-container bg-skin-dark">
        <div className="copyright-notice mx-auto flex max-w-6xl flex-col items-center py-1 px-4 text-skin-base md:flex-row  md:justify-between md:px-8">
          <span>© Copyright 2022 - Next Book Store</span>
          <span>
            Developed with{" "}
            <HeartIcon className="scale-75 fill-skin-base stroke-skin-base" />{" "}
            by{" "}
            <Link
              href="https://satnaing.dev"
              className="underline decoration-dashed underline-offset-2 hover:decoration-solid"
            >
              Sat Naing
            </Link>
            .
          </span>
        </div>
      </div>
    </footer>
  )
}

const servicesLinks = [
  { id: 1, title: "Contact Us", href: "/" },
  { id: 2, title: "How to make purchase?", href: "/" },
  { id: 3, title: "Delivery & Returns", href: "/" },
  { id: 4, title: "Return Policies", href: "/" },
  { id: 5, title: "Promotions", href: "/" },
]

const aboutLinks = [
  { id: 1, title: "About Us", href: "/" },
  { id: 2, title: "Careers", href: "/" },
  { id: 3, title: "Sitemap", href: "/" },
  { id: 4, title: "FAQ", href: "/" },
  { id: 5, title: "Terms & Conditions", href: "/" },
]

export default Footer
