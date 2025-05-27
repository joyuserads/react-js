//Local Storage --> Dados ficam salvos mesmo que o usuario feche o navegador

/*

//criando 
localStorage.setItem("nome", "Matheus");

//puxando o nome
localStorage.getItem("nome");

// removendo
localStorage.removeItem("nome");

// outra forma de cadastrar
localStorage.nome = "Joyce";

//chamando
localStorage.nome;

*/

//colocando dentro de uma variavel
var nome = localStorage.nome;
console.log(nome);

var nome = '';

//fazendo uma comparação pra saber se tem um nome preenchido
if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome?");
    nome = localStorage.nome;
    document.getElementById('nome').innerHTML = nome;

}
