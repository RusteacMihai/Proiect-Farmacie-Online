import Footer from "../Common/Footer";
import NavBar from "../Common/NavBar";
import LogoTelefon from "../Media/Icons/Logo Tel 2.jpeg";
import LogoEmail from "../Media/Icons/Logo Email.png";
import LogoAdresa from "../Media/Icons/Logo locatie.jpeg";
import LogoProgram2 from "../Media/Icons/LogoProgram2.jpg";
import {
  Contacte,
  ContainerAdresa,
  ContainerEmail,
  ContainerPrincipal,
  ContainerProgram,
  ContainerTelefon,
  Detalii,
  Img,
  Titlu,
} from "./ContactStyle";

export default function Contact() {
  return (
    <>
      <NavBar isGuest={true} />

      <ContainerPrincipal>
        <Contacte> Contact </Contacte>
        <ContainerAdresa>
          <Titlu>Adresa</Titlu>
          <a href="https://maps.app.goo.gl/S9vQ4GARnTKUmS2cA">
            <Img
              src={LogoAdresa}
              
            />
          </a>

          <Detalii>Strada: Zorilor ,Nr: 29 ,Oras : Timisoara</Detalii>
        </ContainerAdresa>
        <ContainerTelefon>
          {" "}
          <br />
          <Titlu>Telefon </Titlu>
          <a href="tel:+40728323777">
            <Img
              src={LogoTelefon}
              style={{
                width: "50px",
              }}
            />
          </a>
          <Detalii> +40728323777</Detalii>
        </ContainerTelefon>{" "}
        <br />
        <ContainerEmail>
          <Titlu>Email</Titlu>
          <a href="mailto:FarmaciaFaviSun@gmail.com">
            <Img
              src={LogoEmail}
              style={{
                width: "50px",
              }}
            />
          </a>
          <br />
          <Detalii> FarmaciaFaviSun@Gmail.com</Detalii>
        </ContainerEmail>
        <ContainerProgram>
          <Img
            src={LogoProgram2}
            style={{
              width: "50px",
            }}
          
          />

          <Titlu>
            Program: <br />
          </Titlu>
          <br />
          <Detalii>
            Luni - Vineri : 07 - 22 <br />
            <br />
            Sambata : 08 - 19 <br />
            <br />
            Duminica : Inchis
          </Detalii>
        </ContainerProgram>
      </ContainerPrincipal>

      <Footer />
    </>
  );
}
