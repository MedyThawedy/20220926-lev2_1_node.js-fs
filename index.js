// https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file
// https://bobbyhadz.com/blog/javascript-import-json-file

import importedData from './data.json' assert { type: 'json' };
import f from 'fs';
import { resolve } from 'path';

//console.log('1 . Imported Data')
//console.log(importedData);


// https://stackoverflow.com/questions/17883513/read-json-file-line-by-line

/* Old */

/*
f.readFile('./data.json', 'utf8', function (err, data) {
    if (err) {
        console.log('Error: ' + err);
        return;
    }
    console.log('2 . ');
    data = JSON.parse(data);


    f.writeFile(`./text.txt`, ((data[0].id + ' - ' + data[0].title + '\n') + (data[0].description + '\n' + '\n')), (err) => {
        if (err) console.log(err);
        console.log('datei geschrieben');
        for (let i = 1; i < data.length; i++) {
            f.appendFile('./text.txt', ((data[i].id + ' - ' + data[i].title + '\n') + (data[i].description + '\n' + '\n')), (err) => {
                if (err) console.log(err);
            })
        }
    })

});*/
/** New with Promise */
f.promises.readFile('./data.json', 'utf8')
    .then(data => {
        console.log('1. f.promises.readFile .then() = ', JSON.parse(data));
        data = JSON.parse(data);
        f.writeFile(`./text.txt`, ((data[0].id + ' - ' + data[0].title + '\n') + (data[0].description + '\n' + '\n')), (err) => {
            if (err) console.log(err);
            console.log('datei geschrieben');
            for (let i = 1; i < data.length; i++) {
                f.appendFile('./text.txt', ((data[i].id + ' - ' + data[i].title + '\n') + (data[i].description + '\n' + '\n')), (err) => {
                    if (err) console.log(err);
                })
            }
        })

    })
    .catch(err => console.log('Error: ', err));





