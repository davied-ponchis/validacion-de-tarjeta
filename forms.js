function ValidarTarjetaCredito() {

    let valor = document.querySelector("#numero").value;
    let p_resultado = document.querySelector(".resultado");
    p_resultado.style.display = "block";
    let mensaje = "";
    let numTarjeta = Number(valor);

    let tarjeta = [];
    tarjeta["valida"] = false;
    tarjeta["numero"] = valor;

    if (valor.length == 16) { //si tiene 16 digitos
        if (!isNaN(numTarjeta)) { //si es numero( si retorna null No es numero, si es diferente de NULL entoces es numero)
            let i;
            let num = valor[0];
            let digitosIgual = true;
            for (i = 0; i < valor.length; i++) {

                if (num != valor[i]) { //si cumple que existan al menos dos digitos diferentes
                    digitosIgual = false;
                    continue;
                }
            }
            if (digitosIgual == false) { //si es el mismo digito
                tarjeta["valida"] = true;
                tarjeta["numero"] = numTarjeta;


            } else { //si tiene digitos diferentes
                tarjeta["error"] = "El numero de tarjeta no debe contener el mismo digito";

                mensaje = " ,  Erorr: " + tarjeta["error"];
            }

        } else { //si no es numero
            tarjeta["error"] = "El numero de tarjeta contiene caracteres";

            mensaje = " ,  Erorr: " + tarjeta["error"];

        }

    } else { //si la longitud es diferente de 16
        tarjeta["error"] = "Longitud erronea";

        mensaje = " ,  Erorr: " + tarjeta["error"];
    }

    //Mostramos los resultados del objeto
    mensaje = "Valida: " + tarjeta["valida"] + " ,  Numero: " + tarjeta["numero"] + mensaje;
    p_resultado.textContent = mensaje;
}