"use client"
import { useEffect, useState } from "react"

export default function ScrollProgressBar({ footerHeight = 0, title }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const shouldShow = scrollTop > 40

      setVisible(shouldShow)

      if (shouldShow) {
        const scrollHeight =
          document.documentElement.scrollHeight -
          window.innerHeight -
          footerHeight

        const percentage = Math.min((scrollTop / scrollHeight) * 100, 100)
        setProgress(percentage)
      } else {
        setProgress(0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [footerHeight])

  return (
    <div
      className={`
        fixed left-0 w-full bg-white 
        border-b border-t border-black
        transition-transform duration-300 ease-out
        ${visible ? "translate-y-0 top-20" : "-translate-y-full top-20"}
      `}
    >
      <div className="max-w-[1336] mx-auto relative h-[40px] border-l border-r border-black overflow-hidden">

        <div className="absolute inset-0 flex items-center z-50">
          <span className="text-[20px] whitespace-nowrap pl-6">
            {title}
          </span>
        </div>

        <div
          className="absolute left-0 top-0 h-full z-10 transition-all duration-150"
          style={{
            width: `${progress}%`,
            backgroundColor: "#FEE500",
          }}
        ></div>
      </div>
    </div>
  )
}
