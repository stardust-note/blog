'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Code, Github, ExternalLink } from 'lucide-react'
import Pagination from '@/components/Pagination'
import useResponsivePagination from '@/hooks/useResponsivePagination'

export default function Programming() {
  const posts = [
    {
      slug: 'react-best-practices',
      title: 'React 개발 베스트 프랙티스 2024',
      date: '2024-01-13',
      excerpt: '효율적이고 유지보수하기 쉬운 React 코드 작성법',
      image:
        'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'JavaScript', 'Frontend'],
      githubUrl: 'https://github.com/example/react-best-practices',
      demoUrl: 'https://example.com/demo'
    },
    {
      slug: 'typescript-advanced',
      title: 'TypeScript 고급 패턴과 활용법',
      date: '2024-01-07',
      excerpt: '타입 안정성을 높이는 고급 TypeScript 기법들',
      image:
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TypeScript', 'JavaScript', 'Types'],
      githubUrl: 'https://github.com/example/typescript-advanced',
      demoUrl: null
    },
    // ... 나머지 동일
  ]

  const {
    currentPosts,
    isMobile,
    currentPage,
    setCurrentPage,
    totalPages,
    loader,
    hasMore
  } = useResponsivePagination(posts)

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

  const getTagColor = (tag) => {
    const colors = {
      React: 'bg-blue-100 text-blue-800',
      JavaScript: 'bg-yellow-100 text-yellow-800',
      TypeScript: 'bg-blue-100 text-blue-800',
      'Node.js': 'bg-green-100 text-green-800',
      MongoDB: 'bg-green-100 text-green-800',
      Frontend: 'bg-purple-100 text-purple-800',
      Fullstack: 'bg-indigo-100 text-indigo-800',
      Backend: 'bg-orange-100 text-orange-800',
      API: 'bg-teal-100 text-teal-800',
      Types: 'bg-gray-100 text-gray-800',
      Nextjs: 'bg-sky-100 text-sky-800',
      Performance: 'bg-red-100 text-red-800',
      Optimization: 'bg-pink-100 text-pink-800',
      GraphQL: 'bg-rose-100 text-rose-800',
      AI: 'bg-emerald-100 text-emerald-800',
      Copilot: 'bg-blue-100 text-blue-800',
      Docker: 'bg-cyan-100 text-cyan-800',
      DevOps: 'bg-slate-100 text-slate-800',
      Security: 'bg-amber-100 text-amber-800'
    }
    return colors[tag] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">프로그래밍</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            개발 경험과 기술적 인사이트를 공유하는 공간
          </p>
        </motion.div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group"
            >
              <Link href={`/post/programming/${post.slug}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {post.githubUrl && (
                        <button
                          href={post.githubUrl}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                        >
                          <Github size={16} />
                        </button>
                      )}
                      {post.demoUrl && (
                        <button
                          href={post.demoUrl}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Calendar size={14} />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 rounded text-xs font-medium ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">
                        자세히 보기
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination (데스크탑) */}
        {!isMobile && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* Infinite Scroll (모바일) */}
        {isMobile && hasMore && (
          <div ref={loader} className="text-center py-8 text-gray-500">
            불러오는 중...
          </div>
        )}
      </div>
    </div>
  )
}
