function multESub(){
    let valor = parseFloat(prompt("Insira o valor para a conversão:")),
    medidaAtual = parseInt(prompt("Insira a conversão atual do valor (0- Giga, 1- Mega, 2- Kilo, 3- Padrão, 4- Mili, 5- Micro, 6- Nano):"))
    medidaResultado = parseInt(prompt("Insira a conversão desejada (0- Giga, 1- Mega, 2- Kilo, 3- Padrão, 4- Mili, 5- Micro, 6- Nano):")),
    conversoes = [10 ** 9, 10 ** 6, 10 ** 3, 1, 10 ** -3, 10 ** -6, 10 ** -9, "G", "M", "K", "", "m", "μ", "n"],
    unidadeMedida = prompt("Insira a unidade de medida (A, I, Ω, W, C):"),
    resultado = ((valor * conversoes[medidaAtual]) / conversoes[medidaResultado]) + " " + conversoes[medidaResultado + 7] + unidadeMedida.toUpperCase();
    console.log("Resultado: " + resultado);
}