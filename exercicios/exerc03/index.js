const {a, b, c, d, e} = require("./math");

if(a === 9) {
	console.log("'a' está correto!")
} else {
	console.log(`'a' está incorreto, obtido ${a}, esperado 9`)
}
console.log("\n");

if(b === 66) {
	console.log("'b' está correto!")
} else {
	console.log(`'b' está incorreto, obtido ${b}, esperado 66`)
}
console.log("\n");

if(c === 1) {
	console.log("'c' está correto!")
} else {
	console.log(`'c' está incorreto, obtido ${c}, esperado 1`)
}
console.log("\n");

if(d === -8) {
	console.log("'d' está correto!")
} else {
	console.log(`'d' está incorreto, obtido ${d}, esperado -8`)
}
console.log("\n");

if(e === 68) {
	console.log("'e' está correto!")
	console.log("\n Parabéns! Você resolveu todos eles, você pode passar para a proxima")
} else {
	console.log(`'e' está incorreto, obteve ${e}, esperado 68`)
}