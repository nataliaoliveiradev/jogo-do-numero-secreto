alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);

// mostra o núumero secreto
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
console.log("Valor do chute:", chute);

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

//enquanto chute não for igual
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
            break;
        } else { 
         if (chute > numeroSecreto) { 
            alert(`O número secreto é menor que ${chute}`);
         } else { 
            alert(`O número secreto é maior que ${chute}`);
}
}
    //tentativas = tentatvas + 1
    tentativas ++; 
} 

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);

// if (tentativas> 1) { 
   // alert(`Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas`);
// } else  { 
   // alert(`Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa`);
//}



