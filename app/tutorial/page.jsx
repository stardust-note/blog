'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Zap, Clock, Star } from 'lucide-react'
import Pagination from '@/components/Pagination'
import useResponsivePagination from '@/hooks/useResponsivePagination'

export default function Tutorial() {
  const posts = [
    {
      slug: 'digital-painting-basics',
      title: '디지털 페인팅 기초 - 브러시 활용법',
      date: '2024-01-14',
      excerpt: '디지털 페인팅을 시작하는 분들을 위한 기본 브러시 사용법',
      image:
        'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '15분',
      difficulty: '초급',
      rating: 4.8
    },
    {
      slug: 'character-design-tips',
      title: '매력적인 캐릭터 디자인 5가지 팁',
      date: '2024-01-09',
      excerpt: '기억에 남는 캐릭터를 만드는 핵심 포인트들',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '20분',
      difficulty: '중급',
      rating: 4.9
    },
    {
      slug: 'color-harmony-guide',
      title: '색감 조화의 비밀 - 컬러 팔레트 만들기',
      date: '2024-01-04',
      excerpt: '자연스럽고 아름다운 색상 조합을 만드는 방법',
      image:
        'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '25분',
      difficulty: '중급',
      rating: 4.7
    },
    {
      slug: 'lighting-fundamentals',
      title: '라이팅 기초 - 그림에 생명을 불어넣기',
      date: '2024-01-02',
      excerpt: '빛과 그림자의 원리를 이해하고 적용하는 법',
      image:
        'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '30분',
      difficulty: '고급',
      rating: 4.9
    },
    {
      slug: 'composition-tips',
      title: '좋은 구도의 비밀 - 시선 유도하기',
      date: '2023-12-30',
      excerpt: '그림의 완성도를 높이는 구도 설계 노하우',
      image:
        'https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '18분',
      difficulty: '중급',
      rating: 4.8
    }
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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case '초급':
        return 'bg-green-100 text-green-800'
      case '중급':
        return 'bg-yellow-100 text-yellow-800'
      case '고급':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
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
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            그림 강좌
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            단계별로 배우는 그림 그리기 기법과 실무 노하우
          </p>
        </motion.div>

        {/* Posts Grid */}
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
              <Link href={`/post/tutorial/${post.slug}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                          post.difficulty
                        )}`}
                      >
                        {post.difficulty}
                      </span>
                      <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                        <Clock size={12} />
                        <span>{post.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-yellow-600">
                        <Star size={14} fill="currentColor" />
                        <span>{post.rating}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-orange-600">
                        강좌 시작하기
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* ✅ Pagination (데스크탑) */}
        {!isMobile && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* ✅ Infinite Scroll (모바일) */}
        {isMobile && hasMore && (
          <div ref={loader} className="text-center py-8 text-gray-500">
            불러오는 중...
          </div>
        )}
      </div>
    </div>
  )
}
