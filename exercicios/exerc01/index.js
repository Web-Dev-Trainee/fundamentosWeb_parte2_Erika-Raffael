// Entendi, você está curioso,
// mas está tudo bem se você não entender o que está acontecendo aqui, você aprenderá com o tempo.

const abTroubleshoot = require("./troubleshooting");

const result = abTroubleshoot();

if(result === 2) {
	console.log("Parabéns! Você acertou a resposta");
} else if(typeof result === 'number') {
	console.log(`Você devolveu o número ${result}, o resultado deve ser o número 2`);
} else {
	console.log(`Você devolveu a string "${result}", o resultado deve ser o número 2`);
}