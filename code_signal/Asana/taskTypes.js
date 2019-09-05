function tasksTypes(deadlines, day) {
  let today = 0;
  let upcoming = 0;
  let later = 0;

  for (let i = 0; i < deadlines.length; i++) {
    if (deadlines[i] <= day) {
      today++;
    } else if (deadlines[i] <= day + 7 && deadlines[i] >= day + 1) {
      upcoming++;
    } else {
      later++;
    }
  }

  return [today, upcoming, later]
}