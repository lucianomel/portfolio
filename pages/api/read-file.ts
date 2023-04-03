import {readdirSync} from 'fs'
import path from 'path';

async function getFilesPaths(){
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'

    const projects_paths = ['proyect_node', 'proyect_python']
    let images:{[key:string]:string[]}={}
    projects_paths.forEach(path => {
        images[path] = []
    });
    projects_paths.forEach(proyect_path => {
        const projectImages = readdirSync(path.join(process.cwd(),"public",proyect_path))
        images[proyect_path].push(...projectImages)
        images[proyect_path].filter(image => `${baseUrl}/${image}`)
    })

    return images
}

export default async function handler(req:any, res:any) {
    try {
        res.status(200).json(await getFilesPaths());
    } catch (err) {
        console.log('Unable to scan directory: ' + err);
        res.status(500).json({ error: 'Unable to scan directory' });
    }
}
