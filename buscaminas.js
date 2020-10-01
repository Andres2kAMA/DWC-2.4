class Buscaminas {

    //Creo tanto el tablero a comprobar, como el comprobado
    constructor(tablero) {
        this.tableroAComprobar = tablero;
        this.tableroComprobado = [];
    }

    //Método principal
    calcularMinasAdyacentes() {
        for (let i = 0; i < this.tableroAComprobar.length; i++) {
            this.tableroComprobado[i] = [];
            for (let j = 0; j < this.tableroAComprobar[i].length; j++) {

                //Creo las 4 variables necesarias
                var posicionI = i;
                var posicionJ = j;
                var limitesTablero = [];
                var limites = [];

                limitesTablero = this.devolverLimitesDelTablero();

                limites = this.devolverLimites(posicionI, posicionJ, limitesTablero);

                if (this.tableroAComprobar[i][j] == -1) {
                    this.tableroComprobado[i][j] = -1;
                } else {
                    this.tableroComprobado[i][j] = this.comprobarMinas(limites);
                }
            }

        }
    }

    //Devuelvo los limetes del tablero
    devolverLimitesDelTablero() {
        var limitesTablero = [0, this.tableroAComprobar.length - 1, 0, this.tableroAComprobar.length ];
        return limitesTablero;
    }

    //Devuelvo los límites según la posición que quiero comprobar
    devolverLimites(posicionI, posicionJ, limitesTablero) {
        var limites = [];

        if (posicionI > limitesTablero[0] && posicionI < limitesTablero[1] && posicionJ > limitesTablero[2] && posicionJ < limitesTablero[3]) {
            limites[0] = posicionI - 1;
            limites[1] = posicionI + 1;
            limites[2] = posicionJ - 1;
            limites[3] = posicionJ + 1;

        } else if (posicionI == limitesTablero[0] || posicionI == limitesTablero[1]) {

            if (posicionI == limitesTablero[0]) {

                if (posicionJ == limitesTablero[2]) {
                    limites[0] = posicionI;
                    limites[1] = posicionI + 1;
                    limites[2] = posicionJ;
                    limites[3] = posicionJ + 1;

                } else {
                    limites[0] = posicionI;
                    limites[1] = posicionI + 1;
                    limites[2] = posicionJ - 1;
                    limites[3] = posicionJ + 1;
                }

            } else {

                if (posicionJ == limitesTablero[3]) {
                    limites[0] = posicionI - 1;
                    limites[1] = posicionI;
                    limites[2] = posicionJ - 1;
                    limites[3] = posicionJ;

                } else {
                    limites[0] = posicionI - 1;
                    limites[1] = posicionI;
                    limites[2] = posicionJ - 1;
                    limites[3] = posicionJ + 1;
                }
            }

        } else if (posicionJ == limitesTablero[2] || posicionJ == limitesTablero[3]) {

            if (posicionJ == limitesTablero[2]) {
                limites[0] = posicionI - 1;
                limites[1] = posicionI + 1;
                limites[2] = posicionJ;
                limites[3] = posicionJ + 1;

            } else {
                limites[0] = posicionI - 1;
                limites[1] = posicionI + 1;
                limites[2] = posicionJ - 1;
                limites[3] = posicionJ;
            }
        }

        return limites;
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

