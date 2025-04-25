// components/templates/MainTemplate.tsx
import Navbar from "./components/organisms/Navbar";
import Header from "./components/organisms/Header";
import Features from "./components/organisms/Features";
import Gallery from "./components/organisms/Gallery";
import Footer from "./components/organisms/Footer";

export default function HomePage() {
  return (
    <div className="font-sans bg-[#ffff]">
      <Navbar />
      <Header />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
}
