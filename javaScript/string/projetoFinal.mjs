import entraDados from 'readline-sync';

console.log("\n1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n ");

let opcao = entraDados.question("Digite o numero de sua escolha: ");
//console.log("\nA opçao escolhida é: " + opcao +"\n");

let ano_salario = [
    { ano: 2010, salario: 510 },{ ano: 2011, salario: 545 },
    { ano: 2012, salario: 622 },{ ano: 2013, salario: 678 },
    { ano: 2014, salario: 724 },{ ano: 2015, salario: 788 },
    { ano: 2016, salario: 880 },{ ano: 2017, salario: 937 },
    { ano: 2018, salario: 945 },{ ano: 2019, salario: 998 },
    { ano: 2020, salario: 1045 }    
];

let ano_IPCA = [
    { ano: 2010, ipca: 5.91 },{ ano: 2011, ipca: 6.50 },
    { ano: 2012, ipca: 5.84 },{ ano: 2013, ipca: 5.91 },
    { ano: 2014, ipca: 6.41 },{ ano: 2015, ipca: 10.67 },
    { ano: 2016, ipca: 6.29 },{ ano: 2017, ipca: 2.95 },
    { ano: 2018, ipca: 3.75 },{ ano: 2019, ipca: 4.31 },
    { ano: 2020, ipca: 4.52 }
];

if (opcao != 1 && opcao != 2 && opcao != 3){
    console.log("\n Opção inválida !")
}else{
    let formatacao = "";
    switch(opcao){
        
        case "1":
            for(let cont = 0; cont < ano_salario.length; cont++){
                
                 let valorSalario = ano_salario[cont].salario;
                 let salarioFormatado = valorSalario.toFixed(2);
                 salarioFormatado = salarioFormatado.replace('.',',');               
               
                 console.log("\nAno:" + formatacao.padStart(30,'.') + ano_salario[cont].ano);
                 console. log("Salário mínimo:"  + formatacao.padStart(19,'.') + formatacao.padStart(2,'R$') + " " + salarioFormatado + "\n");
            }           
            break;
        
        case "2":
            let cont = 0;
            while(cont < ano_IPCA.length){
                
                let valorIPCA = ano_IPCA[cont].ipca;
                let ipcaFormatado = valorIPCA.toFixed(2);
                ipcaFormatado = ipcaFormatado.replace('.',',');
                
                console.log("\nAno:" + formatacao.padStart(30,'.') + ano_IPCA[cont].ano);
                console. log("Inflação IPCA:"  + formatacao.padStart(19,'.')  + " " + ipcaFormatado + formatacao.padEnd(1,'%') + "\n");                
            
                cont++;
            }
            break;
       
        case "3":            
            
            for(let cont = 0; cont < ano_salario.length; cont++){
            
                let ipca_atualizado = "ipca";
                let valor_ipca = ano_IPCA[cont].ipca;
                
                ano_salario[cont][ipca_atualizado] = valor_ipca;
                
                 let valorSalario = ano_salario[cont].salario;                 
                
                 
                 let salarioFormatado = valorSalario.toFixed(2);
                 salarioFormatado = salarioFormatado.replace('.',',');
                 
                 let valorIPCA = ano_salario[cont].ipca;
                 let ipcaFormatado = valorIPCA.toFixed(2);
                 ipcaFormatado = ipcaFormatado.replace('.',',');
                 
                 let crescimentoFormatado = "-";
                 
                 if(cont > 0){
                    
                    let i = cont;
                    let salarioAnoCorrente = ano_salario[cont].salario;
                    let salarioAnoAnterior = ano_salario[i-1].salario;
                    let diferenca = salarioAnoCorrente - salarioAnoAnterior;
                    let crescimento = (diferenca / salarioAnoAnterior) * 100;
                    crescimentoFormatado = crescimento.toFixed(2);
                    crescimentoFormatado = crescimentoFormatado.replace('.',',');                    
                   
                 }
                                          
               
                 console.log("\nAno:" + formatacao.padStart(30,'.') + ano_salario[cont].ano);
                 console. log("Salário mínimo:"  + formatacao.padStart(19,'.') + formatacao.padStart(2,'R$') + " " + salarioFormatado); 
                 console.log("Crescimento Salarial:" + formatacao.padStart(13,'.') + (cont == 0 ? crescimentoFormatado: crescimentoFormatado + formatacao.padEnd(1,'%') ) );
                 console.log("Inflação IPCA:"  + formatacao.padStart(19,'.')  + " " + ipcaFormatado + formatacao.padEnd(1,'%') + "\n");
            
            }
            
            break;
    }

}
