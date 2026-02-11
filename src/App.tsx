import { useState } from "react";
import "./index.css";

export default function App() {
  const [answer, setAnswer] = useState<null | "yes" | "no">(null);
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const [noOffset, setNoOffset] = useState(0);
  let phrases: string[] = [
    "Тоть ты чего? 😢",
    "Ты уверен, малыш? 🥺",
    "Нечаянно нажала, наверное. 😔",
    "Смефно тебе??!",
  ];

  function handleNoClick() {
    setAnswer("no");
    setYesScale((prev) => prev + 0.15);
    setNoScale((prev) => (prev - 0.1));
    setNoOffset((prev) => prev + 12);
  }

  return (
    <div className="min-h-screen w-screen bg-[url('https://i.yapx.ru/c5ozo.jpg')] bg-cover bg-center">
      <h1 className="text-7xl font-bold text-white text-shadow-black text-center pt-40 drop-shadow-lg text-shadow-lg">
        Ммм вы будете мои <br></br>валентином любимоти тоти? <br></br>(потыкай сначала нет)
      </h1>

      <div className="flex items-center justify-center gap-12 mt-40">
        <button
          onClick={() => setAnswer("yes")}
          style={{ transform: `scale(${yesScale})` }}
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded transition-transform duration-300"
        >
          <span className="text-4xl">ОЧЕНЬ ДЯЯЯ</span>
        </button>

        <button
          onClick={handleNoClick}
          style={{ transform: `translateX(${noOffset}px) scale(${noScale})` }}
          
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded transition-transform duration-300"
        >
          <span className="text-4xl">Нет</span>
        </button>
      </div>

      {answer === "yes" && (
      <div className="flex flex-col items-center mt-20 gap-10">
        <p className="text-6xl text-white font-bold">💕💕💕💕💕</p>
        
        <img
          src="https://media1.tenor.com/m/Yp0KOBZZ9RYAAAAd/%D0%BA%D0%BE%D1%82-%D0%BF%D0%BE%D1%86%D0%B5%D0%BB%D1%83%D0%B9.gif"
          alt="кот поцелуй"
          className="w-96 rounded-xl shadow-2xl"
        />
      </div>
    )}
      {answer === "no" && (
        <p className="text-7xl font-bold text-white text-shadow-black text-center pt-40 drop-shadow-lg text-shadow-lg">
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </p>
      )}
    </div>
  );
}
