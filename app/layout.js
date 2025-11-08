// app/layout.jsx
import './globals.css'
import Layout from '../components/Layout'

export const metadata = {
  title: '별먼지일기',
  description: '작의 성장 과정을 기록하는 블로그',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
