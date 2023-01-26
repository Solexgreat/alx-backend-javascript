// Accept one arg, create and return an array named Queue
function guardrail(mathFunction) {
  const queue = [];
  let result;

  try {
    result = mathFunction();
  } catch (e) {
    result = e.toString();
  }

  queue.push(result);
  queue.push('Guardrail was processed');

  return queue;
}

export default guardrail;
