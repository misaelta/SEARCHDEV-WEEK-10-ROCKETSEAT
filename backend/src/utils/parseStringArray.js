module.exports = function parserStringArray (arrayString){
    const  techsArray = arrayString.split(',').map(tech=>tech.trim())

    return techsArray
}


