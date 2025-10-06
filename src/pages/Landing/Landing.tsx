import Navbar from "@/components/Navbar";
import CTA from "./Sections/CTA";
import FAQ from "./Sections/FAQ";
import Hero from "./Sections/Hero";
import Testomonial from "./Sections/Testomonial";

const Landing = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
      <Testomonial></Testomonial>
      <CTA></CTA>
      <FAQ></FAQ>
    </div>
  );
};
export default Landing;
