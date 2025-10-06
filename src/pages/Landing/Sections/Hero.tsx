import { Link } from "react-router";
import { Button } from "../../../components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://x3jh6o6w.cdn.imgeng.in/assets/uploads/Starhotels-Collezione/Savoia-Excelsior-Palace/DESIGN-HISTORY-PHILOSOPHY/Four-star-hotel-in-central-Trieste-Savoia-Excelsior-Palace-Trieste-Hall-4.jpg?imgeng=/w_1440"
          alt="Hotel Kathmandu"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1 text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 ">
            Stay in Comfort at Hotel Kathmandu
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Find peace in the city’s heart — cozy rooms, great food, and warm
            Nepali hospitality awaits you.
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Link to="/book">
            <Button
              className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-4 text-lg rounded-xl font-medium shadow-lg transition-transform hover:scale-105"
              aria-label="Book your stay at Hotel Kathmandu"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
