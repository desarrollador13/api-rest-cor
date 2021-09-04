module.exports = class PruebaN1Business {

    constructor(filas,columnas){ 
        this.filas = filas;
        this.columnas = columnas;
        this.contador = 0;
        this.rowArr = [];
        this.letras = ['OIE','IIX','EXE'];
    }

    create() {
        this.contador = 0;
        this.rowArr = [];
        let row1 = "", row2 = "", row3 = "", diag = "";
        for(let i= 0; i < this.filas; i++) {
            let letras = this.letras[i].split('');
            for(let j =0; j < this.columnas; j++) {
                if(i==0 && j==0) diag+=letras[0];
                if(i==1 && j==1) diag+=letras[1];
                if(i==2 && j==2) diag+=letras[2];
                if(letras[1]=='O') diag+=letras[0];
                if(letras[2]=='O') diag+=letras[0];
                if(j==1){
                    row1+=letras[0];
                    row2+=letras[1];
                    row3+=letras[2];
                }
            }
            let res = this.caracteresRepetidos(this.letras[i]);
            if(res==1) this.contador++;
        }
        this.rowArr.push(row1,row2,row3);
        for(let k =0; k < this.rowArr.length; k++) {
            let resp = this.caracteresRepetidos(this.rowArr[k]);
            if(resp==1) this.contador++;
        }
        if(diag=='OIE') this.contador++;
        return { msg : "Numero de veces de OIE en la prueba 1", veces : this.contador};
    }

    caracteresRepetidos(str) {
        let ocurrencias = 0;
        if (str.includes("OIE"))
            ocurrencias = ocurrencias+1;
        return ocurrencias;
    }
}