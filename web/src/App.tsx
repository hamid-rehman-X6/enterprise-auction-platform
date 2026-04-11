import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import FeaturedAuctions from "./components/sections/FeaturedAuctions";
import HowItWorks from "./components/sections/HowItWorks";
import TrustSection from "./components/sections/TrustSection";
import CallToAction from "./components/sections/CallToAction";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] font-sans">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <FeaturedAuctions />
        <HowItWorks />
        <TrustSection />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}

export default App;
