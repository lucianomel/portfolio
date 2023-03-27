import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {inspect} from "util";
import styles from '@/styles/Gallery.module.css'
import Image from "@/components/UI/Image/Image";


const Gallery = () => {
    const [fileContents, setFileContents] = useState<string[] | null>(null);
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
    // @ts-ignore
    function handleImageClick(event) {
        event.target.classList.toggle(styles.enlarged);
    }
    // @ts-ignore
    return (
        <div>
            <div className={"container"}>
                <Image src={"/images/remove.png"} alt={"turn-back"}
                       className={styles.backIcon} closeOnClick={true} />
                <Link href={"/"}><Image src={"/images/turn-back.png"} alt={"turn-back"}
                                        className={styles.backIcon} /></Link>
                <h1 className="main_title"> Project&apos;s Gallery </h1>
            </div>
            <div className="image-grid">
                {fileContents.map(img=><span className={"m-3 "+styles.imageContainer} key={Math.random()}>
                    <img className={styles.image}  src={"proyect_gifs/"+img} width={200} alt={img} onClick={handleImageClick} ></img>
                </span>)}
            </div>

        </div>
    );
};

export default Gallery;
