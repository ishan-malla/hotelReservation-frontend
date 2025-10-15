import { Button } from "@/components/ui/button";

type RoomDetailsCardProps = {
  room_no: string;
  roomName: string;
  roomType: string;
  price: number;
  image: string | null;
  description?: string;
  capacity?: number;
  amenities?: string[];
};

export default function RoomDetailsCard({
  roomName,
  roomType,
  price,
  image,
  description,
  capacity,
  amenities = [],
}: RoomDetailsCardProps) {
  return (
    <div className="mx-auto flex w-full md:w-3/4 flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300">
      {/* Image Section */}
      <div className="md:w-1/2 w-full h-64 md:h-[350px] flex-shrink-0 ">
        <img
          src={image || "/placeholder.svg"}
          alt={roomName}
          className="object-cover w-full h-full pd-4"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between p-6 md:w-1/2 w-full">
        {/* Room Info */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            {roomName}
          </h3>
          <p className="text-sm text-gray-600">{roomType}</p>

          <p className="text-gray-700 mt-3">
            {description ||
              "A cozy and elegant room offering comfort, relaxation, and all the modern amenities you need."}
          </p>

          {capacity && (
            <p className="mt-2 text-sm text-gray-600">
              👥 Capacity: {capacity} guests
            </p>
          )}

          {amenities.length > 0 && (
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-gray-800 mb-1">
                Amenities:
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                {amenities.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
          <p className="text-xl font-bold text-blue-600">
            NPR {price}
            <span className="text-sm text-gray-500"> / night</span>
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
