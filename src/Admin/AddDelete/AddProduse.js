import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../AddDelete/AddProduse.style.css";
const AddProduse = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [category, categorychange] = useState("");
  const [price, pricechange] = useState("");
  const [img, imgchange] = useState("");
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const productsdata = { name, category, price, img };

    fetch("http://localhost:3002/produse", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productsdata),
    })
      .then((res) => {
        alert("Produs salvat cu succes!");
        navigate("/lista/produse");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6 col-md-8 col-sm-10">
          <form className="containerAddProduse" onSubmit={handlesubmit}>
            <div className="cardAddProduse" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Adauga Produs</h2>
              </div>
              <div className="card-bodyAddProduse">
                <div className="row2">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length == 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Categorie</label>
                      <input
                        value={category}
                        onChange={(e) => categorychange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Imagine</label>
                      <input
                        value={img}
                        onChange={(e) => imgchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Pret</label>
                      <input
                        value={price}
                        onChange={(e) => pricechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="ButoaneAddProduse">
                    <button className="btn btn-success" type="submit">
                      Salveaza
                    </button>
                    <Link to="/lista/produse" className="btn btn-danger">
                      Inapoi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduse;
