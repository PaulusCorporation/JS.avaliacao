function calcularAnosParaUltrapassar(populacaoA, taxaA, populacaoB, taxaB) {
    let anos = 0;
    while (populacaoA < populacaoB) {
        populacaoA += populacaoA * (taxaA / 100);
        populacaoB += populacaoB * (taxaB / 100);
        anos++;
    }
    return anos;
}


let populacaoA = 80000;
let populacaoB = 200000;
let taxaA = 3.0;
let taxaB = 1.5;
let tempoNecessario = calcularAnosParaUltrapassar(populacaoA, taxaA, populacaoB, taxaB);


console.log(`Serão necessários ${tempoNecessario} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
