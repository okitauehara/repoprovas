import { Link } from 'react-router-dom';
import LogoImg from '../assets/logo.png';
import * as S from '../styles/DefaultPageStyle';

function Home() {
  return (
    <S.CenterPage>
      <S.Logo src={LogoImg} />
      <Link to="/new-exam" style={{ width: '100%' }}>
        <S.Button>Novo Exame</S.Button>
      </Link>
      <S.Buttons>
        <Link to="/by-subject">
          <S.Button>Listar por disciplina</S.Button>
        </Link>
        <Link to="/by-professor">
          <S.Button>Listar por professor</S.Button>
        </Link>
      </S.Buttons>
    </S.CenterPage>
  );
}

export default Home;
