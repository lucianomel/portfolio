import fs from 'fs';
import path from 'path';

const FOLDERS = ["node","python"]

export default async function handler(req:any, res:any) {
    let IMAGES : {[key: string]: string[];} = {}
    FOLDERS.forEach(folder => {
        IMAGES[folder] = []
    });
    try {
        await Promise.all(FOLDERS.map(async folder => {            
            const dirPath = "/public/proyect_"+folder;
            console.log(dirPath)
            if (!fs.existsSync(dirPath)) {
                throw new Error(`Directory does not exist: ${dirPath}`);
            }
            const files = await readDirAsync(dirPath);
            files.forEach(function (file) {
                const extname = path.extname(file);
                if (extname === '.jpg' || extname === '.png' || extname === '.gif') {
                    IMAGES[folder].push(file)
                }
            });
        }));
        res.status(200).json(IMAGES);
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