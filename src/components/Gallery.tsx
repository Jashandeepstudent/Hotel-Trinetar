import Image from "next/image";
import { Reveal } from "./Reveal";

const galleryImages = [
  {
    src: "/images/exterior-night-lights.jpg",
    alt: "Hotel exterior lit up for a festive occasion",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/banquet-outdoor-decor.jpg",
    alt: "Outdoor event décor on the lawn at night",
    span: "",
  },
  {
    src: "/images/lobby-reception.jpg",
    alt: "Hotel lobby seating area",
    span: "",
  },
  {
    src: "/images/logo-etched.jpg",
    alt: "Trinetar Gardens etched glass signage",
    span: "",
  },
  {
    src: "/images/exterior-dusk.jpg",
    alt: "Hotel building at dusk",
    span: "",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-lg text-balance">
            A look around
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[180px]">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className={`relative rounded-md overflow-hidden ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
