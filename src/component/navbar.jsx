import { m } from "framer-motion"

export default function Navbar() {
    return(
        <m.div 
            initial={{opacity:0,x:15}}
            animate={{opacity:1,x:0}}
            transition={{duration: 0.7}}
            className="flex-no-warp flex items-center w-fit fixed top-12 gap-14 right-32 text-black"
        >
          <a href="#" className="font-bold">
            Me
          </a>
          <a href="#">Projects</a>
          <a href="#">Why me</a>
          <a href="#">Contact</a>
        </m.div>
    )
}