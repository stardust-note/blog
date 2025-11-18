'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import Pagination from '@/components/Pagination'
import useResponsivePagination from '@/hooks/useResponsivePagination'

export default function Page() {
  const posts = [
    {
      slug: 'study-start',
      title: '고양이 모작',
      date: '2025-11-18',
      excerpt: '아크릴 물감으로 고양이를 모작 해봤습니다.',
      image: '/images/artstudy/cat/img09_finish.jpeg',
      tags: ['Art Study', '아크릴', '고양이']
    },
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

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">Art Study</h1>
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
              <Link href={`/post/artstudy/${post.slug}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">

                  {/* ✅ 이미지 영역 */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* ✅ 어두운 오버레이 */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* ✅ hover 시 자세히 보기 */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-black/60 text-white text-sm rounded-full">
                        자세히 보기
                      </span>
                    </div>
                  </div>

                  {/* ✅ 텍스트 콘텐츠 */}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Calendar size={14} />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>

                    {/* ✅ hover 시 밑줄만 표시 */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:underline">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                    {/* ✅ Apple 스타일 미니멀 태그 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full text-xs text-gray-700 border border-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {!isMobile && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* Infinite Scroll */}
        {isMobile && hasMore && (
          <div ref={loader} className="text-center py-8 text-gray-500">
            불러오는 중...
          </div>
        )}
      </div>
    </div>
  )
}
