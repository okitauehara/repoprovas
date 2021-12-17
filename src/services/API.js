import axios from 'axios';

const URL_BASE = process.env.REACT_APP_BASE_URL;

function getCategories() {
  const promise = axios.get(`${URL_BASE}/categories`);
  return promise;
}

function getSubjects() {
  const promise = axios.get(`${URL_BASE}/subjects`);
  return promise;
}

function getProfessors(subjectId) {
  const promise = axios.get(`${URL_BASE}/professors/${subjectId}`);
  return promise;
}

export {
  getCategories,
  getSubjects,
  getProfessors,
};
