class MatrizDensaEsparsa{
    constructor(row, column){
        this.row = row;
        this.column = column;
        this.data = [];
    }

    insert(row, column, value){
        if (
            row >= 0 && row < this.row &&
            column >= 0 && column < this.column &&
            value != 0
        ) {
            this.data.push({row, column, value});
        } else if (value != 0) {
            throw new Error(`Invalid row or column index: (${row}, ${column})`);
        }
    }

    print(){
        for (const item of this.data){
            console.log(`linha: ${item.row}, column: ${item.column}, Value: ${item.value}`);
        }
    }
}

const matriz = new MatrizDensaEsparsa(4, 4); // matriz 4x4
matriz.insert(0, 0, 0);
matriz.insert(0, 1, 0);
matriz.insert(0, 2, 0);
matriz.insert(0, 3, 5);
matriz.insert(1, 0, 0);
matriz.insert(1, 1, 8);
matriz.insert(1, 2, 0);
matriz.insert(1, 3, 0);
matriz.insert(2, 0, 0);
matriz.insert(2, 1, 0);
matriz.insert(2, 2, 0);
matriz.insert(2, 3, 0);
matriz.insert(3, 0, 3);
matriz.insert(3, 1, 0);
matriz.insert(3, 2, 0);
matriz.insert(3, 3, 0);

matriz.print();