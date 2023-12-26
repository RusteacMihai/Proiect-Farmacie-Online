import NavBar from "../Common/NavBar";
import React from "react";
import Footer from "../Common/Footer";

import DarkVariantExample from "../Componente/Carousel";


const MainContainerGuest = (isGuest ,isUser,isAdmin) => {
  return (
    
    <>
      <NavBar isGuest={true} isAdmin={false} isUser={false} />

<DarkVariantExample />



      <Footer />
    
      </>
  );
};

export default MainContainerGuest;
