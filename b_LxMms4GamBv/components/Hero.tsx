'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const terminalLines = [
    '$ whoami',
    'Mohamed Elhadad',
    '',
    '$ cat about.txt',
    'DevOps Engineer • AI Enthusiast',
    '',
    '$ git status',
    '→ Available for DevOps & AI projects',
    '→ Building scalable infrastructure',
    '',
    '$ ls ~/skills',
    'DevOps • Docker • Kubernetes • Jenkins • AWS • Python • AI/ML • CI/CD',
    '',
    '$ explore projects',
    '→ view my work      → get in touch',
  ]
  const [started, setStarted] = useState(false)
  const [visibleLineIndex, setVisibleLineIndex] = useState(0)
  const [typedCharCount, setTypedCharCount] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const onStart = () => setStarted(true)
    window.addEventListener('terminal-reveal-start', onStart)
    return () => window.removeEventListener('terminal-reveal-start', onStart)
  }, [])

  useEffect(() => {
    if (!started || complete) return

    const currentLine = terminalLines[visibleLineIndex]
    if (typedCharCount < currentLine.length) {
      const timer = setTimeout(() => {
        setTypedCharCount((prev) => prev + 1)
      }, 40)
      return () => clearTimeout(timer)
    }

    const lineDelay = setTimeout(() => {
      if (visibleLineIndex === terminalLines.length - 1) {
        setComplete(true)
      } else {
        setVisibleLineIndex((prev) => prev + 1)
        setTypedCharCount(0)
      }
    }, 300)
    return () => clearTimeout(lineDelay)
  }, [started, complete, typedCharCount, visibleLineIndex, terminalLines])

  const onHeroStart = () => {
    if (!started) setStarted(true)
  }

  const formatLine = (line: string) => {
    if (line.startsWith('$ ')) {
      return (
        <p className="text-[#00ff41] font-bold">
          <span className="text-[#00ff41]">$</span> {line.slice(2)}
        </p>
      )
    }
    if (line.startsWith('→')) {
      return <p className="text-[#4ade80]">{line}</p>
    }
    return <p className="text-[#e2e8f0]">{line}</p>
  }

  return (
    <section id="hero" onClick={onHeroStart} className="min-h-screen flex items-center pt-28 pb-28 relative overflow-hidden cursor-pointer">
      <div className="absolute inset-0 pointer-events-none hero-scanlines hero-noise" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-7 font-mono fade-in relative z-10 hero-glow">
        {!started && (
          <p className="text-[#00ff41] text-xl sm:text-2xl">
            Click here or the header logo to start terminal reveal
          </p>
        )}

        {started && (
          <div className="space-y-1 text-base sm:text-lg leading-8 tracking-wide">
            {terminalLines.slice(0, visibleLineIndex).map((line, idx) => (
              <div key={`${line}-${idx}`}>{formatLine(line)}</div>
            ))}

            {!complete && (
              <div>
                {formatLine(terminalLines[visibleLineIndex].slice(0, typedCharCount))}
              </div>
            )}

            {complete && (
              <>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href="https://github.com/mohamed-ibrahim09" target="_blank" rel="noopener noreferrer" className="terminal-chip-link">
                    [github]
                  </a>
                  <a href="https://www.linkedin.com/in/mohamed-ibrahim-elhadad" target="_blank" rel="noopener noreferrer" className="terminal-chip-link">
                    [linkedin]
                  </a>
                  <a href="mailto:mohammed.i.elhadad@gmail.com" className="terminal-chip-link">
                    [email]
                  </a>
                </div>
                <div className="flex flex-wrap gap-8 pt-2">
                  <a href="#projects" className="text-[#4ade80] hover:text-[#00ff41]">→ view my work</a>
                  <a href="#contact" className="text-[#4ade80] hover:text-[#00ff41]">→ get in touch</a>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
