'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Eye, Heart } from 'lucide-react'
import Pagination from '@/components/Pagination'
import useResponsivePagination from '@/hooks/useResponsivePagination'

export default function Design() {
  const posts = [
    {
      slug: 'modern-ui-design',
      title: '호랑이',
      date: '2024-01-15',
      excerpt: '최신 UI 디자인 트렌드와 실무에 적용할 수 있는 팁들을 소개합니다.',
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 1250,
      likes: 89
    },
    {
      slug: 'color-theory-guide',
      title: '컬러 이론과 실무 활용법',
      date: '2024-01-10',
      excerpt: '효과적인 컬러 조합과 브랜딩에 활용하는 방법을 알아봅시다.',
      image:
        'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 980,
      likes: 67
    },
    {
      slug: 'typography-basics',
      title: '타이포그래피 기초부터 고급까지',
      date: '2024-01-05',
      excerpt: '읽기 쉽고 아름다운 타이포그래피 디자인의 핵심 원칙들.',
      image:
        'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 1450,
      likes: 102
    },
    {
      slug: 'mobile-first-design',
      title: '모바일 퍼스트 디자인 전략',
      date: '2023-12-28',
      excerpt: '모바일 중심의 반응형 디자인 접근법과 실제 구현 사례.',
      image:
        'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 2100,
      likes: 156
    },
    {
      slug: 'brand-identity-design',
      title: '브랜드 아이덴티티 디자인 프로세스',
      date: '2023-12-20',
      excerpt: '성공적인 브랜드 아이덴티티를 만드는 단계별 가이드.',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 1800,
      likes: 134
    },
    {
      slug: 'figma-advanced-tips',
      title: 'Figma 고급 활용 팁과 트릭',
      date: '2023-12-15',
      excerpt: 'Figma를 더욱 효율적으로 사용하는 고급 기능들을 알아보세요.',
      image:
        'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 1650,
      likes: 98
    },
    {
      slug: 'creative-process',
      title: '창의적인 디자인 프로세스',
      date: '2023-12-10',
      excerpt: '아이디어 발상부터 완성까지 창의적인 과정을 단계별로 살펴봅니다.',
      image:
        'https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 900,
      likes: 45
    },
    {
      slug: 'ux-principles',
      title: 'UX 디자인 핵심 원칙',
      date: '2023-12-05',
      excerpt: '사용자 경험을 개선하기 위한 UX 디자인의 핵심 포인트를 다룹니다.',
      image:
        'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 2000,
      likes: 180
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
              <Link href={`/post/design/${post.slug}`} className="block">
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
