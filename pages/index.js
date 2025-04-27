import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>V2U Health Care</title>
        <meta name="description" content="Hướng dẫn sử dụng các sản phẩm của V2U Health Care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Chào mừng bạn đến với web hướng dẫn sử dụng các sản phẩm của V2U Health Care Việt Nam</h1>
        <h2>Welcome to the product guide website of V2U Health Care Vietnam</h2>
        <p>
          Hãy nhấn vào nút dưới đây để được hướng dẫn chi tiết.
        </p>
        <button onClick={() => alert('Chatbot đang mở')}>Bấm vào đây để được hướng dẫn chi tiết</button>
        <p>Hãy nói cho chúng tôi biết bạn đang dùng máy gì, vào tình trạng bệnh lý hoặc vùng cần điều trị, chúng tôi sẽ hướng dẫn bạn sử dụng máy.</p>
        <Chatbot />
      </main>

      <footer className={styles.footer}>
        <p>© 2025 V2U Health Care</p>
      </footer>
    </div>
  );
}
