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
        <Route
          path="/matilda-sutherland-musician-biography"
          element={<Biography />}
        />
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
