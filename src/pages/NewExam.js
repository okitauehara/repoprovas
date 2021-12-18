import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { DefaultContent, CenterPage } from '../styles/DefaultPageStyle';
import { getCategories, getSubjects, getProfessors } from '../services/API';

function NewExam() {
  const [data, setData] = useState({
    year: '',
    semester: '',
    category: '',
    subject: '',
    professor: '',
    url: '',
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [professors, setProfessors] = useState('');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data));
    getSubjects()
      .then((res) => setSubjects(res.data));
    if (data.subject) {
      getProfessors(data.subject)
        .then((res) => setProfessors(res.data));
    }
  }, [data.subject]);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const insertExam = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const body = {
      name: `${data.year}.${data.semester}`,
      category: Number(data.category),
      subject: Number(data.subject),
      professor: Number(data.professor),
      url: data.url,
    };
    console.log(body);
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
          <Option value="">Categoria</Option>
          {categories.map((category) => (
            <Option key={category.id} value={category.id}>{category.category}</Option>
          ))}
        </Select>
        <Select
          name="subject"
          disabled={isDisabled}
          required
          onChange={handleChange}
          defaultValue=""
        >
          <Option value="">Disciplina</Option>
          {subjects.map((subject) => (
            <Option key={subject.id} value={subject.id}>{subject.subject}</Option>
          ))}
        </Select>
        <Select
          name="professor"
          disabled={isDisabled}
          required
          onChange={handleChange}
          defaultValue=""
        >
          <Option value="">Professor</Option>
          {professors.professors?.map((professor) => (
            <Option key={professor.id} value={professor.id}>{professor.professor}</Option>
          ))}
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

const Option = styled.option`
  height: 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
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
  height: 40px;
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
