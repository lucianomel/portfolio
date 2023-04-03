import React, {useEffect, useState} from 'react';
import Link from "next/link";
import styles from '@/styles/Gallery.module.css'
import Image from "@/components/UI/Image/Image";
interface NodeLinks {
    node: {
      [key: string]: string;
    };
  }
  
const nodeLinks: NodeLinks = require('./links.json');

const Gallery = () => {
    const [fileContents, setFileContents] = useState< { [key: string]: string[] } | null>(null);
    
    useEffect(() => {
        async function fetchFileContents() {
            const response = await fetch('/api/read-file');
            const data = await response.json();
            setFileContents(data);
            console.log(data)
        }
        try{
            fetchFileContents()
        }catch(error){
            console.log("api call failed")
            console.log(error)
        }
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
                <h3 className='sub_title'>Python projects</h3>
            <div className={styles.imageGrid}>
                {fileContents.proyect_python.map(img=><span className={"m-3 "+styles.imageContainer} key={Math.random()}>
                    <img className={styles.image}  src={"proyect_python/"+img} width={200} alt={img} onClick={handleImageClick} ></img>
                </span>)}
            </div>
                <h3 className='sub_title'>Website projects</h3>
            <div className={styles.imageGrid}>
                {fileContents.proyect_node.map(img=><span className={"m-3 "+styles.imageContainer} key={Math.random()}>
                    <img className={styles.image}  src={"proyect_node/"+img} width={400} alt={img} onClick={handleImageClick} />
                    <a className={styles.link} href={nodeLinks.node[img]}  target="_blank" rel="noopener noreferrer">Go to site</a>
                </span>)}
            </div>

        </div>
    );
};

export default Gallery;
