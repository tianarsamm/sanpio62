"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition = scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const galleryItems = [
    {
      title: "",
      image: "/fotosparta/1.svg",
    },
    {
      title: "",
      image: "/fotosparta/2.svg",
    },
    {
      title: "",
      image: "/fotosparta/3.svg",
    },
    {
      title: "",
      image: "/fotosparta/4.svg",
    },
    {
      title: "",
      image: "/fotosparta/5.svg",
    },
    {
      title: "",
      image: "/fotosparta/6.svg",
    },
    {
      title: "",
      image: "/fotosparta/7.svg",
    },
    {
      title: "",
      image: "/fotosparta/8.svg",
    },
    {
      title: "",
      image: "/fotosparta/9.svg",
    },
    {
      title: "",
      image: "/fotosparta/10.svg",
    },
    {
      title: "",
      image: "/fotosparta/11.svg",
    },
    {
      title: "",
      image: "/fotosparta/12.svg",
    },
    {
      title: "",
      image: "/fotosparta/13.svg",
    },
    {
      title: "",
      image: "/fotosparta/14.svg",
    },
    {
      title: "",
      image: "/fotosparta/15.svg",
    },
    {
      title: "",
      image: "/fotosparta/16.svg",
    },
    {
      title: "",
      image: "/fotosparta/17.svg",
    },
    {
      title: "",
      image: "/fotosparta/18.svg",
    },
    {
      title: "",
      image: "/fotosparta/19.svg",
    },
    {
      title: "",
      image: "/fotosparta/20.svg",
    },
    {
      title: "",
      image: "/fotosparta/21.svg",
    },
    {
      title: "",
      image: "/fotosparta/22.svg",
    },
    {
      title: "",
      image: "/fotosparta/23.svg",
    },
    {
      title: "",
      image: "/fotosparta/24.svg",
    },
    {
      title: "",
      image: "/fotosparta/25.svg",
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-[#d2e7f5] relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-gray-800 font-bold text-2xl mb-2">GALERI</p>
        <h2 className="text-xl font-bold text-gray-800 mt-2 mb-6">
          Kenangan yang Tak Terlupakan
        </h2>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-white shadow-lg text-black flex items-center justify-center hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-white shadow-lg text-black flex items-center justify-center hover:bg-gray-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scrollable Gallery Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[300px] snap-center"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={256}
                    onClick={() => setSelectedImage(item.image)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal with Close Button */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-full max-h-full">
              <Image
                src={selectedImage}
                alt="Preview"
                width={1024}
                height={768}
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
                priority
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
