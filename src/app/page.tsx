import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturedCollection } from "@/components/featured-collection";
import { StickerWall } from "@/components/sticker-wall";
import { AboutSection } from "@/components/about-section";
import { DesignLab } from "@/components/design-lab";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <StickerWall />
      <AboutSection />
      <DesignLab />
      <Footer />
    </main>
  );
}
