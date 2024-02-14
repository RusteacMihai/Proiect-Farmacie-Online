import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";

import MainContainerGuest from "./Guest/HomePageGuest";
import MainContainerUser from "./User/HomePageUser";
import Inregistrare from "./Cont/Inregistrare";

import CardProdus from "./Componente/Produse";
import CategoryProduse from "./Componente/categoryProduse";

import { Logare } from "./Cont/Logare";
import Contact from "./Componente/Contact";
import CardProduse from "./Componente/CardProduse";
import DetaliiProduse from "./Componente/DetaliiProduse";
import ListaProduse from "./Admin/AddDelete/ListaProduse";
import AddProduse from "./Admin/AddDelete/AddProduse";
import EditProduse from "./Admin/AddDelete/EditProduse";
import Admin from "./Admin/AdminPage";
import CosCumparaturi from "./Common/CosCumparaturi/CosCumparaturi";
import { ShopContextProvider } from "./Common/CosCumparaturi/Context/shop-context";
import Produse from "./Componente/Produse";
import ForumularComanda from "./Componente/FormularComanda";


function App() {
  const [isGuest, setIsGuest] = React.useState(true);
  const [isUser, setIsUser] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsGuest(path.startsWith("/guest"));
    setIsUser(path.startsWith("/user"));
    setIsAdmin(path.startsWith("/admin"));
    navigate(path);
  };
  
  return (
    <div>
      <ShopContextProvider produse={Produse}>
        <Routes >
        <Route path="/Proiect-Farmacie-Online/guest" element={<MainContainerGuest />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/user/*" element={<MainContainerUser />} />

          <Route path="/cont" element={<Inregistrare />} />
          <Route path="/componente" element={<CardProdus />} />
          <Route path="/produse/:category" element={<CategoryProduse />} />
          <Route path="/pageContact" element={<Contact />} />
          <Route path="/logare" element={<Logare />} />
          <Route path="/logo" element={<MainContainerGuest />} />
          <Route path="/produse/:id" element={<DetaliiProduse />} />
          <Route path="/cardProduse" element={<CardProduse />} />
          <Route path="/lista/produse" element={<ListaProduse />}></Route>
          <Route path="/cart" element={<CosCumparaturi />} />
          <Route path="/comanda" element={<ForumularComanda />} />

          <Route path="/adauga/produse" element={<AddProduse />}></Route>

          <Route
            path="/produse/detalii/:productid"
            element={<DetaliiProduse />}
          ></Route>
          <Route
            path="/produse/edit/:productid"
            element={<EditProduse />}
          ></Route>

          <Route path="/Proiect-Farmacie-Online" element={<MainContainerGuest />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
