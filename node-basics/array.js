var grades = [100, 50, 75];
// totalGrade = 0
var totalGrade = 0;

// forEach -> add grade to totalGrade
grades.forEach(function (grade) {
  totalGrade += grade;
});

// console.log totalGrade / total number of grades
var average = totalGrade / grades.length;
console.log('Average is ' + average);
