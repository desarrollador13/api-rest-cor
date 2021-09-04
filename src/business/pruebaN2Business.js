module.exports = class PruebaN2Business {

    constructor(filas,columnas){ 
        this.filas = filas;
        this.columnas = columnas;
        this.contador = 0;
        this.letras = ['EIOIEIOEIO'];
    }

    create() {
        this.contador = 0;
        let str = "";
        console.log(this.letras.length)
        for(let i= 0; i < this.filas; i++) {
            let letras = this.letras[i].split('');
            console.log(letras.length)
            for(let j =0; j < this.columnas; j++) {
                if(letras[j]=='O' && letras[j+1]=='I' && letras[j+2]=='E') {
                    str+=letras[j]+letras[j+1]+letras[j+2];
                    let res = this.caracteresRepetidos(str);
                    if(res==1) this.contador++;
                    str="";
                }
            }
            let reverse = this.letras[i].split('').reverse().join('');
            for(let k=0; k < letras.length; k++) {
                if(reverse[k]=='O' && reverse[k+1]=='I' && reverse[k+2]=='E') {
                    str+=reverse[k]+reverse[k+1]+reverse[k+2];
                    let resp = this.caracteresRepetidos(str);
                    if(resp==1) this.contador++;
                    str="";
                }
            }
        }
        return { msg : "Numero de veces de OIE en la prueba 2", veces : this.contador};
    }

    caracteresRepetidos(str) {
        let ocurrencias = 0;
        if (str.includes("OIE"))
            ocurrencias = ocurrencias+1;
        return ocurrencias;
    }
}