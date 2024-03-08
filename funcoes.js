// Parametros ou Argumentos
// retorno

function exibeInfosEstudante (nome, nota){
   console.log(`O nome é ${nome} e a nota é ${nota}`);
}
exibeInfosEstudante('Caroline', 10);
exibeInfosEstudante('Ana' , 7);

// declaração da função
function somarDoisNumeros(numA, numB) {
    return numA + numB;
   }
   
   // execução (ou chamada) da função
   somarDoisNumeros(2, 2);
   
   // atribuindo o retorno de uma função a uma variável
   const resultado = somarDoisNumeros(2, 2);
   console.log(resultado);

   function saudacao(nome) {
    return `Olá, ${nome}!`;
}

const mensagem = saudacao("Maria");
console.log(mensagem);

   