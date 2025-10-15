import { Link } from "react-router";
import HomePageRoomCard from "@/components/HomepageRoomcard";
import HomeNavbar from "@/components/Navbar";

const sampleRooms = [
  {
    room_no: "101",
    roomName: "Deluxe King Room",
    roomType: "Deluxe",
    price: 9000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    room_no: "102",
    roomName: "Single Standard Room",
    roomType: "Standard",
    price: 5500,
    image: "https://images.unsplash.com/photo-1617093727343-374b5e4a9d0d",
  },
  {
    room_no: "103",
    roomName: "Executive Suite",
    roomType: "Suite",
    price: 15000,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
  },
  {
    room_no: "104",
    roomName: "Family Room",
    roomType: "Family",
    price: 12000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    room_no: "105",
    roomName: "Presidential Suite",
    roomType: "Luxury",
    price: 20000,
    image: "https://images.unsplash.com/photo-1590073242678-3b09d87eb000",
  },
  {
    room_no: "106",
    roomName: "Twin Room",
    roomType: "Standard",
    price: 6500,
    image: "https://images.unsplash.com/photo-1578898886855-b04e9b0e6c8b",
  },
];

export default function HomePage() {
  const renderSection = (title: string, rooms: typeof sampleRooms) => (
    <section>
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">{title}</h2>
      <div
        className="
          flex gap-6 overflow-x-auto scroll-smooth pb-4
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {rooms.map((room) => (
          <Link
            key={room.room_no}
            to={`/rooms/${room.room_no}`}
            className="flex-shrink-0 w-full sm:w-[45%] md:w-[30%] lg:w-[22%] snap-start"
          >
            <HomePageRoomCard {...room} />
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <HomeNavbar />
      <main className="container mx-auto px-4 py-10 space-y-16">
        {renderSection("Exclusive Deals", sampleRooms)}
        {renderSection("By Capacity", sampleRooms)}
        {renderSection("By Price", sampleRooms)}
      </main>
    </div>
  );
}
