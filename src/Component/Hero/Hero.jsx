import React from "react";
import img1 from "../../assets/zack.jpg"; // Ensure the correct path
import { motion } from "framer-motion";
import {FadeLeft, FadeRight} from "../../Utility/Utility"

function Hero() {
  return (
    <>
      <section id="home" className=" bg-blue-400  h-screen w-full flex  justify-center items-center ">
        <div className="container pt-20 md:pt-10  ">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Content Section */}
            <div className=" p-4 ">
              <div className="">
                <motion.h1
                 variants={FadeRight(0.3)}
                 initial="hidden"
                 whileInView={"visible"}
                 className="text-2xl  text-white text-center p-4  md:text-left md:text-5xl ">
                  <span className=" ">Welcome! To</span> <br />
                </motion.h1>
                <motion.h2
                 variants={FadeRight(0.4)}
                 initial="hidden"
                 whileInView={"visible"} 
                className="">A Place where crime has it's limits.</motion.h2>

                <motion.h2
                 variants={FadeRight(0.5)}
                 initial="hidden"
                 whileInView={"visible"}
                >Trusted Legal Experts Committed to Your Success</motion.h2>
                <motion.p 
                 variants={FadeRight(0.6)}
                 initial="hidden"
                 whileInView={"visible"}
                className="p-4 hidden text-left md:block">
                  At <strong>Azibo Kanu & Partners</strong>, we provide expert
                  legal counsel with integrity, professionalism, and dedication.
                  Whether you need legal representation, business consultation,
                  or personal legal advice, our experienced team is here to
                  guide you through every step.
                </motion.p>
                <motion.p
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 transition={{delay: 0.2}}
                className="text-white text-center font-bold pt-4 md:text-left ">
                  <em>Your Justice, Our Priority.</em>
                </motion.p>
                   {/* CTA Button */}
                   <motion.div
                  className="flex items-center justify-center py-4 md:justify-start"
                  variants={FadeRight(0.7)}
                  initial="hidden"
                  whileInView="visible"
                >
                  <a
                    href="/contact"
                    className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-400 transition-all duration-300"
                  >
                    Get Legal Help Now
                  </a>
                </motion.div>
              </div>
              {/* Practice Area */}
              <div className=" flex flex-col items-center bb">
                <div className="md:text-2xl font-bold">
                  Our Practice <span>Area</span>
                </div>
                <div className="md:flex justify-center items-center gap-3">
                  <div className="flex gap-3 py-3">
                    <h1 className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center">
                      Corporate Law
                    </h1>
                    <h1 className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center">
                      Criminal Defense
                    </h1>
                  </div>
                  <div>
                    <h1 className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center">
                      Family Law
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Image with Rotating Border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="flex justify-center items-center  rounded-sm overflow-hidden p-4 relative"
            >
              <div className="img-box">
                <img
                  src={img1}
                  alt="Hero"
                  className="w-[400px]  object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
