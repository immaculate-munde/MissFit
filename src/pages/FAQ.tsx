import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const FAQ: React.FC = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate are MissFit's measurements?",
      answer: "MissFit's AI-powered measurements are highly accurate, typically within 1-2cm of manual measurements. We achieve this by using A4 paper calibration and multi-angle photos to ensure precise scaling."
    },
    {
      question: "What do I need to take measurements?",
      answer: "You'll need: 1) A smartphone with a camera, 2) An A4 paper sheet, 3) Fitted clothing (like leggings and a tank top), and 4) Good lighting in your space."
    },
    {
      question: "Is my data private and secure?",
      answer: "Yes, absolutely. Your photos are processed securely and are never shared with third parties. They're used solely for generating your measurements and are handled according to our strict privacy policy."
    },
    {
      question: "Can I delete my photos after getting measurements?",
      answer: "Yes, you can request deletion of your photos at any time. Your measurements will still be saved in your account, but the original photos can be removed."
    },
    {
      question: "How long does the measurement process take?",
      answer: "The entire process takes about 2-3 minutes: 1 minute to take the required photos and 1-2 minutes for our AI to process them and generate your measurements."
    },
    {
      question: "What sizes and measurements does MissFit provide?",
      answer: "MissFit provides comprehensive measurements including bust, waist, hips, inseam, and more. We also provide size recommendations for major clothing brands and retailers."
    },
    {
      question: "Do I need to retake measurements often?",
      answer: "We recommend updating your measurements every 3-6 months or whenever you notice significant changes in your body. This ensures the most accurate size recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          <Link 
            to="/"
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
          >
            Go to Home
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
