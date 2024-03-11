import AboutSection from "./Components/AboutSection";
// import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ProjectSection from "./Components/ProjectSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div className="container mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          {/* <EmailSection /> */}
        </div>
          <Footer />
      </main>
    </>
  )
}
