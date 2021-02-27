function leer(){//declarando funcion
    let cadena = prompt("Escriba un texto");//almacenando cadena de caracteres
    let espacioCadena = 0;//iterador inicializado
    let longitudCadena = cadena.length;//usando propiedad .length para saber cuando caracteres tiene la cadena en total
    for(espacio of cadena){//recorriendo la cadena con for of
        if(espacio.includes(" ")){//si es true
            espacioCadena++;//se le suma 1
        }
    }
    if(espacioCadena >=1){//si es true entonces hay espacios
        let caracteresTotal = longitudCadena - espacioCadena;//se restan los espacios a la cadena original
        console.log(`La cadena tiene ${longitudCadena} caracteres contando espacios y ${caracteresTotal} sin contar espacios.`);
    }
    else{//si es false entonces no hay espacios
        console.log(`La cadena tiene ${longitudCadena} caracteres`);
    }
}
leer();
