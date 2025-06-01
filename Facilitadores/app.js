/* Some verifica se algum, ou pelo menos um do que estamos passando */
let nomes = ['Joyce', 'Raquel', 'Pietra'];

console.log(nomes.some(nomes => nomes === 'Joyce')); // devolve um valor booelano (Se tiver pelo menos uma Joyce na lista, devolve true no meu console)
        //passamos Joyce, e ira retornar true
        //se eu passar João irá retornar false

/* Every devolve um callbeck como o some
    porém no every, todos precisam passar pela condição passada
*/ 

// criando um array de objetos
let pessoas = [
    {nome: 'Joyce', idade: 22},
    {nome: 'Raquel', idade: 46},    //objetos
    {nome: 'Pietra', idade: 11}
];
  
console.log(pessoas);


console.log(pessoas.every(nome => nome.idade >= 22)); // verificando se todos tem a idade igual ou maior que 22 anos
// me retorna false, pois a 'Pietra' retorna 11 anos.

//fazendo verificações dentro de if
if (pessoas.every(nome => nome.idade >= 22)) {
    // se maior de idade retorna:
    console.log('Todos os listado são maior de idade')
}else{  
    console.log('Hm.... Nem todos são maior de idade!')

}