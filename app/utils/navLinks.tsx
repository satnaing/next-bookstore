import CartIcon from "app/icons/CartIcon"
import HeartIcon from "app/icons/HeartIcon"
import SearchIcon from "app/icons/SearchIcon"
import UserIcon from "app/icons/UserIcon"

type Position = "top" | "top-only" | "main" | "main-mobile"

type NavLinks = {
  name: string
  href: string
  icon: JSX.Element | null
  position: Position
}[]

const navLinks: NavLinks = [
  {
    name: "About Us",
    href: "/about",
    icon: null,
    position: "top",
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: null,
    position: "top",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
    icon: null,
    position: "top-only",
  },
  {
    name: "Search",
    href: "/search",
    icon: <SearchIcon />,
    position: "main-mobile",
  },
  {
    name: "Account",
    href: "/account",
    icon: <UserIcon />,
    position: "main",
  },
  {
    name: "Wishlist",
    href: "/wishlist",
    icon: <HeartIcon />,
    position: "main",
  },
  {
    name: "Cart",
    href: "/cart",
    icon: <CartIcon />,
    position: "main-mobile",
  },
]

export default navLinks
