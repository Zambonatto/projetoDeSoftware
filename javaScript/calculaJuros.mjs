import entradaDeDados from'readline-sync';

let valorDevido = entradaDeDados.question("\nInforme o valor devido:");
let diasDeAtraso = 0;

if(valorDevido > 0 ) {

    diasDeAtraso = entradaDeDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
    
    if(diasDeAtraso > 0) {

        let taxa = diasDeAtraso > 15 ? 0.10 : 0.05;
        let valorAtual = diasDeAtraso > 15 ? Number(valorDevido) + Number(valorDevido * taxa) : Number(valorDevido) + Number(valorDevido * taxa);

        console.log("\nValor original da dívida: R$ " + valorDevido);
        console.log("Dias de atraso: " + diasDeAtraso);
        console.log("Taxa de juros: " + taxa * 100 + "%");
        console.log ("Valor total com juros: R$ " + valorAtual.toFixed(0));
    }
}
let finaliza = (valorDevido <= 0) ? "O valor devido" : "Os dias de atraso";
if (valorDevido <= 0 || diasDeAtraso <= 0) {        
        console.log("\nValor inválido. " + finaliza + " deve ser maior que zero."); 
}