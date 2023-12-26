import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetaliiProduse = () => {
  const { productid } = useParams();

  const [productdata, productdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3002/produse/" + productid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        productdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Adauga Produs</h2>
          </div>
          <div className="card-body"></div>

          {productdata && (
            <div>
              <h2>
                Nume produs : <b>{productdata.name}</b> ({productdata.id})
              </h2>
              <h3>Detalii produs</h3>
              <h5>Categorie : {productdata.category}</h5>
              <h5>Pret : {productdata.price}</h5>

              <Link className="btn btn-danger" to="/lista/produse">
                Inapoi
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetaliiProduse;
