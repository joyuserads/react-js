// Criando um array

const lista = [1,2,3,4,5,6];

// Usando a função map para percorrer todos os itens do vetor da nossa lista e retornar algo que queremos fazer
const novaLista = lista.map(function(item){ // chamamos a função map passando outra função e um parametro item que vai percorrer a lista
    return item * 5; // ao passar os itens, vai multiplicar por 5
});

console.log(novaLista); // [5, 10, 15, 20, 25, 30]


/*-------------------------------------------------------------------------------------------------------------------------------*/ 

// Usando a função index para percorrer todos os itens do vetor da nossa lista e somar com index 
// passando index
const novaLista1 = lista.map(function(item,index){ // chamamos a função map passando outra função e um parametro item que vai percorrer a lista / e parametro index que é a posição
    return item  + index; // ao passar os itens + index faz por exemplo: 1+posição do array (0+1=1, 1+2=3, 2+3= 5, 3+4=7... e assim vai)
});

console.log(novaLista1); // (6) [1, 3, 5, 7, 9, 11]


/*-------------------------------------------------------------------------------------------------------------------------------*/ 

// Usando a função reduce para pegar o total que vale 0 e somar com o proximo item
//  reduce --- seleciona todos os itens da lista de forma mais prática
const soma = lista.reduce(function(total, proximo){

    //total = 0
    return total + proximo; // pegando total e somando com proximo item

});

console.log(soma); // exibe a soma do array

/*-------------------------------------------------------------------------------------------------------------------------------*/ 
// Usando a função find para encontrar o item da nossa função
// passando find ----- 
const find = lista.find(function(item) {
    return item === 6; // Ele retorna 6 caso tenha
});

console.log(find); // ele me retorna como um prompt em meu navegador