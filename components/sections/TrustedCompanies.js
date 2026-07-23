import Image from "next/image";

const companies = [
  {
    name: "Google",
    logo: "/logos/google.svg",
  },
  {
    name: "Microsoft",
    logo: "/logos/microsoft.svg",
  },
  {
    name: "Amazon",
    logo: "/logos/amazon.svg",
  },
  {
    name: "Accenture",
    logo: "/logos/accenture.svg",
  },
  {
    name: "TCS",
    logo: "/logos/tcs.svg",
  },
  {
    name: "Infosys",
    logo: "/logos/infosys.svg",
  },
];

export default function TrustedCompanies() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Industry Leaders
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Helping organizations build future-ready teams
            with industry-focused learning solutions.
          </p>

        </div>


        {/* Company Logos */}

        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-6
          mt-14
        ">

          {companies.map((company, index) => (

            <div
              key={index}
              className="
                flex
                items-center
                justify-center
                p-8
                rounded-2xl
                bg-gray-50
                border
                hover:bg-white
                hover:shadow-xl
                transition
                duration-300
                group
              "
            >

              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={60}
                className="
                  grayscale
                  opacity-60
                  group-hover:grayscale-0
                  group-hover:opacity-100
                  transition
                  duration-300
                "
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}