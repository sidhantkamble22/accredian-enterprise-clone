"use client";

import { useState } from "react";
import { motion } from "framer-motion";


export default function LeadForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });



  const handleSubmit = async (e) => {

    e.preventDefault();


    const response = await fetch("/api/leads", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),

    });


    const data = await response.json();


    console.log(data);


    alert("Form Submitted Successfully");


    setFormData({
      name: "",
      email: "",
      company: "",
    });

  };



  return (

    <section
      id="contact"
      className="py-24 bg-blue-600"
    >


      <div className="max-w-3xl mx-auto px-6">


        <motion.div

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

          className="
          bg-white
          rounded-3xl
          p-10
          text-slate-500
          shadow-xl
          "

        >


          <motion.h2

            initial={{
              opacity:0,
              y:-20
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.5
            }}

            viewport={{
              once:true
            }}

            className="
            text-3xl
            font-bold
            text-center
            text-slate-500
            "

          >

            Get Started With Us

          </motion.h2>




          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >



            <input

              type="text"

              placeholder="Your Name"

              className="
              w-full
              border
              p-3
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              "

              value={formData.name}

              onChange={(e)=>
                setFormData({
                  ...formData,
                  name:e.target.value
                })
              }

            />





            <input

              type="email"

              placeholder="Email Address"

              className="
              w-full
              border
              p-3
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              "

              value={formData.email}

              onChange={(e)=>
                setFormData({
                  ...formData,
                  email:e.target.value
                })
              }

            />





            <input

              type="text"

              placeholder="Company Name"

              className="
              w-full
              border
              p-3
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              "

              value={formData.company}

              onChange={(e)=>
                setFormData({
                  ...formData,
                  company:e.target.value
                })
              }

            />






            <motion.button

              whileHover={{
                scale:1.03
              }}

              whileTap={{
                scale:0.95
              }}

              className="
              w-full
              bg-blue-600
              text-white
              py-3
              rounded-lg
              hover:bg-blue-700
              transition
              font-semibold
              "

            >

              Submit

            </motion.button>




          </form>



        </motion.div>



      </div>



    </section>

  );

}