import { useState } from "react";
import "./index.css";

export default function App() {
  const [answer, setAnswer] = useState<null | "yes" | "no">(null);

  return (
    <div className="min-h-screen w-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <h1 className="text-7xl font-bold text-white text-center pt-40 drop-shadow-lg">
        Will you be my Valentine?
      </h1>

      <div className="flex items-center justify-center gap-8 mt-20">
        <button
          onClick={() => setAnswer("yes")}
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded"
        >
          Yes
        </button>

        <button
          onClick={() => setAnswer("no")}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded"
        >
          <span className="text-3xl">No</span>
        </button>
      </div>

      {answer === "yes" && (
        <p className="mt-10 text-center text-4xl text-white font-bold">
          💖 Yay!!! 💖
        </p>
      )}

      {answer === "no" && (
        <p className="mt-10 text-center text-4xl text-white font-bold">
          😢 Oh no…
        </p>
      )}
    </div>
  );
}
