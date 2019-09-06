function smartAssigning(names, statuses, projects, tasks) {
  //                  [tasks, projects]
  let avaiability = [Infinity, Infinity];
  let result = 0;

  for (let i = 0; i < names.length; i++) {
    if (!statuses[i]) {
      if (tasks[i] < avaiability[0]) {
        avaiability[0] = tasks[i]
        avaiability[1] = projects[i]
        result = i;
      } else if (tasks[i] === avaiability[0] && projects[i] < avaiability[1]) {
        avaiability[0] = tasks[i]
        avaiability[1] = projects[i]
        result = i;
      }
    }
  }

  return names[result];
}
