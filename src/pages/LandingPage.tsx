import React from "react";
import Hero from "../components/landing/Hero";
import Benefits from "../components/landing/Benefits";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import DemoSection from "../components/landing/DemoSection";
import CallToAction from "../components/landing/CallToAction";
import Partners from "../components/landing/Partners";

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
      <div id="partners" className="bg-white dark:bg-gray-900">
        <Partners />
      </div>
      <div id="benefits" className="bg-white dark:bg-gray-900">
        <Benefits />
      </div>
      <div id="pricing" className="bg-white dark:bg-gray-900">
        {/* If you have a Pricing component */}
        {/* <Pricing /> */}
      </div>
      <div id="testimonials" className="bg-white dark:bg-gray-900">
        <Testimonials />
      </div>
      <div id="download">
        <CallToAction />
      </div>
    </div>
  );
};

export default LandingPage;
