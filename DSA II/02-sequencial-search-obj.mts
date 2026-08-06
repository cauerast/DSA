import { objNomes } from '../data/vetor-obj-nomes.mjs';

type NomeObj = {
    "first_name": string,
    "group_name": string,
    "classification": string,
    "frequency_female": number | null,
    "frequency_male": number,
    "frequency_total": number,
    "frequency_group": number,
    "ratio": number,
    "alternative_names": string | null 
}

function sequentialSearch<T>(array: T[], fnComp: (item: T) => boolean): number {
    for (let i = 0; i < array.length; i++) {
        if (fnComp(array[i])) return i;
    }
    return -1;
}

function compName(name: string) {
    return (obj: NomeObj) => obj.first_name === name.toUpperCase();
}

const searchName = 'ALEXANDRE';

console.log(`index of ${searchName}`, sequentialSearch(objNomes as NomeObj[], compName(searchName)));
