import React from "react";
import handHeld from "../../assets/Images/handheld.jpg";
import FlashSalesProduct from "./FlashSalesProduct";

const FlashSalesAll = () => {
  const flashSalesProducts = [
    {
      image: handHeld,
      discount: "-40%",
      title: "Product 1",
      price: 100,
    },
    {
      image: handHeld,
      discount: "-40%",
      title: "Product 1",
      price: 100,
    },
    {
      image: handHeld,
      discount: "-40%",
      title: "Product 1",
      price: 100,
    },
    {
      image: handHeld,
      discount: "-40%",
      title: "Product 1",
      price: 100,
    },
    {
      image: handHeld,
      discount: "-40%",
      title: "Product 1",
      price: 100,
    },
    {
      image: handHeld,
      discount: "-40%",
      title: "Product 1",
      price: 100,
    },
    {
      image: handHeld,
      discount: "-40%",
      title: "Product 1",
      price: 100,
    },
    {
      image: handHeld,
      discount: "-40%",
      title: "Product 1",
      price: 100,
    },
    {
      image: handHeld,
      discount: "-40%",
      title: "Product 1",
      price: 100,
    },
    {
      image: handHeld,
      discount: "-40%",
      title: "Product 1",
      price: 100,
    },

  ];

  return (
    <div>
      <h2 className="text-3xl font-bold m-8">Flash Sales</h2>
      <div className="flex gap-5 flex-wrap justify-center">
        {flashSalesProducts.map((product, index) => (
          <FlashSalesProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSalesAll;
