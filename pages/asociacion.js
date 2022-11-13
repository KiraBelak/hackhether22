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
      <header className={styles.header}>
        <h1 className={styles.namni}> POR y PARA los refugios </h1>
       

        </header>
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
      
    
     
      <br/>
          
            <body  className={styles.body}>
              <div className={styles.asoci}>
                <fieldset>
                    <legend>Añade tu asociación</legend>
                  <form action="">
                    
                  </form>
                </fieldset>
               
            </div>
            
            </body>
    
    </div>
    
  )
}
