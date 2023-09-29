const index = require("./index");
const fs = require("fs");

function getDatos() {
    const datos = fs.readFileSync("./pelis.json")
    return JSON.parse(datos)
}

exports.getAll = function() {
    const datos = getDatos();
    return datos
}

const todos = getDatos();

exports.empty = function(argumentosParseados) {
    const vacio = operaciones.getAll()
    console.table(vacio)
      
}


exports.sortear = function sort(clave) {
    if (clave == 'rating') {
        var sorted = todos.sort(function (a,b) {
            return a.rating - b.rating
        })
    }   
    else if(clave == 'title') {
        var sorted = todos.sort(function(a,b) {
            var nombreA = a.title.toLowerCase();
            var nombreB = b.title.toLowerCase();
            if (nombreA < nombreB) return -1;
            else if (nombreA > nombreB) return 1;
            return 0;
        })
    }
    return sorted
}

exports.search = function search(textoParseado) {
    var devolverPeli = {}
    //console.log(todos[0]["title"])
    for (nombres in todos) {
        if (textoParseado == todos[nombres]["title"]) {
            devolverPeli = todos[nombres]
        }
    }
    return devolverPeli

}

exports.tag = function (textoParseado) {
    var pelisTag = []
    for (nombres in todos) {
        //console.log(todos[nombres]["tags"])
        if (todos[nombres]["tags"].includes(textoParseado)) {
            pelisTag.push(todos[nombres])
        }
    }
    return pelisTag
}