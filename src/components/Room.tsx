const Room = () => {
  return (
    <article className="flex flex-col items-center px-4 md:px-0 mt-16">
      {/* Header */}
      <header className="flex flex-col gap-2 w-full md:w-1/2">
        {/* Room Image */}
        <figure>
          <img
            src="https://carrolldesign.co.uk/wp-content/uploads/2023/01/luxury-hotel-bedroom-design.jpg"
            alt="Deluxe Room"
            className="w-full object-cover rounded-lg"
          />
          <figcaption className="sr-only">Deluxe Room</figcaption>
        </figure>

        {/* Room Title */}
        <h1 className="text-2xl  font-semibold mt-4">Deluxe King Room</h1>

        {/* Booking Section */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Starting from
              </h3>
              <p className="text-2xl font-bold text-green-600">$150/night</p>
              <p className="text-xs text-gray-500">
                Includes breakfast & taxes
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Room Description */}
      <section className="w-full md:w-1/2 mt-6 text-base leading-7 text-gray-700 font-baskerville tracking-tight whitespace-pre-line">
        Experience timeless comfort in our Deluxe King Room featuring a plush
        king-size bed, classic furnishings, and modern amenities. Enjoy views of
        our serene courtyard or city skyline while relaxing in a space designed
        for both leisure and business travelers.
      </section>

      {/* Amenities Section */}
      <section className="w-full md:w-1/2 mt-8">
        <h2 className="text-xl font-semibold mb-3">Room Amenities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>King-size bed with premium linens</li>
          <li>Air conditioning & heating</li>
          <li>High-speed Wi-Fi</li>
          <li>Smart TV with streaming access</li>
          <li>Mini bar & coffee maker</li>
          <li>Private bathroom with hot shower</li>
          <li>24-hour room service</li>
        </ul>
      </section>
    </article>
  );
};

export default Room;
