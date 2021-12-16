import styled from 'styled-components';
import { useState } from 'react';
import { DefaultContent, CenterPage } from '../styles/DefaultPageStyle';

function NewExam() {
  const [data, setData] = useState({
    year: '',
    semester: '',
    category: '',
    subject: '',
    professor: '',
    link: '',
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const insertExam = (e) => {
    e.preventDefault();
    setIsDisabled(true);
  };

  return (
    <CenterPage>
      <DefaultContent />
      <Form onSubmit={insertExam}>
        <Input
          name="year"
          value={data.year}
          placeholder="Ano"
          type="number"
          min="2000"
          max={currentYear}
          required
          disabled={isDisabled}
          onChange={handleChange}
        />
        <Period>
          <RadioOption>
            <RadioInput
              name="semester"
              id="first"
              value="1"
              placeholder=""
              type="radio"
              required
              disabled={isDisabled}
              onChange={handleChange}
            />
            <Label htmlFor="first">1º Semestre</Label>
          </RadioOption>
          <RadioOption>
            <RadioInput
              name="semester"
              id="second"
              value="2"
              placeholder=""
              type="radio"
              required
              disabled={isDisabled}
              onChange={handleChange}
            />
            <Label htmlFor="second">2º Semestre</Label>
          </RadioOption>
        </Period>
        <Select
          name="category"
          disabled={isDisabled}
          required
          onChange={handleChange}
          defaultValue=""
        >
          <Option>Período</Option>
          <Option value="P1">P1</Option>
          <Option value="P2">P2</Option>
          <Option value="P3">P3</Option>
          <Option value="2C">2ª Chamada</Option>
          <Option value="Outros">Outras</Option>
        </Select>
        <Select
          name="subject"
          disabled={isDisabled}
          required
          onChange={handleChange}
          defaultValue=""
        >
          <Option>Disciplina</Option>
          <Option value="Disciplina A">Disciplina A</Option>
          <Option value="Disciplina B">Disciplina B</Option>
          <Option value="Disciplina C">Disciplina C</Option>
          <Option value="Disciplina D">Disciplina D</Option>
          <Option value="Disciplina E">Disciplina E</Option>
        </Select>
        <Select
          name="professor"
          disabled={isDisabled}
          required
          onChange={handleChange}
          defaultValue=""
        >
          <Option>Professor</Option>
          <Option value="Professor A">Professor A</Option>
          <Option value="Professor B">Professor B</Option>
          <Option value="Professor C">Professor C</Option>
          <Option value="Professor D">Professor D</Option>
          <Option value="Professor E">Professor E</Option>
        </Select>
        <Input
          name="link"
          value={data.link}
          placeholder="Link da Prova"
          type="text"
          required
          disabled={isDisabled}
          onChange={handleChange}
        />
        <Button disabled={isDisabled} type="submit">Enviar</Button>
      </Form>
    </CenterPage>
  );
}

export default NewExam;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Period = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.option``;

const Input = styled.input`
  width: 100%;
  height: 30px;
  margin: 10px 0px;
  outline: none;
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Select = styled.select`
  width: 100%;
  height: 30px;
  margin: 10px 0px;
  outline: none;
`;

const Label = styled.label`
  font-size: 18px;
  margin-right: 20px;
`;

const Button = styled.button`
  width: 220px;
  height: 40px;
  background-color: #5e5e5e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
`;
