const fs = require('fs')

const getnotes = function(){
    return "your notes"
}

const addNote = function(title, body){
    const notes = loadNotes()
    console.log(notes)
}

const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString(dataBuffer)
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
   
}

module.exports = {
    getnotes: getnotes,
    addNote: addNote
}