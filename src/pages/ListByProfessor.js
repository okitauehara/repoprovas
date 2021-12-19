import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { getProfessors } from '../services/API';
import { DefaultContent, CenterPage } from '../styles/DefaultPageStyle';

function ListByProfessor() {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    getProfessors()
      .then((res) => setProfessors(res.data));
  }, []);

  return (
    <CenterPage>
      <DefaultContent />
      <PageTitle>Professores</PageTitle>
      <Professors>
        {professors.map((professor) => (
          <>
            <Name data-tip={`Provas: ${professor.exams.length}`}>{professor.professor}</Name>
            <ReactTooltip
              place="right"
              type="dark"
              backgroundColor="#181820"
              textColor="#FFEAA4"
              effect="solid"
            />
          </>
        ))}
      </Professors>
    </CenterPage>
  );
}

export default ListByProfessor;

const PageTitle = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: #FC449C;
  margin-top: 30px;
  text-decoration: underline;
`;

const Professors = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Name = styled.p`
  font-size: 16px;
  color: #ffffff;
  line-height: 2;

  &:hover{
    cursor: pointer;
    font-weight: 700;
  }
`;
