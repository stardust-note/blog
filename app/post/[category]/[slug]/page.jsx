import PostDetailClientWrapper from "./PostDetailClientWrapper"
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import MDXClientWrapper from '@/components/MDXClientWrapper' // ✅ 새 클라이언트 컴포넌트 import

const getCategoryInfo = (category) => {
  console.log(category)

  const categories = {
    "2d": { name: '2D Art', color: 'text-pink-600' },
    "3d": { name: '3D Art', color: 'text-purple-600' },
    pixel: { name: 'Pixel Art', color: 'text-orange-600' },
    artstudy: { name: 'Art Study', color: 'text-blue-600' },
    notes: { name: 'Notes', color: 'text-blue-600' },
    frontend: { name: 'Front End', color: 'text-blue-600' },
    motion: { name: 'Motion Web', color: 'text-blue-600' },
    app: { name: 'App Dev', color: 'text-blue-600' },
    game: { name: 'Game Dev', color: 'text-blue-600' },
    backend: { name: 'Back End', color: 'text-blue-600' },
  }
  return categories[category] || { name: '블로그', color: 'text-gray-600' }
}

export default async function PostDetail({ params }) {
  const resolvedParams = await params
  const { category, slug } = resolvedParams || {}

  if (!category || !slug) notFound()

  const filePath = path.join(process.cwd(), 'content', category, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) notFound()

  const fileContent = fs.readFileSync(filePath, 'utf-8')

  // --- frontmatter 추출 ---
  const match = fileContent.match(/---\n([\s\S]*?)\n---/)
  let frontmatter = {}
  let content = fileContent

  if (match) {
    const yaml = match[1]
    yaml.split('\n').forEach((line) => {
      const [key, value] = line.split(':').map((v) => v.trim())
      if (key) frontmatter[key] = value?.replace(/^['"]|['"]$/g, '')
    })
    content = fileContent.replace(match[0], '')
  }

  const categoryInfo = getCategoryInfo(category)

  

  return (
    <PostDetailClientWrapper title={frontmatter.title} >
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href={`/${category}`}
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>{categoryInfo.name}로 돌아가기</span>
            </Link>
          </div>

          <article className="overflow-hidden">
            {frontmatter.date && (
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <Calendar size={14} />
                <time dateTime={frontmatter.date}>
                  {new Date(frontmatter.date).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {frontmatter.title}
            </h1>

            <MDXClientWrapper content={content} />
            
          </article>
        </div>
      </div>
    </PostDetailClientWrapper>
  )
}
