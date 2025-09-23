import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Benefits from '../components/landing/Benefits';
import CallToAction from '../components/landing/CallToAction';
const LandingPage: React.FC = () => {
  return <div className="w-full">
      <Hero />
      <Features />
      <Benefits />
      <CallToAction />
    </div>;
};
export default LandingPage;