import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditProduse = () => {
  const { productid } = useParams();

  useEffect(() => {
    fetch("http://localhost:3002/produse/" + productid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        pricechange(resp.price);
        categorychange(resp.category);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [price, pricechange] = useState("");
  const [category, categorychange] = useState("");
  const [img, imgchange] = useState("");
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const productdata = { id, name, price, category, img };

    fetch("http://localhost:3002/produse/" + productid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productdata),
    })
      .then((res) => {
        alert("Produs salvat cu succes.");
        navigate("/lista/produse");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Editeaza Produse</h2>
              </div>
              <div className="card-body">
                <div className="row">
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
                      <label>Nume</label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Catgeorie</label>
                      <input
                        value={category}
                        onChange={(e) => categorychange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        value={price}
                        onChange={(e) => pricechange(e.target.value)}
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
                    <div
                      className="form-group"
                      style={{
                        marginTop: "5px",
                      }}
                    >
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduse;
