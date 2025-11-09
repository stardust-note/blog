// components/AnimatedBox.jsx
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Star() {
  const meshRef = useRef()
  
  // 별 모양 만들기
  const starShape = useMemo(() => {
    const shape = new THREE.Shape()
    const outerRadius = 1
    const innerRadius = 0.4
    const points = 5
    
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius
      const angle = (Math.PI * i) / points
      const x = Math.cos(angle - Math.PI / 2) * radius
      const y = Math.sin(angle - Math.PI / 2) * radius
      
      if (i === 0) {
        shape.moveTo(x, y)
      } else {
        shape.lineTo(x, y)
      }
    }
    shape.closePath()
    
    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.05,
      bevelSegments: 3
    }
    
    return new THREE.ExtrudeGeometry(shape, extrudeSettings)
  }, [])
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <mesh ref={meshRef} geometry={starShape}>
      <meshStandardMaterial 
        color="#FFD700" 
        emissive="#FFA500" 
        emissiveIntensity={0.5}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  )
}

export default function AnimatedBox({ width = "100%", height = "300px" }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // 모바일 감지
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div style={{ width, height, position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#FFA500" />
        <Star />
        <OrbitControls enableZoom={false} />
      </Canvas>
      
      {/* 디바이스별 안내 텍스트 */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '8px',
        fontSize: '14px',
        pointerEvents: 'none'
      }}>
        {isMobile ? '👆 탭하여 회전' : '🖱️ 드래그하여 회전'}
      </div>
    </div>
  )
}