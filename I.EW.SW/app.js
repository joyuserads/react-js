// inclues      endsWith        startWith


/* O include vai verificar se aquilo que digitamos possui dentro do que estamos mandando (seja strings ou arrays)*/ 

let nomes = ['Joyce', 'Vera', 'Raquel'];
//vamos verificar se dentro desse nome possui Joyce
nomes.includes('Joyce'); // verificando quem eu quero procurar

console.log(nomes.includes('Joyce')); // retorna true no meu console
console.log(nomes.includes('Vera Lucia')); // retorna false no meu console

// sofisticando meu código:
if(nomes.includes('Joyce')){
    console.log('Joyce está na lista')
}else{
    console.log('Esse nome não está listado')
}

/* O starWith vai verificar se começa com aquilo que estamos passando  */ 
//console.log(pessoa.startsWith('a'));
let nome1 = 'Joyce'
console.log(nome1.startsWith('Joy'));

/* O endWith  vai verificar se termina com o que estamos passando*/ 
let pessoa = 'Raquel';
console.log(pessoa.endsWith('uel')); // retorna true pois estamos passando a ultima letra do nome

