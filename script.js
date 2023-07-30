const growCoinsDisponiveis = [50, 10, 1];

const calcularNotas = (valorDesejado) => {
  const quantidadeNotas = {};

  for (const nota of growCoinsDisponiveis) {
    quantidadeNotas[nota] = Math.floor(valorDesejado / nota);
    valorDesejado %= nota;
  }

  return quantidadeNotas;
};

const valorSaque = parseFloat(prompt("Qual valor de GrowCoins você deseja sacar?"));

if (!isNaN(valorSaque) && valorSaque > 0) {
  const notas = calcularNotas(valorSaque);

  document.write(`<p>GrowCoins solicitados: GC$ ${valorSaque.toFixed(2)}</p>`);
  document.write("<p>Notas utilizadas:</p>");
  document.write("<ul>");

  for (const nota in notas) {
    if (notas[nota] > 0) {
      document.write(`<li>${notas[nota]} nota(s) de GC$ ${nota},00</li>`);
    }
  }

  document.write("</ul>");
} else {
  document.write("<p>Não entendi! Por favor, digite um valor de GrowCoins maior que zero.</p>");
}