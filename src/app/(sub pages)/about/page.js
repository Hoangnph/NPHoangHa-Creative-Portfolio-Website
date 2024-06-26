import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
import YouTube from "react-youtube";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      <div className=" w-5/6 items-center justify-center">
        {/* <RenderModel>
          <HatModel />
        </RenderModel> */}
        <iframe
          className="w-full aspect-video self-stretch md:min-h-96"
          src="https://www.youtube.com/embed/LT7tL8slZdo"
          title="Product Overview Video"
          aria-hidden="true"
        />
      </div>

      {/* <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
            <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
              CodeBucks
            </h1>
            <p className="font-light text-foreground text-lg">
              Meet the wizard behind this portfolio
            </p>
          </div>
        </div> */}

      <AboutDetails />
    </>
  );
}
