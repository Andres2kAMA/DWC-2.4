class Buscaminas {

    //Creo tanto el tablero a comprobar, como el comprobado
    constructor(tablero) {
        this.tableroAComprobar = tablero;
        this.tableroComprobado = [];
    }

    //Método principal
    calcularMinasAdyacentes() {
        /*
        Creo los arrays donde voy a introducir los límites.
        En el primero voy a introducir los límites del tablero. Por tanto, como el tablero siempe es el mismo,
        sólo se ejecutará una vez
        En el segundo voy a introducir los límites de cada posición, siempre y cuandoe esta no tenga un valor de -1
        */
        var limitesTablero = [];
        var limites = [];

        limitesTablero = this.devolverLimitesDelTablero();

        for (let i = 0; i < this.tableroAComprobar.length; i++) {
            this.tableroComprobado[i] = [];

            for (let j = 0; j < this.tableroAComprobar[i].length; j++) {
                if (this.tableroAComprobar[i][j] == -1) {
                    this.tableroComprobado[i][j] = -1;
                } else {
                    limites = this.devolverLimites(i, j, limitesTablero);
                    this.tableroComprobado[i][j] = this.comprobarMinas(limites);
                }
            }

        }
    }

    //Devuelvo los limetes del tablero
    devolverLimitesDelTablero() {
        var limitesTablero = [this.tableroAComprobar.length - 1, this.tableroAComprobar[0].length - 1];
        return limitesTablero;
    }

    //Devuelvo los límites según la posición que quiero comprobar
    devolverLimites(posicionX, posicionY, limitesTablero) {
        var limites = [];

        if (posicionX > 0 && posicionX < limitesTablero[1] && posicionY > 0 && posicionY < limitesTablero[3]) {
            limites[0] = posicionX - 1;
            limites[1] = posicionX + 1;
            limites[2] = posicionY - 1;
            limites[3] = posicionY + 1;

        } else {
            if (!this.hayCasillasArriba(posicionX)) {
                if (!this.hayCasillasIzquierda(posicionY)) {
                    limites[0] = posicionX;
                    limites[1] = posicionX + 1;
                    limites[2] = posicionY;
                    limites[3] = posicionY + 1;

                } else if (!this.hayCasillasDerecha(posicionY, limitesTablero[1])){
                    limites[0] = posicionX;
                    limites[1] = posicionX + 1;
                    limites[2] = posicionY - 1;
                    limites[3] = posicionY + 1;
                }else{
                    limites[0] = posicionX;
                    limites[1] = posicionX +1;
                    limites[2] = posicionY - 1;
                    limites[3] = posicionY + 1;
                }

            } else if (!this.hayCasillasAbajo(posicionX, limitesTablero[0])) {
                if (!this.hayCasillasIzquierda(posicionY)) {
                    limites[0] = posicionX - 1;
                    limites[1] = posicionX;
                    limites[2] = posicionY - 1;
                    limites[3] = posicionY + 1;

                } else if (!this.hayCasillasDerecha(posicionY, limitesTablero[1])) {
                    limites[0] = posicionX - 1;
                    limites[1] = posicionX;
                    limites[2] = posicionY - 1;
                    limites[3] = posicionY;

                } else {
                    limites[0] = posicionX - 1;
                    limites[1] = posicionX;
                    limites[2] = posicionY - 1;
                    limites[3] = posicionY + 1;
                }

            } else if (!this.hayCasillasIzquierda(posicionY)) {
                limites[0] = posicionX - 1;
                limites[1] = posicionX + 1;
                limites[2] = posicionY;
                limites[3] = posicionY + 1;

            } else {
                limites[0] = posicionX - 1;
                limites[1] = posicionX + 1;
                limites[2] = posicionY - 1;
                limites[3] = posicionY;
            }
        }
        
        return limites;
    }

    hayCasillasArriba(posicionX) {
        return (posicionX != 0);
    }
    hayCasillasAbajo(posicionX, ultimaFila) {
        return (posicionX != ultimaFila);
    }
    hayCasillasIzquierda(posicionY) {
        return (posicionY != 0);
    }
    hayCasillasDerecha(posicionY, ultimaColumna) {
        return (posicionY != ultimaColumna);
    }

    //Compruebo las minas alrededor de la posición
    comprobarMinas(limites) {
        var contador = 0;

        for (let i = limites[0]; i <= limites[1]; i++) {
            for (let j = limites[2]; j <= limites[3]; j++) {
                if (this.tableroAComprobar[i][j] == -1) {
                    contador++;
                }
            }
        }
        return contador;
    }

    //Imprimo el tablero sin comprobar
    printTablero() {
        console.log("Tablero sin comprobar");
        for (let i = 0; i < this.tableroAComprobar.length; i++) {
            console.log(this.tableroAComprobar[i]);
        }
        console.log(' ');
    }

    //Imprimo el tablero comprobado
    printMinasAdyacentes() {
        console.log("Tablero comprobado");
        for (let i = 0; i < this.tableroAComprobar.length; i++) {
            console.log(this.tableroComprobado[i]);
        }
    }

}

