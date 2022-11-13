import { getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles.module.css'
import Link from "next/link";


// gets a prop from getServerSideProps
function User({ user }) {
    const {push} = useRouter();

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
                <div className={styles.bodyn}>
                  <fieldset>
                      <legend>Añade tu asociación</legend>
                    <form action="">
                      
                    </form>
                  </fieldset>
                 
              </div>
              
              </body>
      
      
        <div>
            <h4>User session:</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={() => signOut({ redirect: '/signin' })}>Sign out</button>
            <button onClick={()=> push('/home')}>Members Only</button>
        </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    
    // redirect if not authenticated
    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: { user: session.user },
    };
}

export default User;