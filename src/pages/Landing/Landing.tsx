import CTA from "./Sections/CTA";
import FAQ from "./Sections/FAQ";
import Hero from "./Sections/Hero";

const Landing = () => {
  return (
    <div className="w-screen h-screen">
      <Hero></Hero>
      <CTA></CTA>
      <FAQ></FAQ>
    </div>
  );
};
export default Landing;
