import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  link,
}) => {
  return (
    <div className="relative group bg-[#1F1E18] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium">
            View Details
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-red-500">{name}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        <p className="text-lg font-semibold mt-4">{price}</p>
      </div>

      {/* Link */}
      <Link
        to={link}
        className="absolute inset-0"
        aria-label={`Go to ${name}`}
      ></Link>
    </div>
  );
};

export default ProductCard;
