import "./App.css";
import Layout from "./Playfinity/NavBar/layout";
import Cube from "./Playfinity/DICE_RUMBLE/main";
import Body from "./Playfinity/NavBar/Body/body";
import About from "./Playfinity/NavBar/About/about";
import { TikTacToe } from "./Playfinity/TIKTACTOE/main";
import { BounceBall } from "./Playfinity/Bounce_Ball/main";
import MEMORYBOOSTER from "./Playfinity/MEMORY_BOOSTER/main";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/PlayFinity/" element={<Layout />}>
      <Route index element={<Body />} />
      <Route path="/PlayFinity/About" element={<About />} />
      <Route path="/PlayFinity/MEMORYBOOSTER" element={<MEMORYBOOSTER />} />
      <Route path="/PlayFinity/DICERUMBLE" element={<Cube />} />
      <Route path="/PlayFinity/TikTacToe" element={<TikTacToe />} />
      <Route path="/PlayFinity/BounceBall" element={<BounceBall />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
