module.exports = function countCats(matrix) {
  return matrix.flat().filter(elem => elem == "^^").length;
};
