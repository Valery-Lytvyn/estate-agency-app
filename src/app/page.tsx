import ServicesSection from "./components/ServicesSection";
import Slider from "./components/ui/Slider";
import { slides } from "./data";

export default function Home() {
  return (
    <main className="relative">
      <Slider slides={slides} />
      <div className="container py-4 lg:py-8">
        <ServicesSection />
      </div>
    </main>
  );
}
