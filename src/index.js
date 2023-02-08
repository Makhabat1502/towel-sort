
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];

  return matrix.flatMap((itm, idx) => {
    if (idx % 2 === 0) {
        return itm;
      } else return itm.reverse();
    });
}
