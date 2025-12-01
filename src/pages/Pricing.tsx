import React from "react";

const Pricing: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-extrabold text-purple-700 mb-4">Pricing</h2>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
        Each scan costs <span className="font-bold">150 Ksh</span>.
        <br />
        Enjoy discounted rates if you are affiliated with our partners!
      </p>
      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        For more details on partner discounts, please contact us or check with your affiliated organization.
      </div>
    </section>
  );
};

export default Pricing;
