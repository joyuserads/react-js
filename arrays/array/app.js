// descontruindo um array

let pessoa = ['Joyce', 'Santos' , 22];

//vamos pegar pela posição do array
let { 1: sobrenome } = pessoa; // chamando a posição 1 - 'Santos'

//passando mais de uma variavel, pegando a posição 0 e 2
let { 0: primeironome, 2: idade} = pessoa;

// pegando todos eles

let [nome, sobreNome, idade2] = pessoa;