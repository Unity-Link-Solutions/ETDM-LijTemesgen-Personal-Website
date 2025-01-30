import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-[#1E1E1E] shadow-lg rounded-xl p-8 border border-gray-700 text-white">
        <h2 className="text-3xl font-bold text-gray-200 mb-6 text-center">
          Contact Us
        </h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-gray-400 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#2C2C2C] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#E63946] outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-400 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#2C2C2C] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#E63946] outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-gray-400 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#2C2C2C] border border-gray-600 rounded-lg px-4 py-3 h-32 text-white placeholder-gray-500 resize-none focus:ring-2 focus:ring-[#E63946] outline-none transition-all"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#E63946] hover:bg-[#D62828] text-white py-3 px-6 rounded-lg transition-all font-bold text-lg"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center text-green-400 font-medium text-lg py-6">
            🎉 Thank you! Your message has been sent successfully.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
