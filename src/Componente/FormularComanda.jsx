import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import NavBar from "../Common/NavBar";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardProduse from "./CardProduse";
import { ShopContext } from "../Common/CosCumparaturi/Context/shop-context";
import "../Componente/FormularComanda.style.css"

function TrimiteComanda( showButtons = true ) {
  const [nume, setnume] = useState("");
  const [prenume, setprenume] = useState("");
  const [email, setemail] = useState("");
  const [adresa, setAdresa] = useState("");
  const [oras, setOras] = useState("");
  const [tara, setTara] = useState("");
  const [judet, setJudet] = useState("")
  const [telefon, setTelefon] = useState("");
  const [codPostal, setcodPostal] = useState("");

  const { cartItems, produse,getTotalCartAmount,} = useContext(ShopContext);

  const [produseInCos, setProduseInCos] = useState([]);

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

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

  

  const handlesubmit = (e) => {
    e.preventDefault();

 
  if (
    !nume ||
    !prenume ||
    !email ||
    !adresa ||
    !oras ||
    !tara ||
    !telefon ||
    !judet ||
    !codPostal ||
    produseInCos.length === 0
  ) {
    alert("Completați toate câmpurile înainte de a trimite comanda.");
    return;
  }

    let stocareComanda = {
      nume,
      prenume,
      email,
      adresa,
      oras,
      tara,
      telefon,
      judet,
      codPostal,
    produseSelectate: produseInCos,
    };
    console.log(stocareComanda);

    fetch("http://localhost:3002/comenzi", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(stocareComanda),
    })
      .then((res) => {
        alert("Felicitari, comanda a fost plasata cu succes!");
        navigate("/guest");
      })
      .catch((err) => {
        alert(" Comanda nu a fost plasata:" + err.message);
      });
  };

  const salveazaNume = (value) => {
    let lowercaseRegex = /^[a-z A-Z 0-9]+$/;
    if (value.length < 3 || value.length >= 10) {
      alert("Numele trebuie să contina între 3 și 9 caractere.");
    } else if (!lowercaseRegex.test(value)) {
      alert("Introduceti Numele corect.");
    } else {
      setnume(value);
    }
  };


  const salveazaPrenume = (value) => {
    let lowercaseRegex = /^[a-z A-Z 0-9]+$/;
    if (value.length < 3 || value.length >= 10) {
      alert("Prenumele trebuie să contina între 3 și 9 caractere.");
    } else if (!lowercaseRegex.test(value)) {
      alert("Introduceti Prenumele corect.");
    } else {
      setprenume(value);
    }
  };

  const salveazaEmail = (value) => {
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (value.length < 3 || value.length >= 30) {
      alert("Emailul trebuie să contina între 3 și 30 caractere.");
    } else if (!emailRegex.test(value)) {
      alert("Emailul trebuie să contina doar caractere minuscule.");
    } else {
      setemail(value);
    }
  };

  const salveazaAdresa = (value) => {
    let lowercaseRegex = /^[a-z A-Z 0-9]+$/;
    if (value.length < 10 || value.length >= 30) {
      alert("Adresa trebuie să contina între 10 și 30 caractere.");
    } else if (!lowercaseRegex.test(value)) {
      alert("Introduceti Adresa Corect.");
    } else {
      setAdresa(value);
    }
  };

  const salveazaTelefon = (value) => {
    let lowercaseRegex = /^[a-z A-Z 0-9]+$/;
    if (value.length < 7 || value.length >= 14) {
      alert("Telefonul trebuie sa contina maxim 14 caractere");
    } else if (!lowercaseRegex.test(value)) {
      alert("Introduceti numarul de telefon corect.");
    } else {
      setTelefon(value);
    }
  };

  
  const salveazaOrasul = (value) => {
    let lowercaseRegex = /^[A-Za-z0-9._%+-]+$/;
    if (value.length < 3 || value.length >= 14) {
      alert("Orasul trebuie să contina între 3 și 15 caractere.");
    } else if (!lowercaseRegex.test(value)) {
      alert("Introduceti Orasul corect");
    } else {
      setOras(value);
    }
  };
  const salveazaJudetul = (value) => {
    let lowercaseRegex = /^[A-Za-z0-9._%+-]+$/;
    if (value.length < 3 || value.length >= 14) {
      alert("Orasul trebuie să contina între 3 și 15 caractere.");
    } else if (!lowercaseRegex.test(value)) {
      alert("Introduceti Orasul corect");
    } else {
      setJudet(value);
    }
  };


  
  const salveazaTara = (value) => {
    let lowercaseRegex = /^[A-Za-z0-9._%+-]+$/;
    if (value.length <5 || value.length >= 15) {
      alert("Orasul trebuie să contina între 5 și 15 caractere.");
    } else if (!lowercaseRegex.test(value)) {
      alert("Introduceti Tara corect");
    } else {
      setTara(value);
    }
  };

  const salveazaCodPostal = (value) => {
    let lowercaseRegex = /^[A-Za-z0-9._%+-]+$/;
    if (value.length < 3 || value.length >= 10) {
      alert("Codul Posta trebuie să contina între 3 și 10 caractere.");
    } else if (!lowercaseRegex.test(value)) {
      alert("Introduceti Codul Postal corect");
    } else {
      setcodPostal(value);
    }
  };


  return (
    <>
      <NavBar isGuest={true} />
      
      <div className="Container-formular"
    
      >
        <Form className="Container-label">
         
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Nume</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduceti Numele"
                onBlur={(e) => salveazaNume(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Prenume</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduceti Prenumele"
                onBlur={(e) => salveazaPrenume(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Introduceti email" 
               onBlur={(e) => salveazaEmail(e.target.value)}/>
            </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Adresa</Form.Label>
            <Form.Control placeholder="Introduceti Adresa" 
            onBlur={(e) => salveazaAdresa(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Telefon</Form.Label>
            <Form.Control placeholder="Introduceti nr de tel"
            onBlur={(e) => salveazaTelefon(e.target.value)}/>
          </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Orasul</Form.Label>
              <Form.Control 
              onBlur={(e) => salveazaOrasul(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formJudet">
              <Form.Label>Judetul</Form.Label>
              <Form.Control 
              onBlur={(e) => salveazaJudetul(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Tara</Form.Label>
              <Form.Control 
              onBlur={(e) => salveazaTara(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Cod postal</Form.Label>
              <Form.Control  onBlur={(e) => salveazaCodPostal(e.target.value)}/>
            </Form.Group>
          </Row>

          
<div className="Container-card">
          {produseInCos.length > 0 && (
  <div style={{ marginTop: "20px" }}>
    <h2>Produsele selectate:</h2>
    <Row>
      {produseInCos.map((product) => (
        <Col key={product.id} md={4} style={{ marginBottom: "60px" }}>
          <CardProduse product={product}  showButtons={false}/>
        </Col>
      ))}
    </Row>
  </div>

)}
  </div>

<h3>Plata se face doar la Livrare</h3>

<p className="Amount" style={{
              fontSize:"30px"
             }}> Subtotal: { totalAmount} Lei </p>


          <Button variant="dark"  style={{marginBottom:"10px"}} onClick={handlesubmit} >Trimite Comanda</Button>
         
        </Form>
      </div>
    </>
  );
}

export default TrimiteComanda;
