const notaFinal = 6;
const faltas = 2;
const advertencias = 0;

if( notaFinal < 7 && faltas > 4) {
    console.log('reprovado, boas festas');
} else{
    console.log('Não foi reprovado por falta');
}

if( faltas >= 2 && !advertencias  ){
     console.log('recebeu bonus');
} else{
    console.log('nao recebeu bonus');
}
