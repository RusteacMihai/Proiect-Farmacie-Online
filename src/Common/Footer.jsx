import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function isAtPageBottom() {
      return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    function handleScroll() {
      if (isAtPageBottom()) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`Footer ${showFooter ? "show" : ""}`}>
      <img
        className="Logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvizJHojy9-YwVogdPeSkSmsuVhUTodoL0mtH65To91lzltj7i_q8iTyvr76YLRIxpVtM&usqp=CAU"
        alt="Logo"
      />
      <p className="ParagrafFooter">
        &copy; 2023 Farmacia FaviSun. Toate drepturile rezervate.
      </p>
    </footer>
  );
};

export default Footer;
