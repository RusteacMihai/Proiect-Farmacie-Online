
import React, { useState } from "react";
import Footer from "../Common/Footer";
import DarkVariantExample from "../Componente/Carousel";

import NavBar from "../Common/NavBar";



const MainContainerUser = (isGuest,isUser,isAdmin) => {
  
  return (
    <>
      <NavBar isGuest={false } isUser={true} isAdmin={false} />

      <DarkVariantExample/>
      <Footer />
    </>
  );
};

export default MainContainerUser;
