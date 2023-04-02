import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import List from "@/components/UI/List/list"
import {useEffect} from "react";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    function fadePageIn() {
        const body = document.querySelector('body');
        // @ts-ignore
        body.classList.add('fade-in');
    }

    if (typeof window !== 'undefined') {
        window.addEventListener('load', fadePageIn);
    }
    useEffect(() => {
        fadePageIn();
    }, []);
  return (
    <>
      <Head>
        <title>Luciano Melhem</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp"
                crossOrigin="anonymous"/>
      </Head>
      <main className={styles.main}>
          <h1 className="main_title">
              Luciano Melhem portfolio projects
          </h1>
              <div className={styles.gallery_button_wrapper}>
                <button className={styles.gallery_button}>
                  <Link href="/gallery"  style={{textDecoration:"none",color:"white"}}>
                     Gallery
                  </Link>
                </button>
              </div>
          <List/>
          <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
                  crossOrigin="anonymous"></script>
      </main>
    </>
  )
}
