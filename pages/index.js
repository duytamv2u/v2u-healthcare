// pages/index.js

import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>V2U Health Care</title>
        <meta name="description" content="Hướng dẫn sử dụng các sản phẩm của V2U Health Care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <h1>Chào mừng bạn đến với V2U Health Care</h1>
        <h2>Hãy tham khảo các sản phẩm của chúng tôi.</h2>
        <p>
          Hãy nhấn vào nút dưới đây để được hướng dẫn chi tiết.
        </p>
        <button onClick={() => alert('Chatbot đang mở')}>
          Bấm vào đây để được hướng dẫn chi tiết
        </button>

        {/* Chatbot iframe */}
        <div style={{ width: '100%', height: '700px' }}>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/Fm0rsLXH6sQDWKkx3BVjM"
            width="100%"
            style={{ height: '100%', border: 'none' }}
            frameBorder="0"
          ></iframe>
        </div>
      </main>

      <footer>
        <p>© 2025 V2U Health Care</p>
      </footer>
    </div>
  )
}
