import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/logo.png';

function DefaultContent() {
  return (
    <>
      <Link to="/">
        <Logo src={LogoImg} />
      </Link>
      <Link to="/new-exam" style={{ width: '100%' }}>
        <Button>Novo Exame</Button>
      </Link>
      <Buttons>
        <Link to="/by-subject">
          <Button>Por disciplina</Button>
        </Link>
        <Link to="/by-professor">
          <Button>Por professor</Button>
        </Link>
      </Buttons>
    </>
  );
}

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
  DefaultContent,
  CenterPage,
  Logo,
  Buttons,
  Button,
};
