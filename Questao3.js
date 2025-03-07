const fs = require("fs");

// Carregar os dados do JSON
const rawData = fs.readFileSync("C:/Users/igors/Videos/Teste Target/dados.json");
const dados = JSON.parse(rawData);

// Filtrar dias com faturamento maior que zero
const faturamentos = dados.filter(d => d.valor > 0).map(d => d.valor);

// Cálculos
const menorFaturamento = Math.min(...faturamentos);
const maiorFaturamento = Math.max(...faturamentos);
const mediaMensal = faturamentos.reduce((acc, val) => acc + val, 0) / faturamentos.length;

// Contar dias acima da média
const diasAcimaDaMedia = faturamentos.filter(f => f > mediaMensal).length;

// Exibir resultados
console.log(`Menor faturamento: ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: ${maiorFaturamento.toFixed(2)}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
