// Criando uma varivel chamada nome e atribuindo um valor a ela
//var nome = "Matheus"

// chamando console.log
//console.log(nome)


//Criando uma variavel para definir idade e chamando o prompt
//var idade = prompt("Digite Sua Idade");

//quando chamamos document estamos nos referindo a parte do nosso arquivo


//Criando função entrar

function entrar(){
    //Dentro das chaves vamos escrever a nossa função


    var area = document.getElementById('area'); // passando a id da div ' area ' que queremos que seja alterada

    // Dentro de texto, irá armazenar o que sera digitado
    var texto = prompt('Digite seu nome?');

    //area.innerHTML = texto;
    area.innerHTML = 'Bem vindo' + texto;


    // vamos usar if para comparar o texto
    if(texto == '' || texto == null){ // se o texto for igual a vazio ou texto for igual a nulo
        alert('Digite seu nome novamente!') // exibe
         area.innerHTML = 'Bem vindo.....' ; 
    }else{// senão
         area.innerHTML = 'Bem vindo' + texto; // exibe 
    } 

}

// Criando a função entrar2
function entrar2(nome){
    //Dentro das chaves vamos escrever a nossa função
    var area = document.getElementById('area2'); // passando a id da div ' area ' que queremos que seja alterada

    // Dentro de texto, irá armazenar o que sera digitado
    var texto = prompt('Digite seu sobrenome?');

     area.innerHTML = nome + " " + texto; // exibe 
}

//passar como parametro a idade concatenando nome + sobrenome + idade
function entrar3(idade){
    var area = document.getElementById('area3'); // passando a id que queremos que seja alterada

    //dentro do texto, irá armazenar o que será digitado
    var texto =  prompt('Digite a sua idade?')

    area.innerHTML = idade + " " + texto;



}