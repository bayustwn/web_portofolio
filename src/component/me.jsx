import dot from "../../public/dot.svg";
import cv from "../../public/cv-icon.svg";
import { m } from "framer-motion"
import Image from "next/image";

const textParent = {
    show:{
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const text = {
    hidden : { 
      opacity: 0,
      y:15,
    },
    show : {
      opacity:1,
      y:0,
      transition:{
        duration: 0.5
      }
    }
  }

export default function Me() {
    return(
        <m.div 
          variants={textParent}
          initial="hidden"
          animate="show"
          className="flex flex-col self-center gap-6"
        >
          <div>
            <m.h1 variants={text} className="font-light text-3xl">
              My name is<br></br>
              <span className="font-bold relative">
                Bayu Setiawan
                <Image
                  alt="dot"
                  className="absolute top-0 -right-4"
                  src={dot}
                  width={12}
                />
              </span>
            </m.h1>
          </div>
          <div>
          <m.p 
            variants={text}
            className="w-[56%]"
          >
            I&apos;m an undergraduate student and freelancer full stack developer who
            loves new things and always takes responsibility for everything I
            do.
          </m.p>
          </div>
          <m.div 
            variants={text}
            className="flex flex-row gap-2 font-medium"
          >
            <button className="bg-dark-green text-white px-8 py-2.5 rounded-full">
              Hire me
            </button>
            <button className="flex items-center gap-2 border-2 border-dark-green text-dark-green px-7 py-2.5 rounded-full">
              <Image src={cv} width={16} alt="cv" />
              CV
            </button>
          </m.div>
        </m.div>
    )
}