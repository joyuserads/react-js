// criando uma função sem rest operator

/*function minhaLista(nomes){ // passando parametro nomes através da função



    // exibindo os nomes que esta recebendo a função
    console.log(nomes);
} */

// passando os nomes da função
//  minhaLista("Joyce", "Raquel", "Pietra") // exibe apenas o primeiro objeto da lista


/*-------------------------------------------------------------------------------------------------------------------------*/
// criando uma função com rest operator
function minhaLista(...nomes){     // passando parametro nomes através da função e utilizando o Spread Operator para exibir todos os nomes na chamada da função

    // exibindo os nomes que esta recebendo a função
    console.log(nomes);
}

// passando os nomes da função
minhaLista("Joyce", "Raquel", "Pietra") // exibe todos os nomes  

/*-------------------------------------------------------------------------------------------------------------------------*/

// criando uma função com rest operator
function minhaLista(...numeros){     // passando parametro numeros através da função e utilizando o Spread Operator para exibir todos os numeros na chamada da função

    // exibindo os numeros que esta recebendo a função
    console.log(numeros);
}

// passando os numeros da função
minhaLista(1,2,3,4,5) // exibe todos os numeros  


/*-------------------------------------------------------------------------------------------------------------------------*/


/*
// Criando função para cadastrar usúario com Spread Operator
function cadastrar(usuarios, ...novosUsuarios){
    //exibindo todos nomes
    console.log(usuarios, ...novosUsuarios );
}

// criando variaveis 
let usuarios = ["Joyce", "Yuri"];
let novosUsuarios = cadastrar(usuarios, "Raquel", "Pietra");

*/

// Criando função para cadastrar usúario com Spread Operator e Rest
function cadastrar(usuarios, ...novosUsuarios){ // paramentro usuarios e novosUsuarios
    //exibindo todos nomes 
    
    //criando um array
    let totalUsuarios = [
        ...usuarios,        //Rest
        ...novosUsuarios
    ];

    // retornar todos os nomes no console como um array
    return console.log(totalUsuarios);



}

// criando variaveis 
let usuarios = ["Joyce", "Yuri"];
let novosUsuarios = cadastrar(usuarios, "Raquel", "Pietra");