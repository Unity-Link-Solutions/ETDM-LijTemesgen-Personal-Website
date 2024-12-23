const IntroductionSection: React.FC = () => {
  return (
    <section className="bg-[#121212] ">
      <div className="w-full h-12 bg-african-pattern-1 brightness-95 transition-opacity duration-500 hover:opacity-100 opacity-80 animate-pulse"></div>
      <div className="container py-16 mx-auto px-6 lg:px-20 text-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-red-500 mb-8">
          What is ETDM?
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
          The Ethiopian Traditional Dance Movement (ETDM) is a vibrant
          celebration of Ethiopia's rich cultural heritage. From captivating
          stage performances to workshops and community engagement, ETDM has
          become a symbol of artistic expression and cultural preservation.
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;
