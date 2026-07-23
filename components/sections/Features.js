"use client";

import { motion } from "framer-motion";

import {
  Video,
  BookOpen,
  Users,
  Award,
} from "lucide-react";


const features = [
  {
    icon: <Video size={35}/>,
    title: "Live Training",
    desc: "Interactive sessions with industry experts."
  },
  {
    icon: <BookOpen size={35}/>,
    title: "Industry Curriculum",
    desc: "Courses designed according to real business needs."
  },
  {
    icon: <Users size={35}/>,
    title: "Expert Mentors",
    desc: "Learn from experienced professionals."
  },
  {
    icon: <Award size={35}/>,
    title: "Certifications",
    desc: "Get recognized certificates after completion."
  }
];


export default function Features(){

  return (

    <section className="py-24 bg-white">


      <div className="max-w-7xl mx-auto px-6">



        {/* Heading */}

        <motion.h2

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

          className="
          text-4xl
          font-bold
          text-center
          text-sky-700
          "

        >

          Powerful Learning Experience

        </motion.h2>





        {/* Description */}

        <motion.p

          initial={{
            opacity:0
          }}

          whileInView={{
            opacity:1
          }}

          transition={{
            duration:0.6,
            delay:0.2
          }}

          viewport={{
            once:true
          }}

          className="
          text-center
          text-gray-500
          mt-4
          "

        >

          Everything you need to build future-ready teams.

        </motion.p>





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
                  y:-10
                }}

                className="
                p-8
                rounded-2xl
                border
                hover:shadow-xl
                transition
                duration-300
                "

              >



                <div
                  className="
                  w-16
                  h-16
                  rounded-xl
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
                  text-slate-700
                  "
                >

                  {item.title}

                </h3>





                <p className="text-gray-500 mt-3">

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