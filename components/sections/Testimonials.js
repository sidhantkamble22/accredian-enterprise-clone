"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Testimonials() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function getUsers() {

      try {

        const response = await fetch(
          "https://dummyjson.com/users?limit=3"
        );

        const data = await response.json();

        setUsers(data.users);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    }

    getUsers();

  }, []);



  if (loading) {

    return (

      <section className="py-20 text-center">

        <h2 className="text-2xl font-semibold">
          Loading Testimonials...
        </h2>

      </section>

    );

  }



  return (

    <section
      id="testimonials"
      className="py-24 bg-slate-50"
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

          className="text-center"

        >

          <h2 className="text-4xl font-bold text-slate-500">
            What Our Partners Say
          </h2>


          <p className="text-gray-500 mt-4">
            Trusted by professionals and organizations worldwide.
          </p>


        </motion.div>





        {/* Testimonials Cards */}

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          mt-14
          "
        >


          {
            users.map((user,index)=>(

              <motion.div

                key={user.id}

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
                  delay:index * 0.2
                }}

                viewport={{
                  once:true
                }}

                whileHover={{
                  y:-10
                }}

                className="
                bg-white
                rounded-2xl
                p-8
                shadow-sm
                hover:shadow-xl
                transition
                duration-300
                "

              >



                <div className="flex items-center gap-4">


                  <Image

                    src={user.image}

                    width={60}

                    height={60}

                    alt={user.firstName}

                    className="rounded-full"

                  />



                  <div>

                    <h3 className="font-semibold text-slate-700">

                      {user.firstName} {user.lastName}

                    </h3>


                    <p className="text-sm text-gray-500">

                      Enterprise Client

                    </p>


                  </div>


                </div>





                <p className="mt-6 text-gray-600 leading-7">

                  "The learning programs helped our team
                  improve skills and achieve better results."

                </p>



              </motion.div>


            ))
          }



        </div>



      </div>


    </section>

  );

}