const maxTurbulenceSize = A => {
  let result = 1;
  let curr = 1;

  for (let i = 1; i < A.length; i++) {
    if (i >= 2 && 
      ((A[i-2] < A[i-1] && A[i-1] > A[i])) ||
      ((A[i-2] > A[i-1] && A[i-1] < A[i]))
    ) {
      curr++;
    } else if (i >= 1 && A[i-1] != A[i]) {
      curr = 2;
    }

    result = Math.max(result, curr)
  }

  return result;
}