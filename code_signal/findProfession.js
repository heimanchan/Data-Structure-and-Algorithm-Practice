function findProfession(level, pos) {
  if (level === 1) return 'Engineer';

  if (findProfession(level-1, Math.floor((pos+1)/2)) === 'Engineer') {
    return pos % 2 === 1 ? 'Engineer' : 'Doctor'; 
  } else {
    return pos % 2 === 1 ? 'Doctor' : 'Engineer'; 
  }
}
