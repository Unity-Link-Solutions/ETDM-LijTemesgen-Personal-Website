const TimelineSection: React.FC = () => {
  const milestones = [
    {
      year: "2010",
      title: "ETDM Founded",
      description: "A movement born to preserve Ethiopian dance.",
    },
    {
      year: "2015",
      title: "Global Stage",
      description: "First international performance at Global Dance Festival.",
    },
    {
      year: "2020",
      title: "Cultural Workshops",
      description: "Launched cultural workshops for youth.",
    },
    {
      year: "2023",
      title: "500+ Performances",
      description: "Celebrated over 500 performances worldwide.",
    },
  ];

  return (
    <section className="bg-[#1C1C1C] py-16 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-red-500 mb-8">
          Milestones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-[#121212] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-red-500">
                {milestone.year}
              </h3>
              <h4 className="text-lg text-gray-300 mt-2">{milestone.title}</h4>
              <p className="text-sm text-gray-400 mt-2">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
