'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'
import Pagination from '@/components/Pagination'
import useResponsivePagination from '@/hooks/useResponsivePagination'

export default function Webtoon() {
  const posts = [
    {
      slug: 'daily-life-episode-1',
      title: '일상 에피소드 #1 - 월요일 아침',
      date: '2024-01-12',
      excerpt: '월요일 아침의 소소한 일상을 그린 웹툰',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      episode: 1
    },
    {
      slug: 'coffee-story',
      title: '커피 한 잔의 여유',
      date: '2024-01-08',
      excerpt: '바쁜 일상 속에서 찾은 작은 행복',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      episode: 2
    },
    {
      slug: 'weekend-adventure',
      title: '주말 나들이 모험기',
      date: '2024-01-03',
      excerpt: '친구들과 함께한 즐거운 주말 이야기',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800',
      episode: 3
    },
    {
      slug: 'rainy-day-thoughts',
      title: '비 오는 날의 생각들',
      date: '2023-12-29',
      excerpt: '창밖을 바라보며 떠오른 지난 추억',
      image: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=800',
      episode: 4
    },
    {
      slug: 'cat-diary',
      title: '고양이의 하루',
      date: '2023-12-22',
      excerpt: '깜냥이의 일상을 담은 따뜻한 이야기',
      image: 'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=800',
      episode: 5
    },
    {
      slug: 'bus-stop-moment',
      title: '버스정류장에서 생긴 일',
      date: '2023-12-18',
      excerpt: '평범한 하루 속 특별한 만남',
      image: 'https://images.pexels.com/photos/842912/pexels-photo-842912.jpeg?auto=compress&cs=tinysrgb&w=800',
      episode: 6
    },
    {
      slug: 'dream-night',
      title: '꿈속을 걷는 밤',
      date: '2023-12-10',
      excerpt: '현실과 꿈의 경계를 넘나드는 환상적인 이야기',
      image: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=800',
      episode: 7
    },
    {
      slug: 'first-snow',
      title: '첫눈이 내리던 날',
      date: '2023-12-03',
      excerpt: '첫눈과 함께 떠오른 따뜻한 기억',
      image: 'https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=800',
      episode: 8
    },
    {
      slug: 'night-market',
      title: '야시장 탐방기',
      date: '2023-11-28',
      excerpt: '밤의 불빛 아래 펼쳐지는 사람들의 이야기',
      image: 'https://images.pexels.com/photos/1796738/pexels-photo-1796738.jpeg?auto=compress&cs=tinysrgb&w=800',
      episode: 9
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
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            인스타툰
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            일상의 소소한 순간들을 그림으로 담은 웹툰 이야기
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
              <Link href={`/post/webtoon/${post.slug}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Episode {post.episode}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Calendar size={14} />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-600">
                        웹툰 보기
                      </span>
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
