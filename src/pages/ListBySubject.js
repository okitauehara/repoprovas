/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { getSubjectsByPeriod } from '../services/API';
import { DefaultContent, CenterPage } from '../styles/DefaultPageStyle';

function ListBySubject() {
  const [periods, setPeriods] = useState([]);

  useEffect(() => {
    getSubjectsByPeriod()
      .then((res) => {
        setPeriods(res.data);
      });
  }, []);

  return (
    <CenterPage>
      <DefaultContent />
      <PageTitle>Períodos</PageTitle>
      <List>
        {periods?.map((period) => (
          <Period>
            <PeriodName key={period.id}>{period.period}</PeriodName>
            {period.subjects?.map((subject) => (
              <>
                <Subject key={subject.id} data-tip={`Provas: ${subject.exams.length}`}>{subject.subject}</Subject>
                <ReactTooltip
                  place="right"
                  type="dark"
                  backgroundColor="#181820"
                  textColor="#FFEAA4"
                  effect="solid"
                />
              </>
            ))}
          </Period>
        ))}
      </List>
    </CenterPage>
  );
}

export default ListBySubject;

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

const List = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 20px;
`;

const Period = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PeriodName = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #FFEAA4;
  text-decoration: underline;
  margin: 10px 0px;
`;

const Subject = styled.p`
  font-size: 16px;
  color: #ffffff;

  &:hover{
    cursor: pointer;
    font-weight: 700;
  }
`;
