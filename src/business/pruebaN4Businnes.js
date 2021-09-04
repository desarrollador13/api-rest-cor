module.exports = class PruebaN4Business {

    constructor(filas,columnas){ 
        this.filas = filas;
        this.columnas = columnas;
        this.contador = 0;
        this.newArr = [];
        this.letras = ['OX','IO','EX','II','OX','IE','EX'];
    }

    create() {
        this.contador = 0;
        this.newArr = [];
        let cas1="",cas2="",cas3="";
        for(let f=0; f < this.filas; f++) {
            let letras = this.letras[f].split('');
            for(let c=0; c < this.columnas; c++) {
                if(f==0 && c==0) cas1+=letras[0];
                if(f==1 && c==0) cas1+=letras[0];
                if(f==2 && c==0) cas1+=letras[0];

                if(f==2 && c==0) cas2+=letras[0];
                if(f==3 && c==0) cas2+=letras[0];
                if(f==4 && c==0) cas2+=letras[0];

                if(f==4 && c==0) cas3+=letras[0];
                if(f==5 && c==0) cas3+=letras[0];
                if(f==6 && c==0) cas3+=letras[0];
            }
        }
        cas2 = cas2.split('').reverse().join('');
        this.newArr.push(cas1,cas2,cas3);
        for(let k =0; k < this.newArr.length; k++) {
            let resp = this.caracteresRepetidos(this.newArr[k]);
            if(resp==1) this.contador++;
        }
        return { msg : "Numero de veces de OIE en la prueba 4", veces : this.contador};    

    }

    caracteresRepetidos(str) {
        let ocurrencias = 0;
        if (str.includes("OIE"))
            ocurrencias = ocurrencias+1;
        return ocurrencias;
    }
}
