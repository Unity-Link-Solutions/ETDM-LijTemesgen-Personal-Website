const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-[#1C1C1C] py-16 text-center text-white">
      <h2 className="text-3xl lg:text-4xl font-bold text-red-500">
        Join the ETDM Movement
      </h2>
      <p className="mt-4 text-lg text-gray-300">
        Experience the beauty of Ethiopian traditional dance. Participate in
        workshops, attend events, or support us through merchandise.
      </p>
      <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-medium">
        Learn More
      </button>
    </section>
  );
};

export default CallToActionSection;
