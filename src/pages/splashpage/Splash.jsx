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
    <>
      <div className="splash-image">
        <img
          src={splashImage}
          alt="Matilda Sutherland photography by Wednesday Sutherland, 2024"
        />
      </div>

      <div className="splash-wrapper">
        <div
          className={`ms-title ${isHovered || isMenuOpen ? "centered" : ""}`}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          // onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* <span>
            <h1>matilda sutherland</h1>
          
            <h1>
              stream <em>heat stroke</em> now
            </h1>
          </span> */}
        </div>
        {/* <Menu isOpen={isMenuOpen} /> */}
        <Footer />
      </div>
    </>
  );
};

export default Splash;
