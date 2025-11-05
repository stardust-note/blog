'use client'  // ✅ 클라이언트 컴포넌트 (framer-motion, Link 등 사용하므로 필수)

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Palette, BookOpen, Code, Zap, Star, Users, Award } from 'lucide-react'

export default function Home() {
  const categories = [
    {
      title: '디자인',
      path: '/design',
      icon: Palette,
      description: '창의적인 디자인 작업물',
      color: 'from-pink-500 to-rose-500',
      posts: 12
    },
    {
      title: '인스타툰',
      path: '/webtoon',
      icon: BookOpen,
      description: '일상을 그린 웹툰',
      color: 'from-purple-500 to-indigo-500',
      posts: 8
    },
    {
      title: '그림강좌',
      path: '/tutorial',
      icon: Zap,
      description: '그림 그리기 팁과 강좌',
      color: 'from-orange-500 to-yellow-500',
      posts: 15
    },
    {
      title: '프로그래밍',
      path: '/programming',
      icon: Code,
      description: '개발 프로젝트와 기술',
      color: 'from-blue-500 to-cyan-500',
      posts: 10
    }
  ]

  const stats = [
    { icon: Star, value: '45+', label: '완성된 프로젝트' },
    { icon: Users, value: '1.2K+', label: '팔로워' },
    { icon: Award, value: '3', label: '수상 경력' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-4xl">C</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Creative
              </span>
              <br />
              <span className="text-gray-900">Portfolio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              디자인과 프로그래밍을 통해 상상을 현실로 만드는
              <br />
              <span className="font-semibold text-purple-600">창작자의 여정</span>을 함께하세요
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/profile"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                프로필 보기
                <ArrowRight className="ml-2" size={20} />
              </Link>
              
              <Link
                href="/design"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-200"
              >
                작품 둘러보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              창작 카테고리
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              다양한 분야의 창작물들을 카테고리별로 만나보세요
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={category.path}
                    className="block group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
                      <div className={`w-12 h-12 mb-4 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {category.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {category.posts}개 포스트
                        </span>
                        <ArrowRight 
                          className="text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-200" 
                          size={16} 
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              함께 창작해요!
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              새로운 프로젝트나 협업에 관심이 있으시다면 언제든 연락주세요
            </p>
            <Link
              href="/profile"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              연락하기
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
