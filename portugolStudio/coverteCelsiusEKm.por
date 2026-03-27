programa
{
	
	funcao inicio()
	{
		inteiro opcao
		real temperatura, quilometro, conversao
		
		faca{
			escreva("\nCalculadora de conversões: Escolha uma opção: \n")
	
			escreva("\n1) Celsius para Fahrenheit")
			escreva("\n2) Quilômetros para Milhas")
			escreva("\n3) Sair\n\n")
	
			leia(opcao)
		
			se(opcao != 3)
			{
				escolha(opcao)
				{
					caso 1:
							escreva("\nInforme o valor que deserja converter: ")
							leia(temperatura)
							conversao = (temperatura * 1.8) + 32
							escreva("\n" + temperatura + " ºC equivale(m) a "+ conversao + " ºF\n")
						pare
					caso 2:
							escreva("\nInforme o valor que deserja converter: ")
							leia(quilometro)
							conversao = (quilometro * 0.62137)
							escreva("\n" + quilometro + " Km equivale(m) a "+ conversao + " Mi\n")
						pare
					caso contrario:
							escreva("\nOpção inválida !")
						pare
				}
			}
		}
		enquanto(opcao !=3)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 797; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */