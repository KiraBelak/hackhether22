import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles.module.css'
import Link from "next/link";


export default function Home() {
  return (
    
    <div className="container">
      <Head>
        <title>KAFEMA - DEATHRABBIT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.namni}> Únete como activista a la causa animal </h1>
       
        </header>
        <div className={styles.navi} >
          Death<b>Rabbit</b>
          <div className={styles.dropdown} >
              <button className={styles.dropdownbtn} > Menu</button>
              <div className={styles.dropdownContent}>
                
              <Link href="#">Cerrar sesion</Link>
              <Link href="">Mis Donaciones</Link>
              <a href="/asociacion">Añadir Asociacion</a>
              </div>
              <br/>
          </div>
      </div>
      
    
     
      <br/>
          
            <body  className={styles.body}>
              <div className={styles.bodyn}>
                
               
            </div>
            
            </body>
    
    </div>
    
  )
}
