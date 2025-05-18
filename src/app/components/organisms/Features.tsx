// components/Features.tsx

import { ArrowRight } from "lucide-react";

const features = [
  {

    title: "Sejarah",
    description: "Sejarah Singkat Sanpio 62",
    href: "/sejarah", 
  },
  {
    title: "Awal Mula",
    description: "Awal Mula Sanpio 62",
    href: "/awalmula", 
  },
  {
    title: "Makna SPARTA",
    description: "Makna SPARTA bagi Sanpio 62",
    href: "/artisparta", 
  },
];

export default function Features() {
  return (
    <section id="about" className="scroll-mt-20 w-full bg-[#d2e7f5] py-16 mt-2">
      <div className="max-w-6xl mx-auto px-6 text-start mb-16">
        <p className="text-2xl text-gray-800 font-bold">KISAH</p>
        <h2 className="text-xl font-bold text-gray-800 mt-2 mb-6">
            Ini Kisah Kami
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">
        {features.map((feature, index) => (
          <div key={index} className="space-y-2 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
            <a
              href={feature.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-red-500 transition-colors"
            >
              Read More<ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
