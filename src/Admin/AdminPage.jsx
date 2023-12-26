
import React from "react";
import Footer from "../Common/Footer";
import DarkVariantExample from "../Componente/Carousel";

import NavBar from "../Common/NavBar";




const Admin = (isGuest,isUser,isAdmin) => {
  return (
    <>
      <NavBar isGuest={false} isUser={false} isAdmin={true}  />
    
      <DarkVariantExample/>
      <Footer />
    </>
  );
};

export default Admin;