import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import Legit from "@/components/Legit";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import WalletCopy from "@/components/wallet";
import ImageCarousel from "@/components/carousel";
import BackgroundAudio from "@/components/music";

export default function Home() {
  const images = [
    '/carousel image 1.jpg',
    '/carousel image 2.jpg',
    '/carousel image 3.jpg',
    '/carousel image 4.jpg',
    '/carousel image 5.jpg',
    '/carousel image 6.jpg',
    '/carousel image 7.jpg',
    '/carousel image 8.jpg',
    '/carousel image 9.jpg', 
  ];

  return (
    <main style={{background: "url('/nuketown-wallpaper.png')", backgroundSize: "cover", backgroundAttachment: "fixed"}}>
      <Navbar />
      <Hero />
      <Intro />
      <Tokenomics />
      <WalletCopy />
      <ImageCarousel images={images} />
      <Footer />
      <BackgroundAudio audioUrl="/Black Ops II Tranzit full loading screen song - zopiahh (2).mp3" />
    </main>
  );
}
