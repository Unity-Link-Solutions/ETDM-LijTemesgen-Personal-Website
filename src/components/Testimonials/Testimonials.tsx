import React, { useState } from "react";
import ObambaImage from "../../assets/images/Testimonials/obama.jpg";
import RophnanImage from "../../assets/images/Testimonials/Rophnan.png";

const testimonials = [
  {
    quote:
      "Lij Temesgen is a masterful choreographer who has brought Ethiopian culture to the global stage.",
    name: "Barack Obama",
    title: "44th U.S. President",
    image: ObambaImage,
  },
  {
    quote:
      "A cultural icon who continues to inspire generations with his creativity and passion for Ethiopian dance.",
    name: "Rophnan",
    title: "Musician & Composer",
    image: RophnanImage,
  },
  {
    quote:
      "Collaborating with Lij Temesgen was a transformative experience. His talent is unmatched.",
    name: "Rophnan",
    title: "Ethiopian Artist & Music Producer",
    image: "https://via.placeholder.com/100",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="w-full py-16 bg-[#1F1E18] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="w-32 h-2 bg-red-500 mx-auto mb-4"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-red-500">
            What People Say
          </h2>
          <div className="w-32 h-2 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Testimonial Content */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full text-center px-4 lg:px-20"
              >
                {/* Quote */}
                <p className="text-xl lg:text-2xl italic text-gray-300 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                {/* Name & Title */}
                <div>
                  <h3 className="text-lg font-bold text-red-500">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
                {/* Image */}
                <div className="mt-6 w-24 h-24 rounded-full overflow-hidden mx-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevTestimonial}
            className="bg-[#121212] hover:bg-red-500 text-white py-3 px-6 rounded-full shadow-md transition focus:outline-none"
          >
            &#8592; Previous
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-[#121212] hover:bg-red-500 text-white py-3 px-6 rounded-full shadow-md transition focus:outline-none"
          >
            Next &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
