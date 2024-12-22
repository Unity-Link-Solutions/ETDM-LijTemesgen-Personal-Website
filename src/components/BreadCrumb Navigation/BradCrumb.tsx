import React from "react";

interface BreadcrumbProps {
  items: { name: string; link?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="mt-6 flex justify-center space-x-3 text-sm lg:text-base text-gray-300">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <a
              href={item.link}
              className="hover:text-red-500 transition duration-300"
            >
              {item.name}
            </a>
          ) : (
            <span className="text-gray-400">{item.name}</span>
          )}
          {index < items.length - 1 && <span className="text-gray-400">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
