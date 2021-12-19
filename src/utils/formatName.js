export default function formatName(name) {
  const year = name.split('.')[0];
  const semester = name.split('.')[1];
  const formattedName = `${year} - ${semester}º Semestre`;
  return formattedName;
}
