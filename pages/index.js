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
      
      <body className={styles.body}>
      <header>
        <div >
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
      <Image
      src="/images/perbunny.jpg" // Route of the image file
      height={400} // Desired size with correct aspect ratio
      width={1350} // Desired size with correct aspect ratio
      alt="Your Name"
      />

      </header>
      </body>

    </div>
  )
}
