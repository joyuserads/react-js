// Criando uma variavel que armazena nomes

var lista = ["Matheus", "Lucas", "Henrique", "João",15]

// manipulação de arrays

// Procurar um item na lista
lista.indexOf("Matheus");


//pra juntas minha lista com virgula
lista.join(",")

//pra juntas minha lista com barra
lista.join(" / ")

// comando pra eliminar o ultimo item do meu array
lista.pop();

//comando pra remover o primeiro item do array
lista.shift();

//comando para alterar um item do meu array
lista.indexOf("Lucas"); // buscamos a posição
lista[0] // encontrada a posição
lista [0] = "Joyce Santos Silva" // item alterado


//Adicionar um item na lista
lista.push("Mateo");

// manipulando o array fazendo comparações

// se henrique for > -1 (quando da -1 nao existe na lista)
if(lista.indexOf("Henrique") > -1){
    alert("Esse item está na lista!!!") // se tiver dentro dessa lista o item "Henrique"
}else{ // senao 
    alert("Opa não encontrado")
}

//OBS: Como Henrique está na lista o código irá executar
//maior que -1