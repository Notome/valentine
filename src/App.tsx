import { useState, useRef } from "react";
import "./index.css";

export default function App() {
  const [answer, setAnswer] = useState<null | "yes" | "no">(null);
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const [noOffset, setNoOffset] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const phrases: string[] = [
    "Тоть ты чего? 😢",
    "Ты уверен, малыш? 🥺",
    "Нечаянно нажала, наверное. 😔",
    "Смефно тебе??!",
  ];

  function startMusic() {
    audioRef.current?.play();
  }

  function handleNoClick() {
    startMusic();
    setAnswer("no");
    setYesScale((prev) => prev + 0.15);
    setNoScale((prev) => prev - 0.1);
    setNoOffset((prev) => prev + 20);
  }

  function handleYesClick() {
    startMusic();
    setAnswer("yes");
  }

  return (
    <div className="relative min-h-screen w-screen bg-[url('https://i.yapx.ru/c5ozo.jpg')] bg-cover bg-center overflow-hidden">

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-7xl font-bold text-white text-shadow-black text-center pt-40 drop-shadow-lg text-shadow-lg">
          Ммм вы будете мои <br />
          валентином любимоти тоти? <br />
          (потыкай сначала нет)
        </h1>

        <div className="flex items-center justify-center gap-8 mt-20 flex-wrap">
          <button
            onClick={handleYesClick}
            style={{ transform: `scale(${yesScale})` }}
            className="
              bg-gradient-to-br from-pink-400 via-pink-500 to-pink-700
              shadow-2xl
              text-white
              font-bold
              py-4 px-10
              rounded-3xl
              hover:scale-110
              hover:brightness-110
              active:scale-95
              transition-all duration-300
            "
          >
            <span className="text-2xl md:text-4xl">ОЧЕНЬ ДЯЯЯ 💕</span>
          </button>

          <button
            onClick={handleNoClick}
            style={{ transform: `translateX(${noOffset}px) scale(${noScale})` }}
            className="
              bg-gray-600/80
              text-white
              font-bold
              py-4 px-8
              rounded-2xl
              hover:bg-gray-700
              transition-all duration-300
            "
          >
            <span className="text-2xl md:text-4xl">Нет</span>
          </button>
        </div>

        {answer === "yes" && (
          <div className="flex flex-col items-center mt-16 gap-8 animate-fadeIn">
            <p className="text-5xl md:text-6xl text-white font-bold animate-pulse">
              💕💕💕💕💕
            </p>
            <p className="text-s md:text-s text-black font-bold animate-pulse drop-shadow-lg text-shadow-lg">
              Так люблю тебя тотика ты не представляешь, сильно сильно малыш любимый мой счастлив с<br></br> тобой безумно, ты мое солнышко и радость жизни, я так благодарен судьбе что ты у меня есть,<br></br> я тебя обожаю и хочу всегда быть рядом с тобой, ты мой единственный и неповторимый, я тебя люблю до луны и обратно!
            </p>
            <div className="absolute top-10 left-10 animate-bounce text-4xl">
              💗
            </div>
            <div className="absolute top-32 right-16 animate-bounce text-5xl delay-200">
              💘
            </div>

            <img
              src="https://media1.tenor.com/m/Yp0KOBZZ9RYAAAAd/%D0%BA%D0%BE%D1%82-%D0%BF%D0%BE%D1%86%D0%B5%D0%BB%D1%83%D0%B9.gif"
              alt="кот поцелуй"
              className="w-72 md:w-96 rounded-2xl shadow-2xl"
            />
          </div>
        )}

        {answer === "no" && (
          <p className="text-4xl md:text-6xl font-bold text-white mt-16 drop-shadow-xl">
            {phrases[Math.floor(Math.random() * phrases.length)]}
          </p>
        )}
      </div>

      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
