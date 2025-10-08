import { useRef } from "react";
import RoomCard from "@/components/RoomCard";
import { useGetRoomsQuery } from "@/api/hotelSlice";
import type { Room } from "@/types/types";

export default function RoomShowcaseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError } = useGetRoomsQuery();

  if (isLoading) return <p className="text-center py-8">Loading rooms...</p>;
  if (isError || !data)
    return <p className="text-center py-8">Failed to load rooms.</p>;

  const rooms: Room[] = data.room;

  return (
    <section
      id="roomShowcase"
      className="w-full py-16 md:py-24 bg-white text-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Explore Our Rooms
          </h2>
          <p className="text-gray-600 md:text-lg max-w-[900px] mx-auto">
            From cozy suites to luxury spaces — find your perfect stay.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-4 scroll-smooth"
        >
          {rooms.map((room) => (
            <RoomCard
              key={room.room_no}
              roomType={room.room_type}
              price={room.price_per_night}
              image={room.room_images}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="/rooms">
            <button className="text-white px-8 py-3 text-lg rounded-lg transition bg-gray-900">
              View All Rooms
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
