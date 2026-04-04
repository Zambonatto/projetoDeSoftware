import entradaDeDados from'readline-sync';

let valorDevido = entradaDeDados.question("\nInforme o valor devido: ");
let diasDeAtraso = 0;

if(valorDevido > 0 ) {

    diasDeAtraso = entradaDeDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
    
    if(diasDeAtraso > 0) {

        let taxa = diasDeAtraso > 15 ? 0.10 : 0.05;
        let valorAtual = diasDeAtraso > 15 ? Number(valorDevido) + Number(valorDevido * taxa) : Number(valorDevido) + Number(valorDevido * taxa);

        console.log("\nValor original da dívida: R$ " + valorDevido);
        console.log("Dias de atraso: " + diasDeAtraso);
        console.log("Taxa de juros: " + taxa * 100 + "%");
        console.log ("Valor total com juros: R$ " + valorAtual.toFixed(2));
    }
    else{
        console.log("\nObrigado por estar em dia!");
    }
}
else{
    console.log("\nO valor devido deve ser maior que zero!");
}