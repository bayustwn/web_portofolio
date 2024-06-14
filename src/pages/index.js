import { Rubik } from "next/font/google";
import me from "../../public/me.png";
import Image from "next/image";
import big from "../../public/squizzle-big.svg";
import tiny from "../../public/squizzle-tiny.svg";
import threeDot from "../../public/three-dot.svg";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Me from '../component/me.jsx';
import Navbar from "@/component/navbar";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <LazyMotion features={domAnimation} className={rubik.className} strict>
      <div className="flex items-end gap-16 relative">
        <Image className="absolute top-0 right-0 -z-1" src={big} width={250} />
        <Image
          className="absolute left-0 z-1"
          src={tiny}
          width={120}
        />
        <Image
          className="absolute right-32 z-1"
          src={threeDot}
          width={12}
        />
        <Navbar/>
        <m.div
          initial={{opacity:0}}
          animate={{opacity:100}}
          transition={{duration:1}}
        >
          <Image src={me} width={450} quality={100} />
        </m.div>
        <Me/>
      </div>
    </LazyMotion>
  );
}
