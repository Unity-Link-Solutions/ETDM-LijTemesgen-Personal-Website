const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-african-pattern-2 bg-cover bg-center pt-48 pb-20 lg:pt-48 lg:pb-32">
      <div className="container mx-auto text-center text-white px-6 lg:px-20 relative z-10">
        <h1 className="text-6xl lg:text-7xl font-bold text-red-500 mb-6">
          The ETDM Experience
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Celebrating Ethiopian culture through dance, art, and tradition.
        </p>
        <button className="mt-8 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg lg:text-xl transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
