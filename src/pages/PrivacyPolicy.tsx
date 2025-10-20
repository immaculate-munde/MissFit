import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Navigation buttons */}
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

        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">MissFit Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <p>
            MissFit ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, 
            and protect information when you use the MissFit mobile application ("App").
          </p>

          <section>
            <h2 className="text-2xl font-bold">1. Information We Collect</h2>
            <p>We may collect the following information when you use MissFit:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Photos you upload for body measurement purposes. These are processed by our AI models to generate size and fit predictions.</li>
              <li>Optional user input like name or email (if you provide feedback or sign up for updates).</li>
            </ul>
            <p>We do not collect or store biometric identifiers, facial recognition data, or any personally identifiable data beyond what you voluntarily provide.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. How We Use the Information</h2>
            <p>We use collected data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Generate accurate body measurement predictions.</li>
              <li>Improve our algorithms and app performance.</li>
              <li>Communicate with users who volunteer contact information (e.g. for pilot testing feedback).</li>
            </ul>
            <p>We do not sell, rent, or share user data with third parties for advertising or marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. Data Storage and Security</h2>
            <p>
              Uploaded photos and measurement data are securely processed and may be stored temporarily for analysis. 
              We use industry-standard security measures to prevent unauthorized access, alteration, or deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. User Choices</h2>
            <p>
              You can request deletion of your data or photos at any time by contacting us at:{' '}
              <a href="mailto:jaraemmanuel562@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                jaraemmanuel562@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">5. Children's Privacy</h2>
            <p>
              MissFit is not directed toward children under 13. We do not knowingly collect or store any data 
              from children under 13. If you believe we may have done so, please contact us for immediate deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Any significant updates will be posted on this page 
              with a revised "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">7. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, contact us at:{' '}
              <a href="mailto:jaraemmanuel562@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                jaraemmanuel562@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
