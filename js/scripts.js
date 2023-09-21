let contador = 0;

function sumarLike() {
    let numeroLike = document.querySelector(".cantidadLike");
    let textoLike = numeroLike.innerHTML;

    if (contador >= 0 && contador <= 9) {
        contador = parseInt(textoLike.substring(0, 1));
        contador++;
    }
    else if (contador >= 10 && contador <= 99) {
        contador = parseInt(textoLike.substring(0, 2));
        contador++;
    }
    else if (contador >= 100 && contador <= 999) {
        contador = parseInt(textoLike.substring(0, 3));
        contador++;
    }
    
    document.querySelector(".cantidadLike").innerHTML = `${contador} like(s)`;
}