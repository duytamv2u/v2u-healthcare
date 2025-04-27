// pages/index.js

import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Head>
        <title>V2U Health Care</title>
        <meta name="description" content="Hướng dẫn sử dụng các sản phẩm của V2U Health Care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        {/* Chào mừng - Tiếng Việt */}
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Chào mừng bạn đến với trang hướng dẫn sử dụng các sản phẩm của V2U Health Care Việt Nam
        </h1>
        
        {/* Chào mừng - Tiếng Anh */}
        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>
          Welcome to the product guide website of V2U Health Care Vietnam
        </h2>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
          Chat với chúng tôi ở phía dưới để được hướng dẫn cụ thể.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
          Chat with us below for specific guidance.
        </p>
        
        {/* Button */}
        <button 
          onClick={() => alert('Chatbot đang mở')} 
          style={{ padding: '10px 20px', fontSize: '1.5rem', cursor: 'pointer', marginBottom: '40px' }}
              {/* Chatbot iframe */}
        <div style={{ width: '90%', height: '700px', margin: 'auto' }}>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/Fm0rsLXH6sQDWKkx3BVjM"
            width="100%"
            style={{ height: '90%', minHeight: '700px' }}
            frameBorder="0"
          ></iframe>
        </div>
      </main>

      <footer style={{ marginTop: '50px', fontSize: '1rem' }}>
        <p>© 2025 V2U Health Care</p>
        <p>© 2025 V2U Health Care Vietnam</p>
      </footer>
    </div>
  )
}
