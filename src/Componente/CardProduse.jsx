import React, { useContext, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import "./CardProduse.css";
import DetaliiProduse from "./DetaliiProduse";
import { ShopContext } from "../Common/CosCumparaturi/Context/shop-context";

export default function CardProduse({ product ,showButtons = true}) {
  const [showDetails, setShowDetails] = useState(false);
  const { addToCart, removeFromCart, updateCartItemCount, cartItems } = useContext(ShopContext);

  const handleClose = () => {
    setShowDetails(false);
  };

  const quantityInCart = cartItems[product.id] || 0;

  const handleAddToCart = () => {
    addToCart(product.id);
    // Închide detaliile produsului după adăugarea în coș
    setShowDetails(false);
  };

  return (
    <Card className="card">
      <Card.Img variant="top" src={product.img} className="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{product.name}</Card.Title>
        <Card.Text className="card-text">Pret: {product.price} Lei</Card.Text>
        {quantityInCart === 0 && showButtons && (
          <div className="buttons" >
            <Button
              variant="primary"
              className="add-to-cart-button"
              onClick={handleAddToCart}
            >
              Adauga in cos <Badge variant="light">{quantityInCart}</Badge>
            </Button>
            <Button className=" details-button" variant="info" onClick={() => setShowDetails(true)}>
              Detalii
            </Button>
          </div>
        )}
        {quantityInCart > 0 && showButtons &&(
          <div className="countHandler" >
            <Button className="ButonPlus" variant="outline-success" onClick={() => removeFromCart(product.id)}> - </Button>
            <input className="Input"
              value={quantityInCart}
              onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)} style={{ width: "60px" }}
            />
            <Button className="ButonMinus" variant="outline-success" onClick={() => addToCart(product.id)}> + </Button>
          </div>
        )}
      </Card.Body>
      {quantityInCart > 0 && showButtons && (
        <div style={{ textAlign: "center", marginTop: "10px" ,marginBottom:"5px"}}>
          <Button className="ButonElimina" variant="danger" onClick={() => removeFromCart(product.id)}>
            Elimină
          </Button>
        </div>
      )}
      <Modal show={showDetails} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalii produs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DetaliiProduse product={product} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Închide
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}