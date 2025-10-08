import TestimonialCard from "@/components/TestomonialCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      guestName: "Aarav Sharma",
      roomName: "Deluxe Ocean View Room",
      feedback:
        "The view was absolutely stunning, and the staff were incredibly friendly. Will definitely return!",
      rating: 5,
    },
    {
      guestName: "Mina Rai",
      roomName: "Executive Suite",
      feedback:
        "Spacious and well-designed suite. The breakfast spread was top-notch!",
      rating: 4,
    },
    {
      guestName: "Kiran Thapa",
      roomName: "Standard Room",
      feedback:
        "Affordable and clean with great service. Perfect for short stays!",
      rating: 4,
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full py-16 md:py-24 lg:py-32  text-gray-900 bg-gray-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’re proud to have hosted hundreds of satisfied guests in our
            hotel. Here’s what some of them had to say.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              guestName={t.guestName}
              roomName={t.roomName}
              feedback={t.feedback}
              rating={t.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
