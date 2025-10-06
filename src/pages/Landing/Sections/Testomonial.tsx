import TestimonialCard from "@/components/TestomonialCard";

const testimonials = [
  { name: "John Doe", text: "Amazing stay! The room was clean and cozy." },
  {
    name: "Jane Smith",
    text: "Loved the amenities and the view from my room!",
  },
  { name: "Alice Johnson", text: "The staff was very friendly and helpful." },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Guest Testimonials
      </h2>

      <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap overflow-x-auto scrollbar-hide px-2">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} name={t.name} text={t.text} />
        ))}
      </div>
    </section>
  );
}
