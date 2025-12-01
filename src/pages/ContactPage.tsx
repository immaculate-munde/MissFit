import React, { useState } from "react";
import { Send, CheckCircle, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xwprzzrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
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

        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
          Get in Touch
        </h1>
        <div className="mb-8 text-center">
          <div className="text-lg text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Phone 1:</span> <a href="tel:+254755495934" className="text-purple-600 hover:underline">+254 755 495 934</a><br />
              <span className="font-semibold">Phone 2:</span> <a href="tel:+254743605923" className="text-purple-600 hover:underline">+254 743 605 923</a><br />
              <span className="font-semibold">Email:</span> <a href="mailto:missfitfashion2025@gmail.com" className="text-purple-600 hover:underline">missfitfashion2025@gmail.com</a>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-600 transition-all duration-300 disabled:opacity-50"
            >
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && (
                <>
                  <CheckCircle className="h-5 w-5" />
                  Sent Successfully
                </>
              )}
              {status === 'idle' && (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
