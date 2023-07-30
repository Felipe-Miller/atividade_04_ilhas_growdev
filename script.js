const growCoinsDisponiveis = [50, 10, 1];

const calcularNotas = (valorDesejado) => {
  const quantidadeNotas = {};

  for (const nota of growCoinsDisponiveis) {
    quantidadeNotas[nota] = Math.floor(valorDesejado / nota);
    valorDesejado %= nota;
  }

  return quantidadeNotas;
};