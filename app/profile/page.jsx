'use client'  // ✅ 꼭 필요!

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Calendar, ExternalLink } from 'lucide-react'

const Profile = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-12 text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-4xl">C</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Creative Artist</h1>
            <p className="text-purple-100 text-lg">디자이너 & 프로그래머</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* About */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">소개</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    안녕하세요! 저는 디자인과 프로그래밍을 통해 창의적인 작업을 하는 크리에이터입니다.
                  </p>
                  <p className="mb-4">
                    시각적 아름다움과 기술적 완성도를 모두 추구하며, 사용자에게 의미있는 경험을
                    제공하는 것을 목표로 합니다.
                  </p>
                  <p>
                    여기서는 제가 작업한 다양한 프로젝트들과 창작 과정을 공유합니다.
                    함께 배우고 성장하는 커뮤니티를 만들어가고 싶습니다.
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">스킬</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'UI/UX Design', 'Illustration', 'React', 'TypeScript',
                      'Figma', 'Photoshop', 'Procreate', 'Node.js'
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">연락처</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail size={20} className="text-purple-500" />
                    <span>contact@creative.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin size={20} className="text-purple-500" />
                    <span>Seoul, Korea</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar size={20} className="text-purple-500" />
                    <span>2024년부터 활동</span>
                  </div>
                </div>

                {/* Links */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">링크</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Instagram', url: '#' },
                      { name: 'Behance', url: '#' },
                      { name: 'GitHub', url: '#' }
                    ].map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Profile
