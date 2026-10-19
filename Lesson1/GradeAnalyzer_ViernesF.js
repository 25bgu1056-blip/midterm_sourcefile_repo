let scores = [96, 92, 68, 83, 72];

console.log("Student Scores:");
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

console.log("");

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passedCount = 0;
let failedCount = 0;

for (let i = 0; i < scores.length; i++) {
  const score = scores[i];
  total += score;

  if (score > highest) {
    highest = score;
  }
  if (score < lowest) {
    lowest = score;
  }

  let remark;
  if (score >= 90) {
    remark = "Excellent";
  } else if (score >= 80) {
    remark = "Very Good";
  } else if (score >= 75) {
    remark = "Good";
  } else {
    remark = "Failed";
  }

  let status = score >= 75 ? "Passed" : "Failed";

  if (status === "Passed") {
    passedCount++;
  } else {
    failedCount++;
  }

  console.log(`Student ${i + 1}: ${score} - ${remark}${remark === "Failed" ? "" : " - " + status}`);
}

let average = total / scores.length;

console.log("");
console.log(`Total Score: ${total}`);
console.log(`Average Score: ${average}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Passed: ${passedCount}`);
console.log(`Failed: ${failedCount}`);