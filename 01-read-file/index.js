const fs = require('fs');
const path = require('path');

const { stdout } = process;
const filePath = path.resolve(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath,  'utf-8' );
let streamData = '';

readStream.on('data', (data) => stdout.write(data));
