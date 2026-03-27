let opc;
do{
    opc = parseInt(prompt("Insira a operação desejada:\n1- Lei de Ohm\n2- Resistores\n3- Elétrica\n4- Múltiplos e submúltiplos\n5- Resistores em série e em paralelo\n0- Sair"));
    switch(opc){
        case 1:
            leiDeOhm();
            break;
        case 2:
            resistores();
            break;
        case 3:
            eletrica();
            break;
        case 4:
            multESub();
            break;
        case 5:
            resSerieParalelo();
            break;
        case 0:
            console.log("Obrigado por utilizar de meus sistemas!");
            break;
        default:
            console.log("Opção não identificada!");
    }
} while(opc != 0);