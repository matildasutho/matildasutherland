import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Splash />} />
=======
        <Route path="/" element={<Home />} />
>>>>>>> dev
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
