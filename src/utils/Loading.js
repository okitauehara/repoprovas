import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export default function Loading() {
  return (
    <LoadingComponent>
      <Loader type="TailSpin" color="#FC449C" height={80} width={80} />
      <Status>Carregando...</Status>
    </LoadingComponent>
  );
}

const LoadingComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

const Status = styled.span`
    font-size: 18px;
    color: #ffffff;
    margin-top: 10px;
`;
