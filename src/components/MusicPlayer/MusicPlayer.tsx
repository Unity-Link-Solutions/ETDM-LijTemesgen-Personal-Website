import React from "react";
import SpotifyLogo from "../../assets/images/Music/768px-Spotify.png";
import YouTubeLogo from "../../assets/images/Music/youtube.png";
import AppleMusicLogo from "../../assets/images/Music/Apple_Music_logo.png";
import DeezerLogo from "../../assets/images/Music/deezer.png";

const platforms = [
  {
    name: "Spotify",
    logo: SpotifyLogo,
    link: "https://open.spotify.com/",
  },
  {
    name: "YouTube",
    logo: YouTubeLogo,
    link: "https://www.youtube.com/",
  },
  {
    name: "Apple Music",
    logo: AppleMusicLogo,
    link: "https://www.apple.com/apple-music/",
  },
  {
    name: "Deezer",
    logo: DeezerLogo,
    link: "https://www.deezer.com/",
  },
];

const MusicSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#121212] text-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-32 h-2 bg-red-500 mb-4"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-red-500 text-center">
            Listen to Lij Temesgen's Music
          </h2>
          <p className="text-gray-300 text-lg mt-4 text-center">
            Discover the rhythms of ETDM on your favorite platforms.
          </p>
          <div className="w-32 h-2 bg-red-500 mt-4"></div>
        </div>

        {/* Platform Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center transition-transform hover:scale-105"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="w-20 h-20 object-contain mb-4 group-hover:grayscale-0 grayscale transition duration-500"
              />
              <span className="text-lg font-semibold text-white group-hover:text-red-500">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
