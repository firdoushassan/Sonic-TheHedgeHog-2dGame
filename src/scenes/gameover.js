import k from "../kaplayCtx"

export default function gameover(citySfx){
    citySfx.paused = true;
    let bestScore = k.getData("best-score");
    const currentScore = k.getData("current-score");

    const rankGrades = ["F", "E", "D", "C", "B", "A", "S"];
    const rankValues = [50, 80, 100, 200, 300, 400, 500];

    let currentRank = "F";
    let bestRank = "F";

    for (let i = 0; i < rankValues.length; i++){
        if(rankValues[i] < currentScore){
            currentRank = rankGrades[i];
        }
        if(rankValues[i] < bestScore){
            bestRank = rankGrades[i];
        }
    }

    if(bestScore < currentScore){
        k.setData("best-score", currentScore);
        bestScore = currentScore;
        bestRank = currentRank;
    }
}