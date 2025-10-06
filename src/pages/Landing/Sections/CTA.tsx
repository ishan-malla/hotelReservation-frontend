import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function CTASection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex justify-center"
      aria-labelledby="cta-heading"
    >
      <div className="container px-4 md:px-6">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              id="cta-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Ready to Relax in the Heart of Kathmandu?
            </h2>
            <p className="max-w-[800px] text-sm sm:text-base md:text-lg text-gray-300">
              Experience comfort, culture, and calm — all in one stay. Book your
              room today or explore our exclusive offers.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 min-[400px]:flex-row mt-6">
            <Link to="/">
              <Button
                size="lg"
                className="px-8 bg-white text-gray-900 hover:bg-gray-200 transition-colors cursor-pointer rounded-xl font-semibold shadow-lg"
                aria-label="Book a room at Hotel Kathmandu"
              >
                <span>Book Your Stay</span>
              </Button>
            </Link>
            <Link to="/">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-gray-900 hover:bg-gray-200 transition-colors cursor-pointer rounded-xl font-semibold"
                aria-label="View our special offers"
              >
                <span>View Offers</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
