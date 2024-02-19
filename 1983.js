const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const numberOfStudents = parseInt(lines.shift());
  let winner;
  let winnerGrade = 0;
  for (let i = 0; i < numberOfStudents; i++) {
    const [student, grade] = lines.shift().split(' ').map(Number);

    if (grade > winnerGrade) {
      winner = student;
      winnerGrade = grade;
    }
  }

  if (winnerGrade >= 8) {
    console.log(winner);
  } else {
    console.log(`Minimum note not reached`);
  }
};

main();
