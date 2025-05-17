// components/templates/MainTemplate.tsx
import Navbar from "./components/organisms/Navbar";
import Header from "./components/organisms/Header";
import Features from "./components/organisms/Features";
import Gallery from "./components/organisms/Gallery";
import MessageBox from "./components/organisms/MessageBox";
import Footer from "./components/organisms/Footer";

export default function HomePage() {
  return (
    <div className="font-sans bg-[#ffff]">
      <Navbar />
      <Header />
      <Features />
      <Gallery />
      <div className="w-full py-3 bg-[#d2e7f5]">
        <MessageBox />
      </div>
      <Footer />
    </div>
  );
}
