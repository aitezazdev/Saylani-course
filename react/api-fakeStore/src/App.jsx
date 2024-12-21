import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const API_URL = "https://fakestoreapi.com/products/";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(API_URL);
      console.log(response.data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center text-5xl font-bold my-5">API Data</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {data.map((product) => (
          <div
            key={product.id}
            className="w-[300px] h-[400px] p-2 bg-green-400 overflow-hidden rounded-lg shadow-lg"
          >
            <div className="h-[200px] w-full">
              <img
                className="w-full h-full object-contain"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-orange-700 font-semibold truncate my-2">
                {product.title}
              </h2>
              <p>
                {product.description.length > 100
                  ? product.description.toLowerCase().slice(0, 150) + "..."
                  : product.description.toLowerCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
