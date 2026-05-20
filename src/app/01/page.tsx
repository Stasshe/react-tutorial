"use client";

import { useState } from "react";
import BackButton from "@/componets/back";

export default function page01() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BackButton />
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page component.</p>

      <div className="my-4">
        <p className="text-lg">Current Count: {count}</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment Count
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement Count
        </button>
      </div>
    </>
  );
}