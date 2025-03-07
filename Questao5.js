const readline = require('readline');

// Configuração do readline para capturar entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para inverter a string
function inverterString(s) {
    let stringInvertida = '';
    
    // Iterar sobre a string original de trás para frente
    for (let i = s.length - 1; i >= 0; i--) {
        stringInvertida += s[i];
    }
    
    return stringInvertida;
}

// Solicitar entrada do usuário
rl.question("Digite uma string para inverter: ", function(entrada) {
    const resultado = inverterString(entrada);
    console.log("String invertida:", resultado);
    rl.close();
});
