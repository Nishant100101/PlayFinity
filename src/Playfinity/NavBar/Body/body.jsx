import { Link } from "react-router-dom";
import games from "../../All_COMPONENTS/Photos/games.jpeg";
import Box from "../../All_COMPONENTS/containers/box";
import BounceBall from "../../All_COMPONENTS/minversions/bounceBall";
import Memorybooster from "../../All_COMPONENTS/minversions/memorybooster";
import TicTacToe from "../../All_COMPONENTS/minversions/tictactoe";
import Dicerumble from "../../All_COMPONENTS/minversions/dicerumble";
import Play from "../../All_COMPONENTS/button/play";

export default function Body() {
  return (
    <>
      {/*   HEADING */}
      <div className="flex h-10 justify-center py-5">
        <div className="flex h-6 justify-center">
          <div
            className="text-4xl max-md:text-xl flex flex-col justify-end text-gray-900 font-bold mr-3 border-x-teal-600 -mt-8 border-b-8 border-black border-x-4 px-4 animate-welcome"
            style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="relative -bottom-2">Playfinity</div>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="p-4 text-lg font-medium">
        <p className="mb-2">
          Welcome to PlayFinity, your ultimate destination for captivating
          games.
        </p>
        <ul className="list-disc  list-inside">
          <li>
            At PlayFinity, we aim to provide an immersive gaming experience that
            challenges your skills and delivers endless fun.
          </li>
          <li>
            Discover
            <Link
              to="/PlayFinity/BounceBall"
              className="font-semibold text-blue-900"
            >
              {" "}
              Bounce Ball
            </Link>
            , and guide your ball with flair, through a maze with care. Keep it
            bouncing high, and don`&apos;`t let it collide!
          </li>
          <li>
            With stunning visuals and responsive controls, Our games offers an
            adrenaline-pumping challenge for both casual and seasoned gamers.
          </li>
        </ul>
        <p className="mt-4">
          Explore PlayFinity and enjoy fantastic games. Embark on an
          unforgettable journey of entertainment, skill, and thrill. Start
          playing now and discover the wonders of PlayFinity!
        </p>
      </div>

      {/* Games MiniVersions */}
      <div className="flex flex-wrap justify-around flex-row items-center mb-4">
        {/* Bounce Ball */}
        <Box
          heading="Bounce Ball"
          component={<BounceBall />}
          play={<Play link="PlayFinity/BounceBall" />}
        />

        {/* Memory Booster */}
        <Box
          heading="Memory Booster"
          component={<Memorybooster />}
          play={<Play link="PlayFinity/MEMORYBOOSTER" />}
        />

        {/* Tik-Tac-Toe */}
        <Box
          heading="TIC-TAC-TOE"
          component={<TicTacToe />}
          play={<Play link="PlayFinity/TikTacToe" />}
        />

        {/*  DiceRumble */}
        <Box
          heading=" DICE RUMBLE"
          component={<Dicerumble />}
          play={<Play link="PlayFinity/DICERUMBLE" />}
        />

        {/* More to Come */}
        <Box
          component={
            <div className="select-none overflow-hidden flex h-full items-center rounded-2xl justify-center">
              <img
                className="clk overflow-hidden rounded-2xl h-full select-none"
                src={games}
                alt="games"
              />
              <div
                className="textAni select-none whitespace-nowrap overflow-hidden text-xl font-bold text-white"
                style={{ textShadow: " #ed4609fc 1px -2px 3px" }}
              >
                More Coming Soon...
              </div>
            </div>
          }
        />
      </div>
    </>
  );
}
