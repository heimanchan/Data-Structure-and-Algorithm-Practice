function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  let result = new Array(cost_per_minute.length);
  
  for (let i = 0; i < cost_per_minute.length; i++) {
    result[i] = (cost_per_minute[i] * ride_time) + (cost_per_mile[i] * ride_distance);
  }
  
  return result;
}
