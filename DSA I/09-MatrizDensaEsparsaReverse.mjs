function MatrizDensaEsparsaReverse(matrizEsparsa, row, column){

    const matriz = Array.from({length: row}, () => Array(column).fill(0));

    for(const {row, column, value} of matrizEsparsa){
        matriz[row][column] = value;
    }

    return matriz.map((row) => row.join("  ")).join("\n");

}

const matrizEsparsa = [
    { row: 3, column: 0, value: 3},
    { row: 1, column: 1, value: 8},
    { row: 0, column: 3, value: 5},
];

console.log(MatrizDensaEsparsaReverse(matrizEsparsa, 4, 4));