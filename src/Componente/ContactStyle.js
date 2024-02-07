import styled from "styled-components";

export const ContainerPrincipal = styled.div`


  background-image: url("https://cdn.pixabay.com/photo/2016/11/18/16/51/leaves-1835780_640.jpg");
  width: 100%;
  border-bottom: solid 4px;
  border-top: solid 4px;
  border-color: green;
`;

export const ContainerAdresa = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 20px;

`;

export const ContainerTelefon = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 20px;
`;

export const ContainerEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 20px;
`
export const ContainerProgram = styled.div`
 display: flex;
  flex-direction: column;
  align-content: center;
  margin-left:20px;

`

export const Contacte = styled.h1`
margin:10px;
 color: white;
`

export const Img = styled.img`
border-radius: 40px;
width: 40px;
`

export const Titlu = styled.h3`
  color: white;
@media only screen and (min-width: 601px) and (max-width: 872px) {
font-size: 25px;
}

@media screen and (max-width: 600px) {
  font-size: 25px;
}


`

export const Detalii = styled.h5`
  color: white;
@media only screen and (min-width: 601px) and (max-width: 872px) {
font-size: 21px;
}

@media screen and (max-width: 600px) {
  font-size: 18px;
}
`