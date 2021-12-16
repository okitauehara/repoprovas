import styled from 'styled-components';

const CenterPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 60vw;
  max-width: 600px;
  margin: 50px 0px;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  width: 60vw;
  max-width: 600px;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #FC449C;
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
`;

export {
  CenterPage,
  Logo,
  Buttons,
  Button,
};
