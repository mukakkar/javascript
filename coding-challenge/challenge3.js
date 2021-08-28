const dolphinsAvgScore = (96 + 108 + 89) / 3;
const koalasAvgScore = (89 + 91 + 10) / 3;

if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
    console.log(`Dolphins are the winner and the winning score is ${dolphinsAvgScore}`);
} else if (koalasAvgScore === koalasAvgScore && dolphinsAvgScore >= 100) {
    console.log("Scores are tied");
} else if (koalasAvgScore > dolphinsAvgScore && dolphinsAvgScore >= 100) {
    console.log(`Koalas are the winner and the winning score is ${koalasAvgScore}`);
} else {
    console.log(`Unfortunately There are no Winners today :(, the scores are ${dolphinsAvgScore}, ${koalasAvgScore}`);
}
