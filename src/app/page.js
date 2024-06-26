import Image from "next/image";
import bg from "../../public/background/home-background.png";
import profileImg from "../../public/img/profile.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          {/* <Wizard /> */}
          <div className="relative sm:w-auto sm:h-1/3 md:w-auto md:h-1/4 lg:w-auto lg:h-1/5">
            <Image
              src={profileImg}
              alt="Profile Image"
              layout="responsive"
              // objectFit=" cover "
              className=" object-contain "
            />
          </div>
        </RenderModel>
      </div>
    </main>
  );
}
