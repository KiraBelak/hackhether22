import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles.module.css'
import Link from "next/link";


function SignIn() {
    const { connectAsync } = useConnect();
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const { push } = useRouter();

    const handleAuth = async () => {
        if (isConnected) {
            await disconnectAsync();
        }

        const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });

        const userData = { address: account, chain: chain.id, network: 'evm' };

        const { data } = await axios.post('/api/auth/request-message', userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const message = data.message;

        const signature = await signMessageAsync({ message });

        // redirect user after success authentication to '/user' page
        const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/user' });
        /**
         * instead of using signIn(..., redirect: "/user")
         * we get the url from callback and push it to the router to avoid page refreshing
         */
        push(url);
    };

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
          
            <body  className={styles.bodyn}>
            <div className={styles.reta}>
            <h3>Web3 Authentication</h3>
            <button onClick={() => handleAuth()}>Authenticate via Metamask</button>
        </div>
            </body>


            <div className={styles.pat}>
                <h2>De que se trata</h2>
                <p>Buscamos generar confianza entre donador - asociación para un fondeo y uso seguro, <br/>siendo el intermediado con esta tecnologia para asegurar que lo donado para la asociación se usado para su fin.</p>
                <h2>Por que nosotros</h2>
                <p>Buscamos quitar el stigma y la "duda" que se genera entre los donantes hacia las organizaciones en el uso del dinero que les donan.</p>
            </div>
    
    </div>
    
  

    );
}

export default SignIn;