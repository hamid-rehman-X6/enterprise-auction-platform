import Navbar from "@src/components/layout/Navbar";
import Footer from "@src/components/layout/Footer";
import HeroSection from "@src/components/sections/HeroSection";
import FeaturedAuctions from "@src/components/sections/FeaturedAuctions";
import HowItWorks from "@src/components/sections/HowItWorks";
import TrustSection from "@src/components/sections/TrustSection";
import CallToAction from "@src/components/sections/CallToAction";

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
