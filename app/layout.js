import './globals.css'
import { Noto_Sans_KR } from 'next/font/google'
import Layout from '../components/Layout'

const notoSans = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: '별먼지일기의 블로그',
  description: '성장 과정을 기록하는 블로그',
  robots: "index, follow",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={notoSans.className}>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 ">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
