// criando função de numero utilizando reduce

function adicionar(...numeros){
    let total = numeros.reduce(function (total, proximo){ // passando a função dentro de let
        return total + proximo;
    });
    console.log(total); //15
}

adicionar(1,2,3,4,5);


// reduzindo código =>
function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => { // passando a função dentro de let (=>)
        return total + proximo;
    });
    console.log(total); //21
}

adicionar(1,2,3,4,5,6); 

//reduzindo mais ainda meu cod
function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => total + proximo); // passando a função dentro de let (=>)

    console.log(total);  // 28
}

adicionar(1,2,3,4,5,6,7); 


// criando a função definindo variaveis, mas usando chaves.
function adicionar(...numeros){
    let total = numeros.reduce((total, proximo)  => { // passando a função dentro de let (=>)
        //definindo variavel soma
        let soma = total + proximo;
        return soma;
    });

    console.log(total);  //36
}

adicionar(1,2,3,4,5,6,7,8); 