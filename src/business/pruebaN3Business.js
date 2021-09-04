module.exports = class PruebaN3Business {

    constructor(filas,columnas){ 
        this.filas = filas;
        this.columnas = columnas;
        this.contador = 0;
        this.newArr = [];
        this.letras = ['EAEAE','AIIIA','EIOIE','AIIIA','EAEAE'];
    }

    create() {
        let cas1="",cas2="",cas3="",cas4="",cas5="",cas6="",cas7="",cas8="";
        for(let f=0; f < this.filas; f++) {
            let letras = this.letras[f].split('');
            for(let c=0; c < this.columnas; c++) {
                if(f==0 && c==0) cas1+=letras[0];
                if(f==1 && c==1) cas1+=letras[1];
                if(f==2 && c==2) cas1+=letras[2];

                if(f==0 && c==2) cas2+=letras[2];
                if(f==1 && c==2) cas2+=letras[2];
                if(f==2 && c==2) cas2+=letras[2];

                if(f==0 && c==4) cas3+=letras[2];
                if(f==1 && c==3) cas3+=letras[2];
                if(f==2 && c==2) cas3+=letras[2];

                if(f==2 && c==2) cas4+=letras[2];
                if(f==3 && c==1) cas4+=letras[3];
                if(f==4 && c==0) cas4+=letras[2];

                if(f==2 && c==2) cas5+=letras[2];
                if(f==3 && c==3) cas5+=letras[3];
                if(f==4 && c==4) cas5+=letras[2];

                if(f==2 && c==2) cas6+=letras[2];
                if(f==2 && c==3) cas6+=letras[3];
                if(f==2 && c==4) cas6+=letras[4];

                if(f==2 && c==0) cas7+=letras[0];
                if(f==2 && c==1) cas7+=letras[1];
                if(f==2 && c==2) cas7+=letras[2];

                if(f==2 && c==2) cas8+=letras[2];
                if(f==2 && c==3) cas8+=letras[3];
                if(f==2 && c==4) cas8+=letras[4];
            }
        }
        cas1 = cas1.split('').reverse().join('');
        cas2 = cas2.split('').reverse().join('');
        cas3 = cas3.split('').reverse().join('');
        cas7 = cas7.split('').reverse().join('');
        this.newArr.push(cas1,cas2,cas3,cas4,cas5,cas6,cas7,cas8);
        for(let k =0; k < this.newArr.length; k++) {
            let resp = this.caracteresRepetidos(this.newArr[k]);
            if(resp==1) this.contador++;
        }
        return { msg : "Numero de veces de OIE en la prueba 3", veces : this.contador};    
    }

    caracteresRepetidos(str) {
        let ocurrencias = 0;
        if (str.includes("OIE"))
            ocurrencias = ocurrencias+1;
        return ocurrencias;
    }
}