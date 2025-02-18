import React from "react";
import img from "../../assets/zackteam.jpg";
import { motion } from "framer-motion";
import { FadeUp, FadeRight } from "../../Utility/Utility";

const About = () => {
  return (
    <section id="about" className=" flex justify-center items-center bg-gray-100">
      <div className="container grid grid-cols-1 md:grid-cols-2 place-items-center py-24">
        
        {/* Law Firm Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          <img src={img} alt="Law Firm" className="w-[350px] md:w-[400px] h-auto object-cover rounded-lg shadow-lg" />
        </motion.div>

        {/* Law Firm Info */}
        <div className="flex flex-col justify-center pt-10">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            
            <motion.h1 
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 uppercase"
            >
              Your Trusted Legal Advisors
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              className="text-sm md:text-base text-gray-700 text-justify px-4 md:px-0"
            >
              At <strong>Zack & Associates</strong>, we provide expert legal services with a commitment to excellence and justice. Our team specializes in corporate law, criminal defense, family law, and civil litigation. With years of experience, we ensure that your rights are protected and your legal matters are handled professionally.
            </motion.p>

            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              className="text-sm md:text-base text-gray-700 text-justify px-4 md:px-0"
            >
              Whether you're facing a legal dispute, need business legal consultation, or require representation in court, our skilled attorneys are here to guide you every step of the way.
            </motion.p>

            {/* Call-to-Action Button */}
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              whileInView="visible"
              className="flex justify-center md:justify-start mt-4"
            >
              <a
                href="/contact"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                Schedule a Consultation
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
