// components/MDXViewer.jsx
'use client'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useState, useEffect } from 'react'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
import AnimatedBox from './AnimatedBox'

export default function MDXViewer({ content }) {
  const [mdxSource, setMdxSource] = useState(null)

  const components = {
    AnimatedBox,
    img: (props) => (
      <img {...props} style={{ maxWidth: '100%', height: 'auto' }} />
    ),
  }

  useEffect(() => {
    const compileMDX = async () => {
      try {
        const source = await serialize(content, {
          mdxOptions: {
            rehypePlugins: [rehypeHighlight],
            development: false,
          },
        })
        setMdxSource(source)
      } catch (e) {
        console.error('MDX compile error:', e)
      }
    }
    compileMDX()
  }, [content])

  if (!mdxSource) return <p>로딩 중...</p>

  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}