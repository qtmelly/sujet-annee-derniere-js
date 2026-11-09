function rankUpElo(level, isWin) {
  if (isWin) {
    return level + 1;
  } else {
    return level - 2.5;
  }
}

console.log(rankUpElo(10, false)); // 7.5
console.log(rankUpElo(5, true)); // 6
