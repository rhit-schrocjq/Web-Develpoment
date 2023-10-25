// const validator = require('validator');
// console.log(validator.isEmail('olga@example.com'));
// console.log(validator.isEmail('example.com'));
// console.log(validator.isURL('example.com'));
const chalk = require('chalk');
const success = chalk.green('success');
const failure = chalk.red.bold('failure');
console.log(success, ' and ', failure);
const yargs = require('yargs');
const notes = require('./notes.js');
// console.log(msg)
// const greenMsg = chalk.green.bold(msg);
// console.log(greenMsg);

yargs.command({
    command:'add',
    describe:'Adding note',
    builder: {
        title: {
           describe:'Note title',
           demandOption:true,
           type:'string'
        },
        body: {
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv) {
        //console.log(`Title: ${argv.title}`)
        //console.log(`Body: ${argv.body}`)
        notes.addNote(argv.title,argv.body)
    }
})
//console.log(yargs.argv)

yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    handler: function () {
        console.log('Removing a new note')
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function () {
        console.log('Listing all notes')
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading your note',
    handler: function () {
        console.log('Reading a note')
    }
})


yargs.parse()
