import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import WhyUs from "@/components/sections/WhyUs";
import Stats from "@/components/sections/Stats";
import Programs from "@/components/sections/Programs";
import Testimonials from "@/components/sections/Testimonials";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/layout/Footer";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Features />
      <WhyUs />
      <Stats />
      <Programs />
      <Testimonials />
      <LeadForm />
      <CTA />
      
      <Footer />
    </>
  );
}