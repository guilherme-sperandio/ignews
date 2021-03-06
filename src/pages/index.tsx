/* eslint-disable @next/next/no-img-element */

import styles from './home.module.scss';

import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';
export default function Home() {
  return (
    <>
      <Head><title>Home | ig.news</title></Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all publications <br/>
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
    </>
  )

}
