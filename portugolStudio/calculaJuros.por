programa
{
	funcao inicio()
	{
		real valor
		real porcentagem
		real jurosOuDesconto
		real valorComJuros
		real valorComDesconto

		escreva("\nInforme o valor ")
		leia(valor)
		
		escreva("\nInforme a porcentagem ")
		leia(porcentagem)

		jurosOuDesconto = (porcentagem / 100 * valor)
		valorComDesconto = (valor - jurosOuDesconto)
		valorComJuros  = (valor + jurosOuDesconto)

		escreva("\n" + valor + " com " + porcentagem + " % " + "de desconto é: " + valorComDesconto)
		escreva("\n" + valor + " com " + porcentagem + " % " + "de juros é: " + valorComJuros)	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 12; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */