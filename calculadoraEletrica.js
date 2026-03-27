function eletrica(){
    let continuar, info = [], resposta = "", i = 0;
    do{
        info.push([]);
        let nome = prompt("Insira o nome do eletrodoméstico:"), wattsOuKwatts = parseInt(prompt("Será usado quilowatts (1) ou watts (0) como unidade de medida da entrada?")), kWattsH = parseFloat(prompt("Insira a potência utilizada pelo eletrodoméstico:")), horas = parseFloat(prompt("Insira a quantidade de horas que o aparelho fica ligado por dia:")), valorTaxa = parseFloat(prompt("Insira o valor da taxa local (Kw / H):"));
        info[i].push("Nome: " + nome + " ");
        kWattsH *= horas;
        if(wattsOuKwatts == 0){
            kWattsH /= 1000;
        } else if(wattsOuKwatts != 1){
            console.log("ERRO!");
            info[i] = [];
            i--;
            continue;
        }
        info[i].push("KWH: " + kWattsH.toFixed(2) + " ");
        info[i].push("Valor pago mensal: " + ((kWattsH * valorTaxa) * 30).toFixed(2) + "\n\n");
        continuar = parseInt(prompt("Insira 1 para continuar e 0 para parar o programa:"));
        i++;
    } while(continuar);
    i = 0;
    for(let linha = 0; linha < info.length; linha++){
        for(let coluna = 0; coluna < 3; coluna++){
            resposta += info[linha][coluna];
        }
        resposta += "\n";
        i++;
    }
    console.log(resposta);
}