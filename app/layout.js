// app/layout.jsx
import './globals.css'
import Layout from '../components/Layout'

export const metadata = {
  title: 'My Blog',
  description: 'Vite → Next.js migration',
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
