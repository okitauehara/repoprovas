import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewExam from './pages/NewExam';
import ListBySubject from './pages/ListBySubject';
import ListByProfessor from './pages/ListByProfessor';
import ExamBySubject from './pages/ExamBySubject';
import ExamByProfessor from './pages/ExamByProfessor';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-exam" element={<NewExam />} />
      <Route path="/by-subject" element={<ListBySubject />} />
      <Route path="/by-professor" element={<ListByProfessor />} />
      <Route path="/by-subject/:subjectId" element={<ExamBySubject />} />
      <Route path="/by-professor/:professorId" element={<ExamByProfessor />} />
    </Routes>
  );
}

export default Pages;
