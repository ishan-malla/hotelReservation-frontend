import { useEffect, useRef, useState } from "react";

interface AutoImageSliderProps {
  images: string[];
  speed?: number;
}

export default function ImageSlider({
  images,
  speed = 1,
}: AutoImageSliderProps) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 1);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const imageWidth = 416;
      const totalWidth = imageWidth * images.length;

      if (Math.abs(offset) >= totalWidth) {
        setOffset(0);
      }
    }
  }, [offset, images.length]);

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-4">
      <div
        ref={containerRef}
        className="flex"
        style={{
          transform: `translateX(${offset * speed}px)`,
          transition: "none",
        }}
      >
        {/* Triple the images for seamless loop */}
        {[...images, ...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-[400px] h-[250px] object-cover rounded-xl mx-2 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
