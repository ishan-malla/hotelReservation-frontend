import Navbar from "@/components/Navbar";
import CTA from "./Sections/CTA";
import FAQ from "./Sections/FAQ";
import Hero from "./Sections/Hero";
import Testomonial from "./Sections/Testomonial";
import RoomShowCase from "./Sections/RoomShowCase";
import ContactUs from "./Sections/ContactUs";

const Landing = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
      <RoomShowCase></RoomShowCase>
      <Testomonial></Testomonial>
      <CTA></CTA>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
    </div>
  );
};
export default Landing;
