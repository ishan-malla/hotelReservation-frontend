const photos = [
  "/images/hotel-front.jpg",
  "/images/hotel-lobby.jpg",
  "/images/hotel-room.jpg",
  "/images/hotel-garden.jpg",
  "/images/hotel-dining.jpg",
  "/images/hotel-balcony.jpg",
];

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section id="aboutUs" className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-semibold text-center mb-10 ">
          Our Heritage Story
        </h2>
        <div className=" flex-col md:flex-row gap-15 ">
          <div>
            <h3 className="text-2xl font-semibold  mb-5">
              Background and History
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              At the turn of the 19th century, Gen. Jit Shumsher Rana, brother
              of HH Sri Tin Maharaja Bhir Shumsher Jung Bahadur Rana, hired
              architect Kumar Narsingh Rana to build the most elegant palace in
              Kathmandu. Items such as gilt mirrors, velvet, marble and sunburst
              chandeliers were imported from Europe. The exteriors were
              fashioned in neo-classical style. The construction was completed
              in 1894 A.D. Gen. Jit Shumsher died in 1913, and this palace
              eventually came into the possession of Gen. Maharajkumar Agni
              Shumsher Jung Bahadur Rana - the son of HH Sri Tin Maharaja Juddha
              Shumsher Jung Bahadur Rana, one of the most distinguished of the
              powerful Rana Maharajas. Agni Shumsher's grand-daughters - HM
              Queen Aishwarya, HM Queen Komal and HH Princess Prekshya, were
              born in the palace.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold  mb-5">
              Celebrating 75 Years of Timeless Hospitality{" "}
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Honoring Our Founder’s Dream In 1950 A.D., the visionary Late Mr.
              Hari Prasad Manandhar dreamed of breathing new life into a
              forgotten Rana-era mansion tucked amidst the heart of Kathmandu.
              With an unwavering passion for preservation and Nepalese
              craftsmanship, he began transforming the once-grand residence into
              a welcoming abode for travelers seeking both culture and comfort.
              What began modestly with 18 rooms soon evolved into a beloved
              sanctuary of heritage and hospitality. Today, as Hotel Kathmandu
              Heritage celebrates 75 remarkable years of service, it stands as a
              proud testament to Mr. Manandhar’s dream—a place where old-world
              elegance meets the warmth of Nepali tradition. Nestled in the
              serene avenues of Lazimpat, just minutes from Thamel and the royal
              Durbar Marg, the hotel continues to charm guests with its timeless
              architecture, handcrafted interiors, and tranquil gardens that
              echo with history. In recognition of his lifelong dedication to
              Nepal’s tourism industry, Late Mr. Manandhar was honored with the
              Prabal Gorkha Dakshina Bahu, a symbol of his enduring legacy and
              contribution to national heritage. His guiding philosophy—to blend
              cultural authenticity with modern comfort—remains at the heart of
              every experience we offer. Join us in celebrating 75 years of
              grace, legacy, and heartfelt service at Hotel Kathmandu
              Heritage—where every stay is a journey through time, and every
              guest becomes part of our story.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Location</h2>
          <p className="text-lg mb-4">
            📍 Lazimpat, Kathmandu 44600, Nepal — moments from Thamel and Durbar
            Marg
          </p>
          <p className="text-gray-600 mb-4">
            Surrounded by royal architecture and serene gardens, our location
            blends convenience with quiet elegance.
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on Google Maps →
          </a>
          <div className="mt-6 text-gray-700">
            <p>📞 Phone: +977 1 4510151</p>
            <p>✉️ Email: info@hotelkathmandudu.com</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Glimpses of Elegance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={src}
                alt={`Hotel Kathmandu  ${index}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
