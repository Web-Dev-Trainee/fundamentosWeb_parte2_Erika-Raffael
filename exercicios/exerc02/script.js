/**
* O código abaixo diz ao navegador para pedir um número
 * então se esse número for `6`, ele retorna` verdadeiro`, caso contrário, retorna `falso`
 *
 * Altere este código para que retorne `verdadeiro` quando o número for maior ou igual a 10 e falso se for menor que 10
 */

number = Number(prompt("Digite um numero"));

function numberChecker() {
    if (number >= 10) {
        return true;
    } else {
        return false;
    }
}
