import { useGetHotelAmenitiesQuery } from "@/api/hotelSlice";

const Facilities = () => {
  const { data: hotelAmenities = [] } = useGetHotelAmenitiesQuery(undefined);

  return (
    <section id="facilities" className="p-10 bg-gray-50  md:w-2/3 mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Hotel Facilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hotelAmenities.map((amenity) => (
          <div
            key={amenity.hotel_amenity_id}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={amenity.hotel_amenity_image}
              alt={amenity.hotel_amenity_name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {amenity.hotel_amenity_name}
              </h2>
              <p className="text-center max-w-md">
                {amenity.amenity_description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
