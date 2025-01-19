import React, { useState, useEffect } from "react";
import image1 from "../assets/hero_1.jpeg";
import image2 from "../assets/hero_2.jpg";
import image3 from "../assets/hero_3.avif";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="my-10">
      <div className="relative w-[80%] h-72 mx-auto rounded-lg overflow-hidden shadow-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transform transition-all duration-1000 ease-in-out ${
              index === currentImage
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((item, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;