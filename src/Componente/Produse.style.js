import styled from "styled-components";

export const Category = styled.div`
  font-weight: 700;
  margin-bottom: 10px;
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  padding: 20px;
  gap: 20px;
  width: 100%;
  background-image: url("https://cdn.pixabay.com/photo/2016/11/18/16/51/leaves-1835780_640.jpg");

  @media only screen and (min-width: 601px) and (max-width: 872px) {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    gap: 10px;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 3fr);
    gap: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  font-size: 50px;
  font-weight: 700;

  @media only screen and (min-width: 601px) and (max-width: 872px) {
    display: flex;
    justify-content: center;
    margin: 10px;
    font-size: 40px;
    font-weight: 700;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin: 10px;
    font-size: 30px;
    font-weight: 700;
  }
`;
