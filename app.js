const fs = require('fs')
const validator = require('validator')
const name = require('./utils')
const yargs = require('yargs')

// console.log(validator.isEmail('asdf@gmail.com'))

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('adding a new note')
    }
})

console.log(yargs.argv)