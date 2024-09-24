const { readFileSync } = require('fs')
const { program } = require('commander')

program.command("wwcw").description("Return number of lines, words, bytes in a file")

program.option("-c, --bytes <FILENAME>", "Returns the number of bytes in a file")

program.parse(process.argv)
const options = program.opts()

if (options.bytes) {
    console.log(noOfBytes(options.bytes) + " " + options.bytes)
}

function noOfBytes(file) {
    return readFileSync(file).length
}

