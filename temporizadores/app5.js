function acao(){
    document.write("Executando")
}




// criando um temp que executa de tempo em tempo
setInterval(acao,1000); // vai receber dois parâmetros
// mil vale 1 seg   é possivel criar uma variavel para conseguir parar a execução

//criando a variavel
var timer = setInterval(acao,1000);



//executada a função apenas 1 vez
setTimeout(acao, 3000); // recebe a função e o tempo
