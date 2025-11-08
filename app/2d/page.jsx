'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Eye, Heart } from 'lucide-react'
import Pagination from '@/components/Pagination'
import useResponsivePagination from '@/hooks/useResponsivePagination'

export default function Page() {
  const posts = [
    {
      slug: 'sketch',
      title: '호랑이',
      date: '2024-01-15',
      excerpt: '최신 UI 디자인 트렌드와 실무에 적용할 수 있는 팁들을 소개합니다.',
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 1250,
      likes: 89
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
          className="text-center mb-16"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">디자인 포트폴리오</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">창의적인 디자인 프로젝트와 인사이트를 공유합니다</p>
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
              <Link href={`/post/2d/${post.slug}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center space-x-3 text-white text-sm">
                        <div className="flex items-center space-x-1">
                          <Eye size={14} />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart size={14} />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Calendar size={14} />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-600">자세히 보기</span>
                      <ArrowRight
                        size={16}
                        className="text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination or Infinite Scroll */}
        {!isMobile && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}
        {isMobile && hasMore && (
          <div ref={loader} className="text-center py-8 text-gray-500">
            불러오는 중...
          </div>
        )}
      </div>
    </div>
  )
}
