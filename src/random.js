export default (min, max) => {
  const getRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return getRandomNumber;
};

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};
