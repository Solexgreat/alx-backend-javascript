// Accepts two args and throw error/try catch when divided by 0
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }

  const result = numerator / denominator;

  return result;
}
