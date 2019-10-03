function getEventsOrder(team1, team2, events1, events2) {
  // Write your code here
  let reg = /\d+\+?\d?/;

  let firstHalfMap = {};
  let secondHalfMap = {};

  let firstHalf = [];
  let secondHalf = [];

  let result = [];

  for (let i = 0; i < events1.length; i++) {
    let findNum = events1[i].match(reg);

    if (parseInt(findNum[0]) <= 45) {
      firstHalf.push(`${team1} ${events1[i]}`)
    } else {
      secondHalf.push(`${team1} ${events1[i]}`)
    }
  }

  for (let i = 0; i < events2.length; i++) {
    let findNum = events2[i].match(reg);

    if (parseInt(findNum[0]) <= 45) {
      firstHalf.push(`${team2} ${events2[i]}`)
    } else {
      secondHalf.push(`${team2} ${events2[i]}`)
    }
  }

  for (let i = 0; i < firstHalf.length; i++) {
    let time;
    let findNum = firstHalf[i].match(reg);

    if (findNum[0].match(/\+/)) {
      let mins = findNum[0].split("+");
      time = parseInt(mins[0]) + parseInt(mins[1])
    } else {
      console.log(findNum[0])
      time = parseInt(findNum[0])
    }

    if (firstHalfMap[time]) {
      firstHalfMap[time].push(firstHalf[i]);
    } else {
      firstHalfMap[time] = [firstHalf[i]];
    }
  }

  for (let i = 0; i < secondHalf.length; i++) {
    let time;
    let findNum = secondHalf[i].match(reg);

    if (findNum[0].match(/\+/)) {
      let mins = findNum[0].split("+");
      time = parseInt(mins[0]) + parseInt(mins[1])
    } else {
      time = parseInt(findNum[0])
    }

    if (secondHalfMap[time]) {
      secondHalfMap[time].push(secondHalf[i]);
    } else {
      secondHalfMap[time] = [secondHalf[i]];
    }
  }

  for (let time in firstHalfMap) {
    firstHalfMap[time].sort();
    result.push(...firstHalfMap[time])
  }

  for (let time in secondHalfMap) {
    secondHalfMap[time].sort();
    result.push(...secondHalfMap[time])
  }

  return result
}