"use client";

import { motion } from "framer-motion";


export default function CTA() {

  return (

    <section className="py-24 bg-blue-600">


      <div className="max-w-5xl mx-auto px-6 text-center text-white">


        {/* Heading */}

        <motion.h2

          initial={{
            opacity: 0,
            y: -30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.6
          }}

          viewport={{
            once: true
          }}

          className="
          text-4xl
          md:text-5xl
          font-bold
          "

        >

          Ready to Build Future-Ready Teams?

        </motion.h2>





        {/* Description */}

        <motion.p

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.6,
            delay: 0.2
          }}

          viewport={{
            once: true
          }}

          className="
          mt-6
          text-lg
          text-blue-100
          "

        >

          Partner with us and empower your employees
          with industry-leading skills.

        </motion.p>





        {/* Button */}

        <motion.button

          initial={{
            opacity: 0,
            scale: 0.8
          }}

          whileInView={{
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration: 0.5,
            delay: 0.4
          }}

          viewport={{
            once: true
          }}

          whileHover={{
            scale: 1.05
          }}

          whileTap={{
            scale: 0.95
          }}

          className="
          mt-8
          bg-white
          text-blue-600
          px-8
          py-4
          rounded-xl
          font-semibold
          hover:bg-gray-100
          transition
          "

        >

          Book a Demo

        </motion.button>



      </div>


    </section>

  );

}