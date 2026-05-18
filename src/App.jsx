import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Splash from "./pages/splashpage/Splash";
import Biography from "./pages/biography/Biography";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
    </>
  );
}

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWithRouter;
