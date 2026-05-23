import Topbar from "../components/Topbar";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import QuickActions from "../components/QuickActions";

function Dashboard() {

  return (

    <div className="w-full max-w-[1350px] mx-auto">

      {/* TOPBAR */}
      <Topbar />

      {/* HERO */}
      <div className="mt-5">
        <HeroSection />
      </div>

      {/* FEATURE CARDS */}
      <div className="mt-6">
        <FeatureCards />
      </div>

      {/* QUICK ACTIONS */}
      <div className="mt-6 pb-8">
        <QuickActions />
      </div>

    </div>

  );
}

export default Dashboard;