import Image from "next/image";
import Hero from "./components/landing-page/Hero";

export default function Home() {
  return (
    <div className="h-screen max-w-7xl mx-auto ">

      {/* <Header/> */}
      <Hero/>
      {/* <VideoExplanation/> */}
      {/* <Princing/> */}
      {/* <FAQ/> */}
    </div>

  );
}
