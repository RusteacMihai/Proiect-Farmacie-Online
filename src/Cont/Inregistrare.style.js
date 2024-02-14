import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  gap: 20px;
  margin-top: 40px;
  height: 100vh;

  width: 500px;

 
  @media only screen and (min-width:1025px) and (max-width: 3000px) {

}

  @media only screen and (min-width: 872px) and (max-width: 1024px) {
    height: 130vh;
  }

  @media only screen and (min-width: 601px) and (max-width: 872px) {
    margin-top: 40px;
    width: 400px;
height: 140vh;
    gap: 10px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 40px;
    width: 250px;
height: 90vh;
    gap: 10px;
  }`

export const Input = styled.input`
  background: rgb(6, 244, 30);
  border-radius: 6px;
  border-color: black;
  border-style: solid;
  &:active {
    border-color: #0dcaf0;
    border-style: ridge;
    border-width: 3px;
  }
`;
