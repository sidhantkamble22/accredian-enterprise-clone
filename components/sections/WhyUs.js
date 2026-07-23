"use client";

import { motion } from "framer-motion";

import {
  GraduationCap,
  Briefcase,
  Trophy,
  ShieldCheck,
} from "lucide-react";


const features = [
  {
    icon: <GraduationCap size={40} />,
    title: "Expert Mentors",
    desc: "Learn from experienced industry professionals.",
  },
  {
    icon: <Briefcase size={40} />,
    title: "Customized Programs",
    desc: "Training designed specifically for enterprise needs.",
  },
  {
    icon: <Trophy size={40} />,
    title: "Proven Results",
    desc: "Trusted by organizations to upskill their workforce.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Industry Certifications",
    desc: "Recognized certifications that add real value.",
  },
];


export default function WhyUs() {

  return (

    <section
      id="why-us"
      className="py-24 bg-slate-50"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <motion.h2
          initial={{opacity:0, y:-30}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="
          text-4xl
          font-bold
          text-center
          text-slate-500
          "
        >
          Why Choose Accredian?
        </motion.h2>



        <motion.p
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6, delay:0.2}}
          viewport={{once:true}}
          className="
          text-center
          text-gray-500
          mt-4
          max-w-2xl
          mx-auto
          "
        >
          Empower your workforce with industry-leading learning
          experiences designed for enterprise growth.
        </motion.p>




        {/* Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          mt-16
          "
        >

          {
            features.map((item,index)=>(

              <motion.div
                key={index}

                initial={{
                  opacity:0,
                  y:50
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:0.5,
                  delay:index * 0.15
                }}

                viewport={{
                  once:true
                }}

                whileHover={{
                  y:-8
                }}

                className="
                bg-white
                rounded-2xl
                shadow-sm
                hover:shadow-xl
                transition
                duration-300
                p-8
                text-center
                "
              >


                <div
                  className="
                  w-20
                  h-20
                  mx-auto
                  rounded-full
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                  "
                >
                  {item.icon}
                </div>



                <h3
                  className="
                  text-xl
                  font-semibold
                  mt-6
                  text-slate-500
                  "
                >
                  {item.title}
                </h3>



                <p className="text-gray-500 mt-4">
                  {item.desc}
                </p>



              </motion.div>

            ))
          }


        </div>


      </div>

    </section>

  );

}