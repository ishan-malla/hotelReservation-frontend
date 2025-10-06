interface TestimonialCardProps {
  name: string;
  text: string;
}

export default function TestimonialCard({ name, text }: TestimonialCardProps) {
  return (
    <div className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px] bg-primary/10 border border-primary p-6 rounded-2xl shadow-md flex-shrink-0 hover:shadow-xl transition-shadow duration-300">
      <p className="mb-4 text-gray-900">&quot;{text}&quot;</p>
      <h4 className="font-bold text-primary">{name}</h4>
    </div>
  );
}
