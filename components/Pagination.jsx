'use client'  // ✅ 브라우저 전용 컴포넌트 (onClick 이벤트, 상태 변경 사용)

import React from 'react'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center space-x-1 mt-12 text-sm">
      {/* 이전 버튼 */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-2 py-1 text-gray-700 cursor-pointer"
        >
          이전
        </button>
      )}

      {/* 페이지 번호 */}
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => {
          const pageNum = String(i + 1).padStart(2, "0");
          return (
            <button
              key={i}
              onClick={() => onPageChange(i + 1)}
              className={`py-1 mx-2 transition text-xs ${
                currentPage === i + 1
                  ? 'color-[#2d2d2d] font-black border-b-2 border-[#2d2d2d]'
                  : 'text-gray-300 cursor-pointer hover:bg-gray-200'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* 다음 버튼 */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-2 py-1  text-gray-700 cursor-pointer"
        >
          다음
        </button>
      )}
    </div>

  )
}
