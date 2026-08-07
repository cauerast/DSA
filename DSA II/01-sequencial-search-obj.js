import { objNomes } from '../data/vetor-obj-nomes.mjs';

function sequentialSearch(array, fnComp) {
    for (let i = 0; i < array.length; i++) {
        if (fnComp(array[i])) return i;
    }
    return -1;
}

function compName(name) {
    return (obj) => obj.first_name === name.toUpperCase();
}

const searchName = 'ALEXANDRE';

console.log(`index of ${searchName}`, sequentialSearch(objNomes, compName(searchName)));
