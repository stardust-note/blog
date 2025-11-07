"use client"

import { useEffect, useState } from "react"
import ScrollProgressBar from "@/components/ScrollProgressBar"

export default function PostDetailClientWrapper({ children, title }) {
  const [footerHeight, setFooterHeight] = useState(0)

  useEffect(() => {
    const footer = document.getElementById("page-footer")
    if (footer) {
      setFooterHeight(footer.offsetHeight)
    }
  }, [])

  return (
    <>
      <ScrollProgressBar footerHeight={footerHeight} title={title} />
      {children}
    </>
  )
}
