var tablero=[[-1, 0, 0, 0],
                [0 , 0, 0, 0],
                [0 ,-1, 0, 0],
                [0 , 0, 0, 0]];

var buscaminas = new Buscaminas(tablero);
buscaminas.calcularMinasAdyacentes();
buscaminas.printTablero();
/* Resultado esperado en consola:
    [-1, 0, 0, 0]
    [ 0, 0, 0, 0]
    [ 0,-1, 0, 0]
    [ 0, 0, 0, 0]

    [[0,0,-1,0],
    [0,-1,-1,0]];

    [[-1,-1,-1],
    [-1,0,-1]];

    [[0, -1],
    [0, -1],
    -1, 0]];        
*/

buscaminas.printMinasAdyacentes();
/* Resultado esperado en consola:
    [-1, 1, 0, 0]
    [ 2, 2, 1, 0]
    [ 1,-1, 1, 0]
    [ 1, 1, 1, 0]

    [[1,3,-1,2],
    [1,-1,-1,2]];

    [[-1,-1,-1],
    [-1,5,-1]];

    [[2, -1],
    [3, -1],
    [-1, 2]];
*/


/* Otros tableros para probar
    var tablero=[[-1, 0, 0, 0],
                [0 , 0, 0, 0],
                [0 ,-1, 0, 0],
                [0 , 0, 0, 0]];

    var tablero=[[0,0,-1,0],
                [0,-1,-1,0]];

    var tablero=[[-1,-1,-1],
                [-1,0,-1]];

    var tablero = [[0, -1],
                  [0, -1],
                 [-1, 0]];
*/
