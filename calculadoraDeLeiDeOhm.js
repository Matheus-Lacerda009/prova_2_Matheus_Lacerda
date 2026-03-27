function leiDeOhm(){
    let valores = [], unidadesMedida = ["V", "I", "R"], resultado, unidadeUtilizada;
    for(let i = 0; i < 3; i++){
        valores.push(parseInt(prompt("Insira o valor de " + unidadesMedida[i] + " (Insira um NaN para a incógnita):")));
    }
    unidadesMedida = ["V", "A", "Ω", "Mais de um valor não foi identificado!"];
    resultado = valores[1] * valores[2];
    unidadeUtilizada = 0;
    if(Number.isNaN(resultado)){
        resultado = valores[0] / valores[2];
        unidadeUtilizada = 1;
    } if(Number.isNaN(resultado)){
        resultado = valores[0] / valores[1];
        unidadeUtilizada = 2;
    } if(Number.isNaN(resultado)){
        resultado = "ERRO!";
        unidadeUtilizada = 3;
    }
    if(resultado > 10 ** 6){
        resultado /= 10 ** 6;
        unidadesMedida[unidadeUtilizada] = "M" + unidadesMedida[unidadeUtilizada];
    } else if(resultado > 10 ** 3){
        resultado /= 10 ** 3;
        unidadesMedida[unidadeUtilizada] = "K" + unidadesMedida[unidadeUtilizada];
    }
    console.log("Resultado: " + resultado + " " + unidadesMedida[unidadeUtilizada]);
}