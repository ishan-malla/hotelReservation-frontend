import { useRef } from "react";
import { Link } from "react-router";
import RoomCard from "@/components/RoomCard";

const rooms = [
  {
    roomName: "Deluxe Sea View",
    roomType: "Luxury Suite",
    price: 8500,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    roomName: "Executive Twin Room",
    roomType: "Business Suite",
    price: 6500,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
  },
  {
    roomName: "Cozy Mountain View",
    roomType: "Standard Room",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    roomName: "Family Suite",
    roomType: "Premium",
    price: 9000,
    image:
      "https://images.unsplash.com/photo-1615873968403-89e7b1b86f61?auto=format&fit=crop&w=800&q=80",
  },
];

export default function RoomShowcaseSection() {
  const scrollRef = useRef(null);

  return (
    <section className="w-full py-16 md:py-24 bg-white text-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Explore Our Rooms
          </h2>
          <p className="text-gray-600 md:text-lg max-w-[900px] mx-auto">
            From cozy suites to luxury spaces — find your perfect stay.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-4 scroll-smooth"
        >
          {rooms.map((room, i) => (
            <RoomCard key={i} {...room} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Link to="/rooms">
            <button className=" text-white px-8 py-3 text-lg rounded-lg transition bg-gray-900">
              View All Rooms
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
