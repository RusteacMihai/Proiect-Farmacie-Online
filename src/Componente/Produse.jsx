import React, { useEffect, useState } from "react";

import CosCumparaturi from "../Common/CosCumparaturi/CosCumparaturi";
import { CardsContainer, Title } from "./Produse.style";
import Search from "./search";

import Footer from "../Common/Footer";
import NavBar from "../Common/NavBar";
import { SubNavBar } from "../Common/SubNavBar/SubNavBar";
import CardProduse from "./CardProduse";

const Produse = () => {
  const [produse, setProduse] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  useEffect(() => {
    fetch(`http://localhost:3002/produse`)
      .then((response) => response.json())
      .then((produse) => {
        setProduse(produse);
        setSearchResults(produse);
      });
  }, []);

  return (
    <>
      <NavBar isGuest={true} />
      <SubNavBar />
      <Search
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        produse={produse}
      ></Search>
      <Title>Toate Produsele</Title>

      <CardsContainer>
        {searchResults.map((product) => (
          <CardProduse key={product.id} product={product} />
        ))}
      </CardsContainer>

      <Footer />
    </>
  );
};

export default Produse;
