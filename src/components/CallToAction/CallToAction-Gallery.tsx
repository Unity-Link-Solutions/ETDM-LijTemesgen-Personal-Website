import React from "react"; const CallToAction: React.FC = () => { return (
<div className="py-16 bg-[#1C1C1C] text-center">
  <h2 className="text-3xl lg:text-4xl font-bold text-red-500">Discover More</h2>
  <p className="mt-4 text-lg text-gray-300">
    Explore Ethiopian culture through Lij Temesgen's works and initiatives.
  </p>
  <button
    className="mt-6 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-medium"
  >
    Learn More
  </button>
</div>
); }; export default CallToAction;
