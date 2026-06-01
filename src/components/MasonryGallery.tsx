"use client";

import Masonry from "react-masonry-css";
import { useMemo, useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import AnimatedSection from "./AnimatedSection";

const images = [
  {
    src: "/images/gallery/1.jpg",
    category: "Портреты",
  },
  {
    src: "/images/gallery/2.jpg",
    category: "Авто",
  },
  {
    src: "/images/gallery/3.jpg",
    category: "Lifestyle",
  },
  {
    src: "/images/gallery/4.jpg",
    category: "Fashion",
  },
  {
    src: "/images/gallery/5.jpg",
    category: "Репортаж",
  },
  {
    src: "/images/gallery/6.jpg",
    category: "Портреты",
  },
  {
    src: "/images/gallery/7.jpg",
    category: "Авто",
  },
  {
    src: "/images/gallery/8.jpg",
    category: "Lifestyle",
  },
];

export default function MasonryGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const categories = [
    "Все",
    "Портреты",
    "Авто",
    "Lifestyle",
    "Fashion",
    "Репортаж",
  ];

  const [selectedCategory, setSelectedCategory] =
    useState("Все");

  const filteredImages = useMemo(() => {
    if (selectedCategory === "Все") return images;

    return images.filter(
      (img) => img.category === selectedCategory
    );
  }, [selectedCategory]);

  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    768: 2,
    500: 1,
  };

  return (
    <section className="bg-black px-4 md:px-8 pb-20">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
              Portfolio
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Избранные работы
            </h2>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`px-5 py-3 rounded-full transition duration-300
                ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-4 md:gap-6"
            columnClassName="space-y-4 md:space-y-6"
          >
            {filteredImages.map((image, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setIndex(idx);
                  setOpen(true);
                }}
                className="group overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer"
              >
                <img
                  src={image.src}
                  alt=""
                  className="w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </Masonry>

          {/* Lightbox */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={filteredImages.map((img) => ({
              src: img.src,
            }))}
          />
        </div>
      </AnimatedSection>
    </section>
  );
}