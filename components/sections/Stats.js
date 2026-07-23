"use client";

import { motion } from "framer-motion";


const stats = [
  {
    number: "500+",
    title: "Enterprise Clients",
  },
  {
    number: "1M+",
    title: "Learners Upskilled",
  },
  {
    number: "95%",
    title: "Completion Rate",
  },
  {
    number: "250+",
    title: "Industry Experts",
  },
];


export default function Stats() {

  return (

    <section className="py-20 bg-blue-600">

      <div className="max-w-7xl mx-auto px-6">


        <motion.div
          className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-8
          "

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          viewport={{
            once:true
          }}
        >


          {
            stats.map((item,index)=>(

              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  scale:0.8
                }}

                whileInView={{
                  opacity:1,
                  scale:1
                }}

                transition={{
                  duration:0.5,
                  delay:index * 0.15
                }}

                viewport={{
                  once:true
                }}

                whileHover={{
                  y:-10,
                  scale:1.05
                }}

                className="
                text-center
                bg-white
                rounded-2xl
                p-8
                shadow-lg
                transition
                duration-300
                "

              >


                <h2
                  className="
                  text-5xl
                  font-bold
                  text-blue-600
                  "
                >
                  {item.number}
                </h2>



                <p
                  className="
                  mt-3
                  text-gray-600
                  font-medium
                  "
                >
                  {item.title}
                </p>


              </motion.div>

            ))
          }


        </motion.div>


      </div>


    </section>

  );

}