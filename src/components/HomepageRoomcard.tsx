type RoomCardProp = {
  room_no: string;
  roomName: string;
  roomType: string;
  price: number;
  image: string | null;
};

export default function HomePageRoomCard({
  roomName,
  roomType,
  price,
  image,
}: RoomCardProp) {
  return (
    <div className="min-w-[280px] md:min-w-[340px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 flex-shrink-0 bg-white">
      {/* Image */}
      <div className="relative h-48 w-full">
        <img
          src={image || "/placeholder.svg"}
          alt={roomName}
          className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Room Info */}
      <div className="p-4 text-gray-100">
        <h3 className="font-semibold text-lg text-blue-600">{roomName}</h3>
        <p className="text-sm text-gray-400 mb-2">{roomType}</p>
        <p className="text-lg font-semibold text-blue-500">NPR {price}</p>
      </div>
    </div>
  );
}
