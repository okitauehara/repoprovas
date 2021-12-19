import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getExamsBySubject } from '../services/API';
import { DefaultContent, CenterPage } from '../styles/DefaultPageStyle';
import formatName from '../utils/formatName';
import Loading from '../utils/Loading';

function ExamBySubject() {
  const { subjectId } = useParams();
  const [categories, setCategories] = useState('');

  useEffect(async () => {
    getExamsBySubject(subjectId)
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <CenterPage>
      <DefaultContent />
      <PageTitle>{categories?.subject}</PageTitle>
      {categories ? (
        <Exams>
          <Category>P1</Category>
          {categories.p1?.length ? categories.p1?.map((category) => (
            <Exam
              href={category.url}
              target="_blank"
            >
              <Name>{formatName(category.name.name)}</Name>
              <Professor>{category.professor.professor}</Professor>
            </Exam>
          )) : 'Nenhuma prova registrada'}
          <Category>P2</Category>
          {categories.p2?.length ? categories.p2?.map((category) => (
            <Exam
              href={category.url}
              target="_blank"
            >
              <Name>{formatName(category.name.name)}</Name>
              <Professor>{category.professor.professor}</Professor>
            </Exam>
          )) : 'Nenhuma prova registrada'}
          <Category>P3</Category>
          {categories.p3?.length ? categories.p3?.map((category) => (
            <Exam
              href={category.url}
              target="_blank"
            >
              <Name>{formatName(category.name.name)}</Name>
              <Professor>{category.professor.professor}</Professor>
            </Exam>
          )) : 'Nenhuma prova registrada'}
          <Category>2ª Chamada</Category>
          {categories.second?.length ? categories.second?.map((category) => (
            <Exam
              href={category.url}
              target="_blank"
            >
              <Name>{formatName(category.name.name)}</Name>
              <Professor>{category.professor.professor}</Professor>
            </Exam>
          )) : 'Nenhuma prova registrada'}
          <Category>Outras</Category>
          {categories.others?.length ? categories.others?.map((category) => (
            <Exam
              href={category.url}
              target="_blank"
            >
              <Name>{formatName(category.name.name)}</Name>
              <Professor>{category.professor.professor}</Professor>
            </Exam>
          )) : 'Nenhuma prova registrada'}
        </Exams>
      ) : <Loading />}
    </CenterPage>
  );
}

export default ExamBySubject;

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

const Exams = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Category = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #FFEAA4;
  text-decoration: underline;
  margin: 20px;
`;

const Exam = styled.a`
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;

  &:hover{
    cursor: pointer;
    font-weight: 700;
    text-decoration: underline;
  }
`;

const Name = styled.p`
  font-size: 16px;
  color: #ffffff;
  display: flex;
  justify-content: flex-end;
`;

const Professor = styled.p`
  font-size: 16px;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
`;
