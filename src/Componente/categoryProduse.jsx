
import { useParams } from "react-router-dom";
import Footer from "../Common/Footer";
import NavBar from "../Common/NavBar";
import { SubNavBar } from "../Common/SubNavBar/SubNavBar";
import { useEffect, useState } from "react";
import { CardsContainer } from "./Produse.style";
import CardProduse from "./CardProduse";



export default function CategoryProduse () {
    const {category } = useParams();
    console.log(category);
    const [produse, setProduse] = useState([]);
    const [produseFiltrate, setProduseFiltrate] = useState([])

    useEffect(() => {
      fetch(`http://localhost:3002/produse`)
        .then((response) => response.json())
        .then((produse) => {
          setProduse(produse);
         
        });
    }, []);
  
    useEffect(() => {
        let prod = produse.filter(el=>el.category.includes(category))
        setProduseFiltrate(prod)
        
      }, [category,produse]);
    return(
        <>
        <NavBar isGuest={true}/>
        <SubNavBar/>
        <CardsContainer>
        {produseFiltrate?.map((product) => (
        <CardProduse  key={product.id} product={product}/>
        ))}
      </CardsContainer>
        <Footer/>
        </>
    )
}



