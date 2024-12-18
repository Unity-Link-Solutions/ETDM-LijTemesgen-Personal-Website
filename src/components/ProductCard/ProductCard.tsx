import React from "react";

interface ProductCardProps {
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://via.placeholder.com/400x400?text=Product"
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-red-600 font-semibold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
