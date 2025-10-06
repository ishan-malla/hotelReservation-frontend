import { Link } from "react-router";

export default function RoomCard({ roomName, roomType, price, image }) {
  return (
    <div className="min-w-[280px] md:min-w-[340px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex-shrink-0 text-white">
      <div className="relative h-48 w-full">
        <img
          src={image || "/placeholder.svg"}
          alt={roomName}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{roomName}</h3>
        <p className="text-sm text-gray-300 mb-2">{roomType}</p>
        <p className="text-lg font-bold text-white">
          NPR {price.toLocaleString()}
        </p>

        <Link to={`/rooms/${roomName.replace(/\s+/g, "-").toLowerCase()}`}>
          <button className="mt-3 bg-gray-800 hover:bg-gray-600 px-4 py-2 rounded-lg w-full transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
