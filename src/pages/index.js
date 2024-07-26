import { Rubik } from "next/font/google";
import me from "../../public/me.png";
import Image from "next/image";
import big from "../../public/squizzle-big.svg";
import tiny from "../../public/squizzle-tiny.svg";
import threeDot from "../../public/three-dot.svg";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Me from '../component/me.jsx';
import Navbar from "@/component/navbar";
import gradientDot from "../../public/gradient-dot.svg";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <LazyMotion features={domAnimation} className={rubik.className} strict>
      <div>
      <div className="flex h-screen items-end gap-12 relative">
        <Image className="absolute top-0 right-0 -z-1" alt="element" src={big} width={250} />
        <Image
          className="absolute left-0 bottom-10 z-1"
          src={tiny}
          width={100}
          alt="element"
        />
        <Image
          className="absolute bottom-12 right-20 z-1"
          src={threeDot}
          width={12}
          alt="element"
        />
        <Navbar/>
        <m.div
          className="self-start"
          initial={{opacity:0}}
          animate={{opacity:100}}
          transition={{duration:1}}
        >
          <Image  src={me} width={400} quality={100} alt="Bayu Setiawan" />
        </m.div>
        <Me/>
      </div>
      <div className="h-screen bg-dark-green relative"> 
        <Image
          className="absolute top-4 w-full"
          src={gradientDot}
          alt="gradient-dot"
        />
        <div className="px-20 py-12 font-bold text-3xl text-white">
          <h1>Project</h1>
        </div>
      </div>
    </div>
    </LazyMotion>
  );
}
