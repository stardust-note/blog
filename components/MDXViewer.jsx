'use client'

import { useMemo } from 'react'
import { compileSync } from 'xdm'
import * as runtime from 'react/jsx-runtime'
import { MDXProvider } from '@mdx-js/react'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css' // ✨ 테마 — 마음에 드는 걸로 바꿔도 됨

export default function MDXViewer({ content }) {
  if (!content) return <p>본문이 없습니다.</p>

  const MDXContent = useMemo(() => {
    try {
      const compiled = compileSync(
        { value: content },
        {
          outputFormat: 'function-body',
          rehypePlugins: [rehypeHighlight], // ✅ 하이라이팅 추가
          development: false,
        }
      )
      const fn = new Function(String(compiled.value))
      const { default: MDXComponent } = fn({ ...runtime })
      return MDXComponent
    } catch (e) {
      console.error('MDX render error:', e)
      return () => <p>렌더링 오류 발생</p>
    }
  }, [content])

  return (
    <div className="prose prose-lg max-w-none">
      <MDXProvider>
        <MDXContent />
      </MDXProvider>
    </div>
  )
}
