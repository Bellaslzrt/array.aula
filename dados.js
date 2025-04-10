// exemplo de array com tipo de vetor que contem cnj de dados
const frutas = ['abacate', 'banana', 'laranja']
// cria um array sozinho
const carrinho = [];
console.log(frutas);
// variavel que armazena um numero inteiro que representa um indice
// parseInt converte pra inteiro
// math random gera um numero aleatorio
// entre 0 e 1
let indice = parseInt (Math.random() *10);
// exibe no console uma das frutas conforme o indice
console.log(frutas[0]); 
// exibe no html uma das frutas conforme o indice
document.getElementById('texto').innerHTML = frutas[indice];
// adiciona um elemento no final do array
frutas.push('limao');
console.log(frutas);
// adiciona um elemento no final do array carrinho
carrinho.push(frutas[1]);
console.log(carrinho);