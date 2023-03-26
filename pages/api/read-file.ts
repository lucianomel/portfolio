import fs from 'fs';
import path from 'path';

export default async function handler(req:any, res:any) {
    let IMAGES : string[] = []
    try {
        const files = await readDirAsync(process.cwd()+"/public/proyect_gifs");
        files.forEach(function (file) {
            const extname = path.extname(file);
            if (extname === '.jpg' || extname === '.png' || extname === '.gif') {
                IMAGES.push(file)
            }
        });
        res.status(200).json({ contents: IMAGES });
    } catch (err) {
        console.log('Unable to scan directory: ' + err);
        res.status(500).json({ error: 'Unable to scan directory' });
    }
}

function readDirAsync(dirname: string) {
    return new Promise<string[]>((resolve, reject) => {
        fs.readdir(dirname, function(err, files) {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}





