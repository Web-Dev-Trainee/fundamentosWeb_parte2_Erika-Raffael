/*
- Observe os comentários na parte inferior. 
Certifique-se de remover o comentário dos itens em 
cada etapa abaixo da seção editável. Certifique-se 
de comentar toda a última etapa. Se o seu código não
funcionar ou você vir um "ReferenceError" no console,
certifique-se de ter concluído todos os objetivos.

-Não se esqueça que você pode colocar "console.log" 
em qualquer lugar para ver quais são seus valores a 
qualquer momento.

-Passo 1:
Dê uma olhada neste código e tente prever o que ele 
fará antes de executá-lo ...

Não se esqueça que você pode colocar "console.log" 
em qualquer lugar para ver quais são seus valores
a qualquer momento.
  
  
  
Passo 1:
Dê uma olhada neste código e tente prever o que ele fará antes de executá-lo ...

Depois de fazer seu palpite, pressione 'run' na parte superior
e dê uma olhada na saída no console. Se você ficou surpreso com
alguma coisa, volte e olhe o código para ver o que está acontecendo.

Passo 2:
Depois de ter um bom controle do snippet de código, exclua o código
e siga as seguintes instruções entre as linhas e tente recriar o
snippet por conta própria.

-4 variáveis: nome, sobrenome, ano atual e ano de nascimento.
uma 5ª variável (saudação) que é construída a partir das 4 anteriores, 
deve conter uma saudação com o nome completo da pessoa e sua idade.
imprima a saudação com console.log

-
Depois de ter sua versão do código funcionando, vamos voltar a ela e
editá-la para torná-la mais fácil de ler. Após cada etapa, certifique-se 
de executar o código para garantir que ele ainda funcione!

Etapa 3:
Adicione mais 2 variáveis: "fullName" e "idade"

Edite a string de saudação para usar fullName e age em vez de fazer os 
cálculos na própria string. (a saudação deve ser semelhante
a: "Olá, meu nome é" + fullName)

* NÃO digite simplesmente o nome completo e a idade nas novas variáveis, 
mas defina-as usando os cálculos que estavam sendo feitos originalmente 
na saudação.

* observação - para fazer os testes passarem, você precisará usar 
esses valores exatos para os anos e nomes. O texto precisa ser exato.
 Se os testes falharem, verifique o espaçamento e a pontuação:

birthYear = 1948
thisYear = 1965
firstName = Carlos
lastName = Stevenson
*/
const birthYear = 1948;
const thisYear = 1965;
const firstName = "Carlos ";
const lastName = "Stevenson";

const fullName = firstName + lastName;
const age =  thisYear - birthYear;

const greeting = `Hello! My name is ${fullName} and I am ${age} years old.`;

console.log(greeting);




module.exports = {
	testGroup: "a",
	greeting,
	birthYear,
	thisYear,
	firstName,
	lastName
}

// module.exports = {
// 	testGroup: "b",
// 	greeting,
// 	birthYear,
// 	thisYear,
// 	firstName,
// 	lastName,
// 	fullName,
// 	age
// }


