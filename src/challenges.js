// Desafio 1
function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(divideString) {
  return divideString.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(vitorias, empates) {
  return vitorias * 3 + empates;
}

// Desafio 6
function highestCount(array) {
  let counter = 1;

  console.log(
    array.sort(function (a, b) {
      return b - a;
    }),
  );

  for (let index = 1; array[index - 1] === array[index]; index += 1) {
    counter += 1;
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      result.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(codigo) {
  const vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };

  let result = '';

  for (let index of codigo) {
    if (vogais[index]) {
      result += vogais[index];
    } else {
      result += index;
    }
  }
  return result;
}
function decode(codigo) {
  const numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
};
  let result = '';

  for (let index of codigo) {
    if (numbers[index]) {
      result += numbers[index];
    } else {
      result += index;
    }
  }

  return result;
}

// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }

  let resultado = [];
  tech.sort();
  for (let argName of tech) {
    let resultadoObjeto = {
      tech: argName,
      name: `${name}`,
    };
    resultado.push(resultadoObjeto);
  }
  return resultado;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
