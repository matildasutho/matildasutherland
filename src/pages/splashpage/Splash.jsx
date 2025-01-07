import React, { useState, useEffect } from "react";
import { fetchData } from "../../utils/fetchContentful";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import "./Splash.css";

const Splash = () => {
  const [splash, setSplash] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchSplash = async () => {
      try {
        const data = await fetchData();
        console.log("Fetched splash data:", data.splashImageCollection.items);
        setSplash(data.splashImageCollection.items);
      } catch (error) {
        console.error("Error fetching splash:", error);
      }
    };

    fetchSplash();
  }, []);

  const splashImage = splash.length > 0 ? splash[0].splashMedia.url : "";

  return (
    <div
      className="splash-wrapper"
      style={{ backgroundImage: `url(${splashImage})` }}
    >
      <div
        className={`ms-title ${isHovered || isMenuOpen ? "centered" : ""}`}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        // onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span>
          <h1>matilda sutherland</h1>
        </span>
        <span>
          <h1>
            new single <em>heat stroke</em> out january 31st
          </h1>
        </span>
      </div>
      {/* <Menu isOpen={isMenuOpen} /> */}
      <Footer />
    </div>
  );
};

export default Splash;
