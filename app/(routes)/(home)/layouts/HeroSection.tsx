import Image from "next/image"
import SearchInput from "@/components/SearchInput"
import SocialGroup from "@/components/SocialGroup"
import bookPic from "@/public/open-book.webp"

const HeroSection = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-y-4 px-4 py-6 md:flex-row-reverse md:px-8 lg:pb-24 lg:pt-16">
      <div className="image-wrapper flex-1 p-4 lg:p-0">
        <Image
          src={bookPic}
          alt="Open Book"
          priority
          className="drop-shadow-xl"
        />
      </div>
      <div className="info-wrapper flex flex-1 flex-col gap-y-4 md:justify-center lg:justify-end lg:gap-y-8">
        <h1 className="font-serif text-4xl font-semibold lg:text-5xl xl:pt-10 xl:text-6xl">
          Best Place to Find <br />
          Your Favourite <br />
          Books
        </h1>

        <p className="font-sans xl:text-lg">
          Unleash your imagination with our online bookstore! Discover a vast
          selection of books for all ages and interests, with something for
          everyone. Shop now and find your next favorite read!
        </p>

        <SearchInput className="mb-4 w-3/4" />

        <SocialGroup className="!justify-start" />
      </div>
    </div>
  )
}

export default HeroSection
