import { Star } from "lucide-react";

interface TestimonialCardProps {
  guestName: string;
  roomName: string;
  feedback: string;
  rating: number;
}

export default function TestimonialCard({
  guestName,
  roomName,
  feedback,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 shadow-sm h-full flex flex-col gap-2 justify-between hover:shadow-md transition-all duration-300">
      {/* Guest Info */}
      <div className="mt-4">
        <h3 className="font-semibold text-primary">{guestName}</h3>
        <p className="text-sm text-gray-500">{roomName}</p>
      </div>

      {/* Feedback Content */}

      <p className="text-gray-700 italic  ">&quot;{feedback}&quot;</p>
      {/* Star Rating */}
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? "fill-primary text-primary"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
