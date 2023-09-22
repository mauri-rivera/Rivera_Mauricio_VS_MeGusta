let contador = 0;

function sumarLike() {
    let numeroLike = document.querySelector(".cantidadLike");
    let textoLike = numeroLike.innerHTML;

    let totalLike = contarLike(textoLike.length, textoLike);
    
    document.querySelector(".cantidadLike").innerHTML = `${totalLike} like(s)`;
}

function sumarLikePorUsuario(elemento) {
    let identificador = elemento.id;
    let botonLike = document.querySelector(`#${identificador}`);
    let numeroLike = botonLike.previousElementSibling;
    let textoLike = numeroLike.innerHTML;
    let totalLike = contarLike(textoLike.length, textoLike);

    numeroLike.innerHTML = `${totalLike} like(s)`;
}

function contarLike(cantidad, texto) {
    if (cantidad === 9) {
        contador = parseInt(texto.substring(0, 1));
        contador++;
    }
    else if (cantidad === 10) {
        contador = parseInt(texto.substring(0, 2));
        contador++;
    }
    else if (cantidad === 11) {
        contador = parseInt(texto.substring(0, 3));
        contador++;
    }

    return contador;
}