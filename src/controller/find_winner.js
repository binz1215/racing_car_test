function resultToNum(result) {
  let numRuselrt = {};
  Object.entries(result).forEach(([key, value]) => {
    numRuselrt[key] = value.length;
  });
  return numRuselrt;
}

function winner(result) {
  const numRuselrt = resultToNum(result);
  const numArray = Object.values(numRuselrt);
  const max = Math.max(...numArray);
  let winners = [];

  Object.entries(numRuselrt).forEach(([key, value]) => {
    if (value === max) {
      winners.push(key);
    }
  });

  return winners;
}

export { winner };
