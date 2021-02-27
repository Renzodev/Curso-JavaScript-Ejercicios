const caracteres = () =>{
    let cadena = prompt("Escriba un texto: ");
    let limite = prompt("Digite el limite de caracteres: ");

    console.log(cadena.substring(0,limite));
}
caracteres();
