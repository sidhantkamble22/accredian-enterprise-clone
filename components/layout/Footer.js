import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";


const quickLinks = [
  "Home",
  "Programs",
  "Why Us",
  "Testimonials",
  "Contact",
];


const programs = [
  "Artificial Intelligence",
  "Software Development",
  "Cloud Computing",
  "Cyber Security",
];


export default function Footer() {

  return (

    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">


        <div className="grid md:grid-cols-4 gap-10">


          {/* Brand Section */}

          <div>

            <h2 className="text-3xl font-bold text-blue-400">
              Accredian
            </h2>


            <p className="text-gray-400 mt-5 leading-7">
              Empowering organizations with industry-ready
              learning solutions and future-focused skills.
            </p>


            {/* Social Icons */}

            <div className="flex gap-4 mt-6">


              <a
                href="#"
                className="
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-slate-800
                hover:bg-blue-600
                transition
                "
              >
                <FaLinkedin size={20}/>
              </a>



              <a
                href="#"
                className="
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-slate-800
                hover:bg-gray-700
                transition
                "
              >
                <FaGithub size={20}/>
              </a>



              <a
                href="#"
                className="
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-slate-800
                hover:bg-pink-600
                transition
                "
              >
                <FaInstagram size={20}/>
              </a>


            </div>


          </div>




          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>


            <ul className="space-y-3">

              {
                quickLinks.map((item,index)=>(
                  <li
                    key={index}
                    className="
                    text-gray-400
                    hover:text-white
                    cursor-pointer
                    transition
                    "
                  >
                    {item}
                  </li>
                ))
              }


            </ul>


          </div>




          {/* Programs */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Programs
            </h3>


            <ul className="space-y-3">


              {
                programs.map((item,index)=>(
                  <li
                    key={index}
                    className="
                    text-gray-400
                    hover:text-white
                    transition
                    "
                  >
                    {item}
                  </li>
                ))
              }


            </ul>


          </div>





          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>


            <div className="space-y-4 text-gray-400">


              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400"/>
                contact@accredian.com
              </p>



              <p className="flex items-center gap-3">
                <FaPhone className="text-blue-400"/>
                +91 98765 43210
              </p>



              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400"/>
                Pune, Maharashtra
              </p>


            </div>


          </div>


        </div>





        {/* Bottom Copyright */}

        <div
          className="
          border-t
          border-gray-800
          mt-12
          pt-6
          text-center
          text-gray-500
          "
        >

          © 2026 Accredian Enterprise. All rights reserved.

        </div>


      </div>


    </footer>

  );

}