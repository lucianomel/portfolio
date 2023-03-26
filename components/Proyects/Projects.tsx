import styles from "@/styles/UI.module.css";
import Link from 'next/link';


export default function Projects() {
    return (
        <>
            <h2 className={styles["subtitle"]}>Some of my projects made with these technologies</h2>
            <div className="card" >
                {/*<img src="https://d1q6f0aelx0por.cloudfront.net/product-logos/library-python-logo.png" className="card-img-top" alt="Python Logo" />*/}
                <div className="card-body">
                    <p>
                        <img src="/twitter.svg" width={200}/>
                        <Link href="https://twitter.com/Byte255Coding" className="card-text" target="_blank">My twitter account</Link>🔥🔥
                    </p>
                    <p>
                        <img src="/github-original-wordmark.svg" width={200}/>
                        <Link href="https://github.com/lucianomel" className="card-text" target="_blank">My github account</Link>🌝🌝
                    </p>
                </div>
            </div>
        </>
)
}