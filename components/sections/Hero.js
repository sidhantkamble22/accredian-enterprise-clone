"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75"></div>


      <div className="relative max-w-7xl mx-auto px-6 py-28">


        {/* Badge */}

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          inline-block
          bg-blue-100
          text-blue-600
          px-4
          py-2
          rounded-full
          text-sm
          font-semibold
          "
        >
          Enterprise Learning Platform
        </motion.span>



        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
          text-5xl
          md:text-7xl
          font-bold
          mt-6
          leading-tight
          text-slate-500
          max-w-3xl
          "
        >
          Transform Your Workforce

          <span className="text-blue-600">
            {" "}with Industry Ready Skills
          </span>

        </motion.h1>




        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="
          text-gray-700
          mt-6
          text-lg
          leading-8
          max-w-2xl
          "
        >
          Empower your teams with world-class upskilling programs
          designed by industry experts. Drive innovation,
          improve productivity, and build future-ready talent.
        </motion.p>




        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="flex flex-wrap gap-4 mt-10"
        >

          <button
            className="
            bg-blue-600
            text-white
            px-8
            py-4
            rounded-xl
            hover:bg-blue-700
            transition
            "
          >
            Book Demo
          </button>


          <button
            className="
            border
            border-blue-600
            text-blue-600
            px-8
            py-4
            rounded-xl
            hover:bg-blue-50
            transition
            "
          >
            Learn More
          </button>


        </motion.div>


      </div>

    </section>
  );
}