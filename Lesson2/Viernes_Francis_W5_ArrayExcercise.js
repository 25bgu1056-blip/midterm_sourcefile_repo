'use strict';

const studentNames = [
  'Ana',
  'Ben',
  'Carla',
  'Daniel',
  'Ella'
];

const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];
const originalNames = Array.from(studentNames);
//I used for loop to display the original records of students and their scores
console.log("Part A: Display the Original Records"); 
  for (let i = 0; i < studentNames.length; i++) {
    console.log(i + " - " + studentNames[i] + ": " + studentScores[i]);
  }
// I used push and unshift to add new students and their scores to the arrays.
console.log("\nPart B: Add new Students");
studentNames.push('Faith');
studentScores.push(88);
studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log("Updated student names: " + studentNames);
console.log("Updated student scores: " + studentScores);
console.log("Expected number of students: " + studentNames.length);

//I used shift and pop to remove the first and last records of students and their scores. 
console.log("\nPart C: Remove and Replace Records");
studentNames.shift();
studentScores.shift()
studentNames.pop();
studentScores.pop();
//I also used splice to remove Daniel's record and add Grace's record in the middle of the arrays.
const danielIndex = studentNames.indexOf('Daniel');
studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);
console.log("Names: " + studentNames);
console.log("Scores: " + studentScores);

// I am going to calculate the total score, average score, highest score, and lowest score of the students using a for loop.
console.log("\nPart D: Calculate class statistics");
let totalScore = 0;
let averageScore = 0;
let highest = studentScores[0];
let lowest = studentScores[0];
for (let i = 0; i < studentScores.length; i++) {
  totalScore += studentScores[i];
  averageScore = totalScore / studentScores.length;

  // I used if statements to find the highest and lowest scores in the array.
  if (studentScores[i] > highest) {
    highest = studentScores[i];
  }
  if (studentScores[i] < lowest) {
    lowest = studentScores[i];
  }
}
console.log("Total Score: " + totalScore);
console.log("Average Score: " + averageScore.toFixed(2));
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);

//I used filter, map, some, and every to analyze the passing scores of the students.
console.log('\nPART E: Analyze Passing Scores');
const passingScore = 75;
const passingScores = studentScores.filter((score) => score >= passingScore);
const scoreStatuses = studentScores.map((score) => (score >= passingScore ? 'Passed' : 'Failed'));
const atLeastOneFailed = studentScores.some((score) => score < passingScore);
const allPassed = studentScores.every((score) => score >= passingScore);
console.log(`Passing Scores: ${passingScores}`);
console.log(`Statuses: ${scoreStatuses}`);
console.log(`At Least One Failed: ${atLeastOneFailed}`);
console.log(`All Students Passed: ${allPassed}`);

//I used sort to arrange the scores from highest to lowest.
console.log('\nPart F: Sort and Search')
const sortedScores = Array.from(studentScores);
sortedScores.sort((a, b) => b - a); 
const contains91 = sortedScores.includes(91);
const indexOf91 = studentScores.indexOf(91); 
console.log(`Scores from Highest to Lowest: ${sortedScores}`);
console.log(`Contains 91: ${contains91}`);
console.log(`Index of 91: ${indexOf91}`);

//I used the originalNames array because it was changed  with push, shift, pop, and splice methods.
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');
const activityAverages = [];
for (let i = 0; i < activityScores.length; i++) {
  let rowTotal = 0; //I navigated through the tricky two-dimensional array using nested for loops.
  for (let j = 0; j < activityScores[i].length; j++) { 
    console.log(activityScores[i][j]);
    rowTotal += activityScores[i][j];
  }
  const rowAverage = rowTotal / activityScores[i].length;
  activityAverages.push(rowAverage);
  console.log(`${originalNames[i]}'s activity average: ${rowAverage.toFixed(2)}`);
}
console.log(`Activity Averages: ${activityAverages}`);

//used join to create a text summary of the students' names.
console.log('\nPART H: TEXT SUMMARY');
console.log(`Students: ${studentNames.join(' | ')}`);