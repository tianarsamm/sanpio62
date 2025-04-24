// components/templates/MainTemplate.tsx
import Navbar from "./components/organisms/Navbar";
import Header from "./components/organisms/Header";
import About from "./components/organisms/About";
import Gallery from "./components/organisms/Gallery";
import Footer from "./components/organisms/Footer";
import SimpleAudioPlayer from "./components/organisms/SimpleAudioPlayer";

export default function HomePage() {
  return (
    <div className="font-sans bg-[#ffff]">
      <Navbar />
      <Header />
      <About />
      <Gallery />
      <Footer />
      <SimpleAudioPlayer />
    </div>
  );
}
