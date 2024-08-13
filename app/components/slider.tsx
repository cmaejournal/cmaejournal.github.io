"use client";

import useEmblaCarousel from "embla-carousel-react";

export default function Slider({ children }: any) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        {children}
      </div>
    </div>
  );
}
