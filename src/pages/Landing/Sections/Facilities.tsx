const facilities = [
  {
    name: "Luxury Spa",
    image:
      "https://www.wayspa.com/wp-content/uploads/2022/08/facial-treatment.jpg",
    desc: "Relax and rejuvenate with our world-class spa treatments.",
  },
  {
    name: "Fine Dining",
    image:
      "https://media.istockphoto.com/id/464802594/photo/elegant-restaurant-interior.jpg?s=612x612&w=0&k=20&c=-R9OftJQwymBMpjSjIDAWehaWr0-bpS6SgWBXU8SbZk=",
    desc: "Experience gourmet cuisine prepared by top chefs.",
  },
  {
    name: "Casino",
    image: "https://media.timeout.com/images/106182415/image.jpg",
    desc: "Enjoy exciting games in a vibrant, luxurious atmosphere.",
  },
  {
    name: "Private Parking",
    image:
      "https://media.istockphoto.com/id/470819606/photo/florida-view.jpg?s=612x612&w=0&k=20&c=-lh25dgENY3ixNdSlMl_WUrhm26e7L3BdZRb-c67gjI=",
    desc: "Spacious and secure parking available 24/7.",
  },
];

const Facilities = () => {
  return (
    <div className="p-10 bg-gray-50  md:w-2/3 mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Hotel Facilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facilities.map((facility) => (
          <div
            key={facility.name}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-6">
              <h2 className="text-2xl font-semibold mb-2">{facility.name}</h2>
              <p className="text-center max-w-md">{facility.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
