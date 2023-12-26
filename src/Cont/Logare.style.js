import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  gap: 20px;
  margin-top: 40px;
  height: 83vh;

  width: 500px;

  @media only screen and (min-width: 601px) and (max-width: 872px) {
    margin-top: 40px;
    width: 400px;

    gap: 10px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 40px;
    width: 250px;

    gap: 10px;
  }
`;
