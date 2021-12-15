import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewExam from './pages/NewExam';
import ListExams from './pages/ListExams';
import ListBySubject from './pages/ListBySubject';
import ListByProfessor from './pages/ListByProfessor';
import ExamBySubject from './pages/ExamBySubject';
import ExamByProfessor from './pages/ExamByProfessor';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-exam" element={<NewExam />} />
      <Route path="/list-exams" element={<ListExams />} />
      <Route path="/list-exams/by-subject" element={<ListBySubject />} />
      <Route path="/list-exams/by-professor" element={<ListByProfessor />} />
      <Route path="/list-exams/by-subject/:examId" element={<ExamBySubject />} />
      <Route path="/list-exams/by-professor/:examId" element={<ExamByProfessor />} />
    </Routes>
  );
}

export default Pages;
