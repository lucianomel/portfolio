import React, {useEffect, useState} from 'react';
import Link from "next/link";

const Gallery = () => {
    const [fileContents, setFileContents] = useState(null);
    console.log("hellohellohellohellohellohellohellohellohellohellohellohellohellohellohello")
    useEffect(() => {
        async function fetchFileContents() {
            const response = await fetch('/api/read-file');
            const data = await response.json();
            setFileContents(data.contents);
        }
        fetchFileContents()
    }, []);
    if (!fileContents) {
        return <div className="white">Loading...</div>;
    }
    return (
        <div>
            <h1 className="main_title">Project's Gallery - <Link href={"/"}>turn back</Link></h1>
            <div className="container">
                {fileContents.map(img=><span className="m-3"><img key={Math.random()} src={"proyect_gifs/"+img} width={200} ></img></span>)}
            </div>

        </div>
    );
};

export default Gallery;
