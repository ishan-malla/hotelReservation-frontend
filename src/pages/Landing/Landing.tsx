import Navbar from "@/components/Navbar";
import CTA from "./Sections/CTA";
import FAQ from "./Sections/FAQ";
import Hero from "./Sections/Hero";
import Testomonial from "./Sections/Testomonial";
import RoomShowCase from "./Sections/RoomShowCase";
import ContactUs from "./Sections/ContactUs";
import Footer from "@/components/Footer";
import Facilities from "./Sections/Facilities";
import AboutUs from "./Sections/AboutUs";
import { useGetRoomsQuery } from "@/api/hotelSlice";

const Landing = () => {
  const { data: rooms } = useGetRoomsQuery();
  console.log(import.meta.env.VITE_BASE_URL);
  console.log(rooms);
  return (
    <div className="w-screen h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
      <RoomShowCase></RoomShowCase>
      <Testomonial></Testomonial>
      <AboutUs></AboutUs>
      <CTA></CTA>
      <Facilities></Facilities>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};
export default Landing;
