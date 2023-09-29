// este modulo (index.js) tiene como objetivo recibir el input por parte 
// del usuario, entenderlo y delegar la responsabilidad de las operaciones
// al modulo pelis.js

// traer los terminos de las pelis.js
const operaciones = require("./pelis.js")

// funcion parsearTerminos
function parsearTerminos(texto) {
    var termino = ""

    texto.forEach(function (item){
        if (item.startsWith("--")) {
            termino += item.slice(2)
        }
        else {
            termino += item
        }
    })
    return termino
    }

function pasarArgumentos(texto) {
    var devolverPeli = []
    if (texto == "") {
        var devolverPeli = operaciones.empty()
    }
    else if (texto.slice(0,6) == "search") {
        var devolverPeli = operaciones.search(argumentosParseados.slice(7))
    }
    else if (texto.slice(0,3) == "tag") {
        var devolverPeli = operaciones.tag(argumentosParseados.slice(4))
    }
    else if (texto.slice(0,4) == "sort") {
        if (texto.slice(5) == "ranting") {
            var devolverPeli = operaciones.sortear("rating")
        }
        else if (texto.slice(5) == "title") {
            var devolverPeli = operaciones.sortear("title")
        }
    }
    
    return devolverPeli
}



function main(){
    const soloArgumentos = process.argv.slice(2)
    const argumentosParseados = parsearTerminos(soloArgumentos)
    const resultado = pasarArgumentos(argumentosParseados)

    console.log(resultado)
    
}

main()
