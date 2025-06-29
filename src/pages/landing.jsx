import Community from "../components/LandingPage/Community";
import Footer from "../components/LandingPage/Footer";
import GetStarted from "../components/LandingPage/GetStarted";
import Hero from "../components/LandingPage/Hero";
import LandingHeader from "../components/LandingPage/LandingHeader";

const Landing = () => {
  return (
    <>
      <div className="">
        <LandingHeader />
        <Hero />
        <Community />
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Landing;
