const fs = require('fs')
const validator = require('validator')
const notes = require('./notes.js')
const yargs = require('yargs')


//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//remove note commad
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function(){
        console.log('removing a new note')
    }
})

//show list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        console.log('your note lists')
    }
})

//read a note command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log('read a note')
    }
})

yargs.parse()