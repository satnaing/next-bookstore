import SearchInput from "@/components/SearchInput"
import SocialGroup from "@/components/SocialGroup"
import Image from "next/image"
import bookPic from "../../public/open-book.webp"

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-y-4 px-4 py-6">
      <div className="image-wrapper p-4">
        <Image
          src={bookPic}
          alt="Open Book"
          priority
          className="drop-shadow-xl"
        />
      </div>
      <div className="info-wrapper">
        <h1 className="font-serif text-4xl font-bold">
          Best Place to Find <br /> Your Favourite <br /> Books
        </h1>
        <p className="my-4 font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          volutpat odio et dapibus dignissim. Praesent maximus tincidunt
          ultricies. Nam sodales dolor arcu, non venenatis odio tempor eu
        </p>

        <SearchInput className="mt-6 mb-12 w-3/4" />

        <SocialGroup className="!justify-start" />
      </div>
    </div>
  )
}

export default HeroSection
