'use client'

import dynamic from 'next/dynamic'

// ✅ 클라이언트에서만 MDXViewer 불러오기
const MDXViewer = dynamic(() => import('./MDXViewer'), { ssr: false })

export default function MDXClientWrapper({ content }) {
  return <MDXViewer content={content} />
}
