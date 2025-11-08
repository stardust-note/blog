'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import WaveMarquee from './WaveMarquee'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Bell, Moon, Sun } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiThreads } from "react-icons/si";


export default function Layout({ children }) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/2d', label: '2DArt'},
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
      <nav
        className="
          bg-white border-b border-[#2b2b2b] sticky top-0 z-50 relative
          before:content-[''] before:absolute before:left-0 before:top-[40px]
          before:w-full before:border-t before:border-[#2b2b2b]
        "
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[100px_1fr_auto] sm:grid-cols-[130px_1fr_auto]">
            {/* Logo */}
            <Link 
              href="/" 
              className="
                relative z-[1]
                flex flex-col items-center justify-center 
                border-l border-r border-[#2b2b2b] 
                font-extrabold text-3xl leading-tight bg-white
              "
            >
              <div className="font-black text-3xl">별먼지</div>
              <div className="font-black text-3xl">일기⭐</div>
            </Link>

            <div>
              {/* 중앙 wave + 오른쪽 버튼 */}
              <div className="flex items-center w-full overflow-hidden relative h-[40px] bg-[#FEE500]">
                <div className="absolute inset-0 overflow-hidden">
                  <WaveMarquee />
                </div>

                <div className="flex ml-auto shrink-0 bg-white z-10 relative h-[40px]">
                  <button className="cursor-pointer p-2 w-[41px] border-l border-[#2b2b2b] flex items-center justify-center">
                    <Bell size={20} className="relative right-[-1px]" />
                  </button>

                  <button className="cursor-pointer p-2 w-[41px] border-l border-r border-[#2b2b2b] flex items-center justify-center">
                    <Moon size={20} className="relative right-[-1px]" />
                  </button>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className='flex'>
                <div className="hidden md:flex space-x-1">
                  {navItems.map((item) => {
                    const segments = pathname.split('/')

                    const basePath =
                      segments[1] === 'post'
                        ? `/${segments[2]}`
                        : `/${segments[1]}`

                    const isActive = basePath === item.path

                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center space-x-2 px-4 py-2 transition-all duration-200 ${
                          isActive
                            ? 'border-b-2 border-black'
                            : 'font-thin text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )
                  })}
                </div>

                <div className="flex ml-auto h-[42px]">
                  <Link
                    href="https://threads.net/stardust.note"
                    target="_blank"
                    className="cursor-pointer p-2 w-[41px] border-l border-[#2b2b2b] flex items-center justify-center"
                  >
                    <SiThreads
                      size={20}
                      className="relative right-[-1px] text-black"
                    />
                  </Link>

                  <Link
                    href="https://www.youtube.com/@%EB%B3%84%EB%A8%BC%EC%A7%80%EC%9D%BC%EA%B8%B0"
                    target="_blank"
                    className="cursor-pointer p-2 w-[41px] border-l border-[#2b2b2b] flex items-center justify-center"
                  >
                    <FaYoutube
                      size={24}
                      className="relative right-[-1px] text-red-500"
                    />
                  </Link>

                  <Link
                    href="https://instagram.com/stardust.note"
                    target="_blank"
                    className="cursor-pointer p-2 w-[41px] border-l border-r border-[#2b2b2b] flex items-center justify-center"
                  >
                    <FaInstagram
                      size={24}
                      className="relative right-[-1px] text-pink-500"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile menu toggle button */}
            <div className="md:hidden border-r border-[#2b2b2b] pr-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-purple-600 focus:outline-none pt-2 pl-2"
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
                const segments = pathname.split('/')
                const basePath =
                  segments[1] === 'post' ? `/${segments[2]}` : `/${segments[1]}`

                const isActive = basePath === item.path

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
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="font-bold text-xl">별먼지 일기</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 STARDUST NOTE. All rights reserved. 
            </div>
          </div>
        </div>
      </footer> */}
      <footer className='border-t border-[#2b2b2b] '>
        <div className="max-w-[1400px] mx-auto">
          <div className="px-4 sm:px-6 lg:px-8 
            grid grid-cols-1 min-[1240px]:grid-cols-[280px_1fr_auto] 
            h-auto min-[1240px]:h-[60px]"
          >
            {/* 로고 영역 */}
            <Link 
              href="/" 
              className="
                border-l border-r border-[#2b2b2b] 
                flex flex-col items-center justify-center py-4
                min-[1240px]:flex min-[1240px]:flex-row min-[1240px]:py-0
              "
            >
              {/* STARDUST NOTE 글자 크기 */}
              <div className="font-black text-xl min-[1240px]:text-2xl">
                STARDUST NOTE.
              </div>

              {/* © 2025 ... (1240px 이하에서만 노출) */}
              <span className="block min-[1240px]:hidden text-xs mt-1 text-center">
                © 2025 STARDUST NOTE. All rights reserved.
              </span>
            </Link>

            {/* Creative Frontend — 1240px 이상에서만 보임 */}
            <div className="
              hidden 
              min-[1240px]:flex 
              items-center justify-center border-r border-[#2b2b2b]
            ">
              Creative Frontend
            </div>

            {/* 오른쪽 영역 — 1240px 이상에서만 보임 */}
            <div className="hidden min-[1240px]:flex items-center gap-4 border-r border-[#2b2b2b] pl-4">
              <span className="text-sm whitespace-nowrap">
                © 2025 STARDUST NOTE. All rights reserved.
              </span>

              <div className="flex items-center ml-auto">

                <Link
                  href="https://threads.net/stardust.note"
                  target="_blank"
                  className="cursor-pointer p-4 h-[60px] border-l border-[#2b2b2b] flex items-center justify-center"
                >
                  <span className='pr-2'>Threads</span><SiThreads size={20} className="text-black" />
                </Link>

                <Link
                  href="https://www.youtube.com/@%EB%B3%84%EB%A8%BC%EC%A7%80%EC%9D%BC%EA%B8%B0"
                  target="_blank"
                  className="cursor-pointer p-4 h-[60px] border-l border-[#2b2b2b] flex items-center justify-center"
                >
                  <span className='pr-2'>Youtube</span><FaYoutube size={24} className="text-red-500" />
                </Link>

                <Link
                  href="https://instagram.com/stardust.note"
                  target="_blank"
                  className="cursor-pointer p-4 h-[60px] border-l border-[#2b2b2b] flex items-center justify-center"
                >
                  <span className='pr-2'>Instagram</span><FaInstagram size={24} className="text-pink-500" />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}
