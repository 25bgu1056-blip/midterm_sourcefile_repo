class Student {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    return sum / this.scores.length;
  }

  getLetterGrade() {
    let average = this.getAverage();

    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
}

function analyzeClass(students) {
  console.log("------- STUDENT REPORT -------");

  let classTotal = 0;
  let topStudent = students[0];

  for (let student of students) {
    let average = student.getAverage();
    let grade = student.getLetterGrade();

    console.log(`${student.name} - Average: ${average.toFixed(1)} | Grade: ${grade}`);

    classTotal += average;

    if (average > topStudent.getAverage()) {
      topStudent = student;
    }
  }

  let classAverage = classTotal / students.length;

  console.log("");
  console.log("------------------------------");
  console.log(`Class Average: ${classAverage.toFixed(1)}`);
  console.log(`Top Student: ${topStudent.name} with ${topStudent.getAverage().toFixed(1)}`);
}

let studentData = [
  new Student("Lany", [85, 90, 92]),
  new Student("Bongbong", [70, 75, 68]),
  new Student("Dutherthe", [95, 98, 92]),
  new Student("Pico", [55, 60, 58])
];

analyzeClass(studentData);