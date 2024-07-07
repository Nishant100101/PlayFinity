import { Link } from "react-router-dom";
import BounceBall from "./ScreenShots/Bounce_Ball.png";
import TikTocToe from "./ScreenShots/Tik_Tac_Toe.jpeg";
import Dice_Rumble from "./ScreenShots/Dice_Rumble.jpeg";
import MemoryBooster from "./ScreenShots/Memory_Booster.jpeg";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-sky-100 via-purple-200 to-blue-300 mx-auto px-4 py-8">
      {/* INTRO */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        Welcome to PlayFinity!
      </h1>
      <p className="text-lg mb-6 font-medium">
        PlayFinity is your ultimate destination for a diverse selection of
        captivating games that will keep you entertained and engaged for hours.
        PlayFinity offers a wide range of interactive and exciting games
        designed to challenge your skills, boost your memory, and provide you
        with a thrilling gaming experience.
      </p>
      {/* Tic-Tac-Toe */}
      <div className="h-fit hover:shadow-sm mb-2 hover:shadow-current shadow-inner shadow-current rounded-md overflow-auto p-5">
        <h2 className="text-2xl font-bold mb-2">Tic-Tac-Toe</h2>
        <img
          className="rounded-lg h-28 w-48 float-left border-black border-2 mr-4"
          src={TikTocToe}
          alt="Tic-Tac-Toe"
        />
        <p className="text-lg font-medium">
          Challenge your strategic thinking with the timeless classic
          "Tic-Tac-Toe." Play against our smart AI system and experience the
          thrill of outmaneuvering your opponent to claim victory. The
          user-friendly interface, history tracker, and undo button add to the
          excitement of the game.
        </p>
      </div>

      {/* Memory Booster */}
      <div className="h-fit hover:shadow-sm mb-2 hover:shadow-current shadow-inner shadow-current rounded-md overflow-auto p-5">
        <h2 className="text-2xl font-bold mb-2 text-right">Memory Booster</h2>
        <img
          className="mb-4 float-right w-48 h-28 rounded-lg border-black border-2 ml-4"
          src={MemoryBooster}
          alt="Memory Booster"
        />
        <p className="text-lg font-medium">
          Test and enhance your memory with our captivating "Memory Booster"
          game. Flip the cards and match the pairs. The game contains many
          levels, keeping you engaged and helping you boost your memory power.
        </p>
      </div>

      {/* Bounce Ball Intro */}
      <div className="h-fit hover:shadow-sm mb-2 hover:shadow-current shadow-inner shadow-current rounded-md overflow-auto p-5">
        <h2 className="text-2xl font-bold mb-2">Bounce Ball</h2>
        <img
          className="rounded-lg h-28 w-48 float-left border-black border-2 mr-4"
          src={BounceBall}
          alt="Bounce Ball"
        />
        <p className="text-lg font-medium">
          Challenge yourself with our heart-pounding "Bounce Ball" game. Take
          control of the bouncing ball and navigate it through the obstacles.
          Your mission is to prevent the ball from colliding with the walls and
          keep it bouncing for as long as possible.
        </p>
      </div>

      {/* Dice Rumble */}
      <div className="h-fit hover:shadow-sm mb-2 hover:shadow-current shadow-inner shadow-current rounded-md overflow-auto p-5">
        <h2 className="text-2xl font-bold mb-2 text-right">Dice Rumble</h2>
        <img
          className="mb-4 float-right w-48 h-28 rounded-lg border-black border-2 ml-4"
          src={Dice_Rumble}
          alt="Dice Rumble"
        />
        <p className="text-lg font-medium">
          Roll the dice and let fate decide your destiny in the exciting "Dice
          Rumble." This luck-based game will keep you on the edge of your seat
          as you anticipate the next roll. Enjoy the vibrant visuals and
          thrilling gameplay as you aim for high scores and lucky combinations.
        </p>
      </div>

      {/* Features */}
      <h2 className="text-2xl font-bold m-3">Features</h2>
      <ol className="list-decimal font-medium list-inside mb-5">
        <li className="text-base ml-8">Exciting Gameplay</li>
        <li className="text-base ml-8">User-Friendly Interface</li>
        <li className="text-base ml-8">Multiple Levels</li>
        <li className="text-base ml-8">Compete with Friends</li>
        <li className="text-base ml-8">Responsive Controls</li>
      </ol>

      {/* Instructions */}
      <h2 className="text-2xl font-bold m-2">How to Get Started</h2>
      <ol className="list-decimal font-medium list-inside">
        <li className="text-base ml-8">Go to the navbar</li>
        <li className="text-base ml-8">
          Navigate to the Games" section and choose from{" "}
          <Link
            to="/PlayFinity/BounceBall"
            className="font-semibold text-blue-900"
          >
            Bounce Ball
          </Link>
          ,{" "}
          <Link
            to="/PlayFinity/MEMORYBOOSTER"
            className="font-semibold text-blue-900"
          >
            Memory Booster
          </Link>
          ,{" "}
          <Link
            to="/PlayFinity/TikTacToe"
            className="font-semibold text-blue-900"
          >
            Tic-Tac-Toe
          </Link>
          ,{" "}
          <Link
            to="/PlayFinity/DICERUMBLE"
            className="font-semibold text-blue-900"
          >
            Dice Rumble
          </Link>
        </li>
        <li className="text-base ml-8">
          Read the instructions for each game and start playing!
        </li>
        <li className="text-base ml-8">
          Keep practicing, improving your skills, and setting new records.
        </li>
      </ol>
    </div>
  );
};

export default About;
