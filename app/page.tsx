import { Adress } from "./ui/Adress";
import { AmbientSection } from "./ui/AmbientSection";
import { ExperienceSection } from "./ui/ExperienceSection";
import { Hero } from "./ui/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen mx-auto overflow-x-hidden">
      <Hero />
      <AmbientSection />
      <ExperienceSection />
      <Adress />
    </main>
  );
}
