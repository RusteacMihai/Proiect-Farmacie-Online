import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./Context/shop-context";
import CardProduse from "../../Componente/CardProduse";
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../CosCumparaturi/CosCumparaturiStyle.css";

export default function CosCumparaturi() {
  const { cartItems, produse, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const [produseInCos, setProduseInCos] = useState([]);
  useEffect(() => {}, [produseInCos]);

  useEffect(() => {
    if (cartItems) {
      const updatedProduseInCos = Object.keys(cartItems).map((productId) => {
        const quantity = cartItems[productId];
        const product = produse.find((p) => p.id === Number(productId));

        if (product) {
          return {
            id: product.id,
            name: product.name || "Nume inexistent",
            img: product.img,
            price: product.price,
            quantity,
          };
        } else {
          return {
            id: productId,
            name: "Produs inexistent",
            quantity,
          };
        }
      });

      setProduseInCos(updatedProduseInCos);
    }
  }, [produse, cartItems]);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <>
      <NavBar isGuest={true} />
      <div className="containerCos">
        <div className="ContainerPrimireProduse">
          <h1 className="TitluCos">Coșul de cumpărături</h1>
        </div>

        {produseInCos.length === 0 ? (
          <p className="Paragraf">Cosul de cumpărături este gol.</p>
        ) : (
          produseInCos.map((product) => (
            <div key={product.id} className="ProduseInCos">
              <CardProduse product={product} />
            </div>
          ))
        )}
        <p className="ParagrafAmount"> Subtotal: {totalAmount} Lei </p>
        <div className="Buttons">
          <Link to="/componente" style={{ flex: 1 }}>
            <Button className="ButonContinuaCumparaturile" variant="dark">
              Continua Cumparaturile
            </Button>
          </Link>
          <Link
            to={{ pathname: "/comanda", state: { produseInCos, totalAmount } }}
            style={{ flex: 1 }}
          >
            <Button className="ButonComanda" variant="dark">
              Comanda
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
