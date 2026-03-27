function resistores(){
    let cores = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ],
    multiplicador = [
        1,
        10,
        10 ** 2,
        10 ** 3,
        10 ** 4,
        10 ** 5,
        10 ** 6,
        10 ** 7,
        10 ** 8,
        10 ** 9,
        10 ** -1,
        10 ** -2
    ],
    tolerancias = [
        "+/- 1%",
        "+/- 2%",
        "+/- 20%",
        "+/- 5%",
        "+/- 10%"
    ],
    qtdFaixas = parseInt(prompt("Insira a quantidade de faixas (4 ou 5):")),
    resistencia = "",
    tolerancia;
    if(qtdFaixas == 4 || qtdFaixas == 5){
        let i;
        for(i = 0; i < qtdFaixas - 2; i++){
            resistencia += cores[prompt("Insira a cor da " + (i + 1) + " faixa:\nEscolha entre:\n0- Preto\n1- Marrom\n2- Vermelho\n3- Laranja\n4- Amarelo\n5- Verde\n6- Azul\n7- Violeta\n8- Cinza\n9- Branco")] + "";
        }
        resistencia = parseInt(resistencia) * multiplicador[prompt("Insira a cor da " + (i + 1) + " faixa:\nEscolha entre:\n0- Preto\n1- Marrom\n2- Vermelho\n3- Laranja\n4- Amarelo\n5- Verde\n6- Azul\n7- Violeta\n8- Cinza\n9- Branco\n10- Ouro\n11- Prata")];
        tolerancia = tolerancias[prompt("Insira a cor da " + (i + 2) + " faixa:\nEscolha entre:\n0- Marrom\n1- Vermelho\n2- Branco\n3- Ouro\n4- Prata")];
        if(resistencia >= 10 ** 6){
            resistencia /= 10 ** 6;
            resistencia += " K";
        } else if(resistencia >= 3){
            resistencia /= 10 ** 3;
            resistencia += " M";
        }
        console.log("Resistência: " + resistencia + "Ω\nTolerância: " + tolerancia);
    } else {
        console.log("Quantidade de faixas inválida!");
    }
}