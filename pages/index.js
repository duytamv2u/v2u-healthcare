// pages/index.js

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>V2U Health Care</title>
        <meta name="description" content="Hướng dẫn sử dụng các sản phẩm của V2U Health Care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        {/* Sử dụng class local */}
        <h1 className={styles.title}>Chào mừng bạn đến với V2U Health Care</h1>
        <h2 className={styles.subtitle}>Hãy tham khảo các sản phẩm của chúng tôi.</h2>
        <p>
          Hãy nhấn vào nút dưới đây để được hướng dẫn chi tiết.
        </p>
        <button onClick={() => alert('Chatbot đang mở')}>Bấm vào đây để được hướng dẫn chi tiết</button>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 V2U Health Care</p>
      </footer>
    </div>
  )
}
