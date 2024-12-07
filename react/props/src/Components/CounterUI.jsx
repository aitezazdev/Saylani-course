import React, { useState } from "react";
import CounterOutput from "./CounterOutput";

const CounterUI = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  const increment = () => {
    setError("");
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) {
      setError("Cannot decrement below 0");
      return;
    }
    setError("");
    setCount(count - 1);
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-zinc-300 rounded-lg flex flex-col justify-center items-center gap-5 p-5">
      <h1 className="text-3xl">Counter</h1>
      <div>
        <button
          onClick={() => increment()}
          className="px-4 py-2 rounded-md bg-green-500 text-white mx-2"
        >
          Increment
        </button>
        <button
          onClick={() => decrement()}
          className="px-4 py-2 rounded-md bg-green-500 text-white"
        >
          Decrement
        </button>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        {error && <p className="text-red-500">{error}</p>}
        <CounterOutput count={count} />
      </div>
    </div>
  );
};

export default CounterUI;
