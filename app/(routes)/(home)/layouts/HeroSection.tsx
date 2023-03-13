import Link from "next/link"
import Image from "next/image"
import SocialGroup from "@/components/SocialGroup"
import DownArrowIcon from "@/icons/DownArrowIcon"
import cafeBookPic from "@/public/cafe-book.webp"

const HeroSection = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-y-4 px-4 py-6 md:flex-row-reverse md:gap-x-4 md:px-8 lg:pb-24 lg:pt-16">
      <div className="image-wrapper flex-1 p-4 lg:p-0">
        <Image
          src={cafeBookPic}
          alt="Open Book"
          priority
          className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
        />
      </div>
      <div className="info-wrapper flex flex-1 flex-col gap-y-4 md:justify-center lg:justify-end lg:gap-y-8">
        <h1 className="font-serif text-4xl font-semibold md:!leading-tight lg:text-5xl xl:text-6xl">
          Best Place to Find <br />
          Your Favourite <br />
          Books.
        </h1>

        <p className="font-sans xl:text-lg">
          Unleash your imagination with our online bookstore! Discover a vast
          selection of books for all ages and interests, with something for
          everyone. Shop now and find your next favorite read!
        </p>

        <div>
          <a
            href="#main"
            className="inline-block rounded bg-skin-accent-dark py-2 px-4 font-semibold text-skin-base contrast-125 focus-within:bg-skin-accent hover:bg-skin-accent"
          >
            Browse
            <DownArrowIcon className="ml-2 animate-bounce !stroke-skin-base stroke-2" />
          </a>
          <Link
            href={`/about-us`}
            className="ml-4 p-2 font-semibold text-skin-accent-dark hover:text-skin-accent"
          >
            Learn More
          </Link>
        </div>

        <SocialGroup className="!justify-start" />

        <div className="mt-12 flex gap-2 divide-x divide-skin-dark md:w-[125%] lg:w-auto">
          <div className="">Fast Delivery</div>
          <div className=" pl-2">Exclusive Deals</div>
          <div className=" pl-2">Curated Collections</div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
