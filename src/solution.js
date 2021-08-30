const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

function findStudentByName(students, name) {
  let found = students.find(student => student.name === name);
  return found ? found : null;
  //return found;
}

console.log(findStudentByName(students, "Natalee Vargas"))
module.exports = findStudentByName;