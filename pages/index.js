import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles.module.css'

export default function Home() {
  return (
    
    <div className="container">
      <Head>
        <title>KAFEMA - DEATHRABBIT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.navi} >
          Death<b>Bunny</b>
          <div className={styles.dropdown} >
              <button className={styles.dropdownbtn} > Menu</button>
              <div className={styles.dropdownContent}>
              <a href="#">link 1</a>
              <a href="#">link 2</a>
              <a href="#">link 3</a>
              </div>
              <br/>
          </div>
      </div>
      <header className={styles.header}>
      <h1> POR y PARA los refugios </h1>
      </header>
            <body className={styles.body}>

      </body>
    
    </div>
  )
}
