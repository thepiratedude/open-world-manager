const fs = require ('fs');

const writeAndAppend = () => {
    console.log("Writing and appending to file");
    fs.writeFileSync('notepad.txt', 'I live in Florece.');
    fs.appendFileSync('notepad.txt', ' I want to try create a simple notepad core app');
}

module.exports = writeAndAppend
