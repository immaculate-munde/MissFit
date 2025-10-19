import React from "react";
import Hero from "../components/landing/Hero";
import Benefits from "../components/landing/Benefits";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import DemoSection from "../components/landing/DemoSection";
import CallToAction from "../components/landing/CallToAction";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
      <div id="home">
        <Hero />
      </div>
      <div id="how-it-works" className="bg-white dark:bg-gray-900">
        <HowItWorks />
      </div>
      <div id="poses" className="bg-white dark:bg-gray-900">
        <DemoSection />
      </div>
      <div id="features" className="bg-white dark:bg-gray-900">
        <Benefits />
      </div>
      <div id="testimonials" className="bg-white dark:bg-gray-900">
        <Testimonials />
      </div>
      <div id="contact">
        <CallToAction />
      </div>
    </div>
  );
};

export default LandingPage;
