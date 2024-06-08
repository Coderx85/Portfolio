import Skills from "@/components/Skills";
import AboutSection from "@/components/(about)/AboutSection";
import EmailSection from "@/components/(footer)/EmailSection";
import Footer from "@/components/(footer)/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "@/components/(navbar)/Navbar";
import ProjectSection from "@/components/(project)/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#111827] overflow-auto scrollbar-hide h-[300px]">
      <Navbar/>
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <Skills />
        
        <ProjectSection />
        <EmailSection />
      </div>
        <Footer />
    </main>
  )
}
