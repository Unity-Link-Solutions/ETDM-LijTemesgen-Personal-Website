const MerchandiseSection: React.FC = () => {
  const merchItems = [
    {
      name: "ETDM T-Shirt",
      image: "/path/to/tshirt.jpg",
      link: "https://third-party-site.com/tshirt",
    },
    {
      name: "Dance DVD",
      image: "/path/to/dvd.jpg",
      link: "https://third-party-site.com/dvd",
    },
    {
      name: "Cultural Poster",
      image: "/path/to/poster.jpg",
      link: "https://third-party-site.com/poster",
    },
  ];

  return (
    <section className="bg-[#121212] py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-red-500 mb-8">
          Merchandise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1F1E18] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-red-500">{item.name}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchandiseSection;
