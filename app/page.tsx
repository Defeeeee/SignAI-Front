'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import Footer from '../components/Footer'
import TrySignAI from '../components/TrySignAI'

export default function Home() {
  const [isTrySignAIOpen, setIsTrySignAIOpen] = useState(false);

  const openTrySignAI = () => setIsTrySignAIOpen(true);
  const closeTrySignAI = () => setIsTrySignAIOpen(false);

  return (
    <div className="min-h-screen">
      <Header openTrySignAI={openTrySignAI} />
      <Hero openTrySignAI={openTrySignAI} />
      <Features openTrySignAI={openTrySignAI} />
      <About />
      <Footer />
      <TrySignAI isOpen={isTrySignAIOpen} onClose={closeTrySignAI} />
    </div>
  )
}
