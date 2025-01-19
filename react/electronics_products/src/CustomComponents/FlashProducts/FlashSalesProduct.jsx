import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const FlashSalesProduct = ({ product }) => {
  return (
    <div className="w-1/4 p-4">
      <div className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="w-full h-56 object-cover rounded-t-lg p-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-4">
          <span className="font-semibold text-white bg-red-500 py-0.5 text-sm rounded px-3 absolute top-4 left-4">
            {product.discount}
          </span>
          <span className="h-6 w-6 flex justify-center items-center rounded-full bg-gray-200 absolute top-4 right-4"><IoMdHeartEmpty className="text-xl" /></span>
          <span className="h-6 w-6 flex justify-center items-center rounded-full bg-gray-200 absolute top-14 right-4"><IoEyeOutline className="text-xl" /></span>
          <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
          <p className="font-semibold text-red-500">
            ${product.price} <del className="text-gray-500 mx-2 text-sm">${product.price + 100}</del>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlashSalesProduct;
