import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.site}>


        <div id="content" className={styles.main}>
          <div className={styles.header}>Hello and welcome</div>
          <div className={styles.paragraph}>This is the start of your new journey</div>
        </div>

        <div id="content2" className={styles.main2}>
          <button className={styles.button}>
            Get Started
          </button>
        </div>

        <div className={styles.sidebar}>
        </div>

        <div className={styles.twin}>
        </div>

        <svg className={styles.svg}>
          <rect x="50" y="20" rx="3" width="90" height="6"
            className={styles.rect} />
        </svg>
      </div>


    </>
  )
}

export default Home
