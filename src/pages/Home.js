import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/logo.png';

function Home() {
  return (
    <CenterPage>
      <Logo src={LogoImg} />
      <Buttons>
        <Link to="/new-exam">
          <Button>Nova Prova</Button>
        </Link>
        <Link to="/list-exams">
          <Button>Visualizar Provas</Button>
        </Link>
      </Buttons>
    </CenterPage>
  );
}

export default Home;

const CenterPage = styled.section`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 60vw;
  max-width: 600px;
  margin-bottom: 50px;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  width: 60vw;
  max-width: 600px;
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
