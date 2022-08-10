// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(linhaA, linhaB, linhaC) {
  let checkA = linhaA < linhaB + linhaC && linhaA > Math.abs(linhaB - linhaC);
  let checkB = linhaB < linhaA + linhaC && linhaB > Math.abs(linhaA - linhaC);
  let checkC = linhaC < linhaB + linhaA && linhaC > Math.abs(linhaB - linhaA);

  return checkA && checkB && checkC;
}

// Desafio 13
function hydrate(bebidas) {
  let quantidadeBebidas = bebidas.match(/\d+/g).map(Number);
  let copoDAgua = quantidadeBebidas.reduce((a,b) => a + b, 0);
  let resultado = '';

  if (copoDAgua === 1) {
    resultado = `${copoDAgua} copo de água`;
  } else {
    resultado = `${copoDAgua} copos de água`;
  }
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
