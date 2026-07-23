"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Cloud,
  Code2,
  ShieldCheck,
} from "lucide-react";


const programs = [
  {
    icon: <Brain size={40} />,
    title: "Artificial Intelligence",
    description:
      "Build AI skills with practical learning and industry-focused programs.",
  },
  {
    icon: <Code2 size={40} />,
    title: "Software Development",
    description:
      "Learn modern technologies and build scalable software solutions.",
  },
  {
    icon: <Cloud size={40} />,
    title: "Cloud Computing",
    description:
      "Master cloud platforms and enterprise infrastructure skills.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Cyber Security",
    description:
      "Develop security expertise to protect digital environments.",
  },
];


export default function Programs() {

  return (

    <section
      id="programs"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <motion.div
          initial={{
            opacity:0,
            y:-30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.6
          }}

          viewport={{
            once:true
          }}

          className="text-center max-w-2xl mx-auto"
        >

          <h2 className="text-4xl font-bold text-slate-500">
            Our Enterprise Programs
          </h2>


          <p className="text-gray-500 mt-4">
            Industry-driven programs designed to help
            organizations build future-ready teams.
          </p>


        </motion.div>




        {/* Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          mt-14
          "
        >


          {
            programs.map((program,index)=>(

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
                  y:-10
                }}

                className="
                group
                border
                rounded-2xl
                p-8
                hover:shadow-xl
                transition
                duration-300
                bg-white
                "

              >


                {/* Icon */}

                <div
                  className="
                  w-16
                  h-16
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-100
                  text-blue-600
                  group-hover:bg-blue-600
                  group-hover:text-white
                  transition
                  duration-300
                  "
                >
                  {program.icon}
                </div>




                <h3
                  className="
                  text-xl
                  font-semibold
                  text-slate-500
                  mt-6
                  "
                >
                  {program.title}
                </h3>




                <p
                  className="
                  text-gray-500
                  mt-4
                  leading-7
                  "
                >
                  {program.description}
                </p>




                <button
                  className="
                  mt-6
                  text-blue-600
                  font-semibold
                  hover:underline
                  "
                >
                  Learn More →
                </button>


              </motion.div>

            ))
          }


        </div>


      </div>


    </section>

  );

}