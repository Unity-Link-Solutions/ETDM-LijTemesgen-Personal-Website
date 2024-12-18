import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const Merchandise: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Official Merchandise</h1>
        <p className="text-gray-700 mb-8">
          Get exclusive ETDM-themed products, including clothing, accessories,
          and limited-edition items.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProductCard
            title="ETDM T-Shirt"
            price="29.99"
            image="https://via.placeholder.com/400x400?text=ETDM+T-Shirt"
          />
          <ProductCard
            title="Cultural Bracelet"
            price="14.99"
            image="https://via.placeholder.com/400x400?text=Cultural+Bracelet"
          />
          <ProductCard
            title="Signed Poster"
            price="19.99"
            image="https://via.placeholder.com/400x400?text=Signed+Poster"
          />
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
