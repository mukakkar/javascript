'use strict';

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = (team1AvgScore, team2AvgScore, nameTeam1, nameTeam2) => {
  if (team1AvgScore >= team2AvgScore * 2) {
    console.log(
      `${nameTeam1} is the winner ${team1AvgScore} vs ${team2AvgScore}`
    );
  } else if (team2AvgScore >= team1AvgScore * 2) {
    console.log(
      `${nameTeam2} is the winner ${team2AvgScore} vs ${team1AvgScore}`
    );
  } else {
    console.log(
      `Unfortunately there were no winners ${team2AvgScore}, ${team1AvgScore}`
    );
  }
};

const dolphinsAvgScore = calcAverage(96, 108, 89);
const koalasAvgScore = calcAverage(89, 91, 10);
checkWinner(dolphinsAvgScore, koalasAvgScore);
