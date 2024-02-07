import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./NavBar.css";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

function NavBar({ isGuest, isUser, isAdmin }) {
  const [navbarActive, setNavbarActive] = useState(false);

  const [buttonsVisible, setButtonsVisible] = useState(false); 

  const handleToggle = () => {
    setNavbarActive(!navbarActive);

    setButtonsVisible(!buttonsVisible);
  };
  return (
    <div className="ContainerPrincipal">
      <div className="ContainerSecundar">
        <div className="ContainerName">
          <Link to="/logo">
            <img
              className="LogoNavBar"
              src="data:image/png;base64,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"
              alt="logo"
            />
          </Link>
          <div className="Title">
            <h2>Farmacia FaviSun</h2>
          </div>
        </div>

        <div className="ContainerButoane">
        <div className={`NavBarMobile ${navbarActive ? "active" : ""}`}>
         
            <Button style={{marginRight:"30px",marginBottom:"5px"}}  variant="link" className="toggle-button" onClick={handleToggle}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </Button>
            {buttonsVisible && (
                <div >
            {isGuest && (
              <div className="ButoaneMini">
                <Link to="/cont">
                  <Button className="ButoaneMobile" variant="link">
                    Înregistrare
                  </Button>
                </Link>
                <Link to="/logare">
                  <Button className="ButoaneMobile" variant="link">
                    Intra in cont
                  </Button>
                </Link>

                <Link to="/componente">
                  <Button className="ButoaneMobile" variant="link">
                    Produse
                  </Button>
                </Link>

                
                <Link to="/lista/produse">
                    <Button className="ButoaneMobile" variant="link">
                      Add/Delete
                    </Button>
                  </Link>

                <Link to="/pageContact">
                  <Button className="ButoaneMobile" variant="link">
                    Contact
                  </Button>
                </Link>

                <Link to="/cart">
                  <img
                    className="cart"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFpbxElBi4n0P5BnpWbLa5dxWjgf6TtBQuA&usqp=CAU"
                    alt=""
                
                  />
                </Link>
              </div>
            )}
              {isUser && (
              <div className="ButoaneMini">
                <Link to="/componente">
                  <Button className="ButoaneMobile" variant="link">
                    Produse
                  </Button>
                </Link>
                <Link to="/pageContact">
                  <Button className="ButoaneMobile" variant="link">
                    Contact
                  </Button>
                </Link>

                <Link to="/guest">
                  <Button className="ButoaneMobile" variant="link">
                    Log Out
                  </Button>
                </Link>

                <Link to="/cart">
                  <img
                    className="cart"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFpbxElBi4n0P5BnpWbLa5dxWjgf6TtBQuA&usqp=CAU"
                    alt=""
                    
                  />
                </Link>
              </div>
            )}
{isAdmin && (
              <div className="admin ButoaneMini" >
                
                  <Link to="/cont">
                    <Button className="ButoaneMobile" variant="link">
                      Înregistrare
                    </Button>
                  </Link>
                  <Link to="/logare">
                    <Button className="ButoaneMobile" variant="link">
                      Intra in cont
                    </Button>
                  </Link>

                  <Link to="/componente">
                    <Button className="ButoaneMobile" variant="link">
                      Produse
                    </Button>
                  </Link>

                  <Link to="/pageContact">
                    <Button className="ButoaneMobile" variant="link">
                      Contact
                    </Button>
                  </Link>

                  <Link to="/guest">
                    <Button className="ButoaneMobile" variant="link">
                      Log Out
                    </Button>
                  </Link>

                  <Link to="/lista/produse">
                    <Button className="ButoaneMobile" variant="link">
                      Add/Delete
                    </Button>
                  </Link>

                  <Link to="/cart">
                    <img
                      className="cart"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFpbxElBi4n0P5BnpWbLa5dxWjgf6TtBQuA&usqp=CAU"
                      alt=""
                     
                    />
                  </Link>
               
              </div>
            )}
            </div>
            )}
          </div>

          <div className="ContainerButoaneDesktop ">

            {isGuest && (
              <div className="ButoaneTabletaDesktop">
                <Link to="/cont">
                  <Button className="Butoane" variant="link">
                    Înregistrare
                  </Button>
                </Link>
                <Link to="/logare">
                  <Button className="Butoane" variant="link">
                    Intra in cont
                  </Button>
                </Link>

                <Link to="/componente">
                  <Button className="Butoane" variant="link">
                    Produse
                  </Button>
                </Link>


                <Link to="/lista/produse">
                    <Button className="Butoane" variant="link">
                      Add/Delete
                    </Button>
                  </Link>
                  
                <Link to="/pageContact">
                  <Button className="Butoane" variant="link">
                    Contact
                  </Button>
                </Link>

                <Link to="/cart">
                  <img
                    className="cart2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFpbxElBi4n0P5BnpWbLa5dxWjgf6TtBQuA&usqp=CAU"
                    alt=""
                 
                  />
                </Link>
              </div>
            )}

            {isUser && (
              <div className="ButoaneTabletaDesktop">
                <Link to="/componente">
                  <Button className="Butoane" variant="link">
                    Produse
                  </Button>
                </Link>
                <Link to="/pageContact">
                  <Button className="Butoane" variant="link">
                    Contact
                  </Button>
                </Link>

                <Link to="/guest">
                  <Button className="Butoane" variant="link">
                    Log Out
                  </Button>
                </Link>

                <Link to="/cart">
                  <img
                    className="cart2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFpbxElBi4n0P5BnpWbLa5dxWjgf6TtBQuA&usqp=CAU"
                    alt=""
                  
                  />
                </Link>
              </div>
            )}

            {isAdmin && (
              <div className="admin ButoaneTabletaDesktop">
             
                  <Link to="/cont">
                    <Button className="Butoane" variant="link">
                      Înregistrare
                    </Button>
                  </Link>
                  <Link to="/logare">
                    <Button className="Butoane" variant="link">
                      Intra in cont
                    </Button>
                  </Link>

                  <Link to="/componente">
                    <Button className="Butoane" variant="link">
                      Produse
                    </Button>
                  </Link>

                  <Link to="/pageContact">
                    <Button className="Butoane" variant="link">
                      Contact
                    </Button>
                  </Link>

                  <Link to="/guest">
                    <Button className="Butoane" variant="link">
                      Log Out
                    </Button>
                  </Link>

                  <Link to="/lista/produse">
                    <Button className="Butoane" variant="link">
                      Add/Delete
                    </Button>
                  </Link>

                  <Link to="/cart">
                    <img
                      className="cart2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFpbxElBi4n0P5BnpWbLa5dxWjgf6TtBQuA&usqp=CAU"
                      alt=""
                   
                    />
                  </Link>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
