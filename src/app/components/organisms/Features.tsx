// components/Features.tsx

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: "/icons/Activity.png",
    title: "Biodata",
    description: "This is My Biodata",
    href: "/biodata", // Tambahkan path untuk halaman biodata
  },
  {
    icon: "/icons/Heart.png",
    title: "Skills",
    description: "This is My Skills",
    href: "/skills", // Tambahkan path untuk halaman skills
  },
  {
    icon: "/icons/Work.png",
    title: "Interest",
    description: "This is My Interest",
    href: "/interest", // Tambahkan path untuk halaman interest
  },
];

export default function Features() {
  return (
    <section id="about" className="w-full bg-[#d2e7f5] py-16 mt-2">
      <div className="max-w-6xl mx-auto px-6 text-start mb-16">
        <p className="text-2xl text-[#dc5341] font-semibold">ABOUT</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Let&apos;s get acquainted
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">
        {features.map((feature, index) => (
          <div key={index} className="space-y-4">
            <div className="inline-block p-5 bg-white rounded-2xl">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
                className="w-10 h-10 mx-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
            <a
              href={feature.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-[#dc5341] transition-colors"
            >
              Read More <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
