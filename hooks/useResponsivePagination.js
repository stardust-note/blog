'use client'  // ✅ 브라우저 전용 훅 (window, observer 사용하므로 필수)

import { useState, useEffect, useRef } from 'react'

export default function useResponsivePagination(posts = [], itemsPerPage = 6, mobileChunk = 4) {
  const [currentPage, setCurrentPage] = useState(1)
  const [visibleCount, setVisibleCount] = useState(mobileChunk)
  const [isMobile, setIsMobile] = useState(false)
  const loader = useRef(null)

  // ✅ 브라우저 크기에 따라 isMobile 감지
  useEffect(() => {
    if (typeof window === 'undefined') return // SSR 환경에서 window 접근 방지

    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // ✅ 모바일 환경에서 무한 스크롤 (Intersection Observer)
  useEffect(() => {
    if (!isMobile || typeof window === 'undefined') return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => Math.min(prev + mobileChunk, posts.length))
      }
    })

    if (loader.current) observer.observe(loader.current)
    return () => observer.disconnect()
  }, [isMobile, posts.length, mobileChunk])

  // ✅ 페이지네이션 계산
  const totalPages = Math.ceil(posts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage

  const currentPosts = isMobile
    ? posts.slice(0, visibleCount)
    : posts.slice(startIndex, startIndex + itemsPerPage)

  return {
    currentPosts,
    isMobile,
    currentPage,
    setCurrentPage,
    totalPages,
    loader,
    hasMore: visibleCount < posts.length
  }
}
