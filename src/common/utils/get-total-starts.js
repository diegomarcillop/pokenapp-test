export const getTotalStats = stats => {
  let total = 0;
  stats?.forEach(e => {
    total = total + e.base_stat;
  });
  return total;
};
