'use client'  // ✅ 클라이언트 전용 컴포넌트 (useState, 이벤트 등 사용)

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import WaveMarquee from './WaveMarquee'

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";



export default function Layout({ children }) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'HOME'},
    { path: '/profile', label: 'EMOTICON'},
    { path: '/design', label: 'ART'},
    { path: '/webtoon', label: 'PIXEL'},
    { path: '/tutorial', label: '3D'},
    { path: '/programming', label: 'CODING'},
  ]

  const marqueeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = marqueeRef.current;
      gsap.to(el, {
        xPercent: -50,
        repeat: -1,
        duration: 40,
        ease: "none",
        modifiers: {
          xPercent: gsap.utils.wrap(-50, 0),
        },
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-[#2b2b2b] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[100px_1fr_auto] ">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center justify-center border-l border-r border-[#2b2b2b] font-extrabold text-3xl leading-tight">
              <div className="font-bold text-xl text-gray-900">STAR</div>
              <div className="font-bold text-xl text-gray-900">DUST</div>
            </Link>

            <div className=''>
              {/* 중앙 wave + 오른쪽 버튼 */}
              <div className="flex items-center w-full overflow-hidden relative">
                <div className="absolute inset-0 overflow-hidden">
                  <WaveMarquee />
                </div>

                <div className="flex ml-auto shrink-0 space-x-3 pl-4 bg-white z-10 relative">
                  <button className="text-gray-700">알림</button>
                  <button className="text-gray-700">다크</button>
                </div>
              </div>


              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.path

                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Mobile menu toggle button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-purple-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-slide-down">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.path

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)} // 메뉴 클릭 시 닫기
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">Creative Portfolio</span>
            </div>
            <p className="text-gray-400 mb-4">디자인과 코딩으로 세상을 더 아름답게</p>
            <div className="text-sm text-gray-500">
              © 2025 Creative Portfolio. Made with ❤️ and Next.js
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
