
import { useEffect, useRef } from 'react'
import Home from './components/pages/Home'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import Cursor from './components/ui/Cursor'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <ReactLenis 
      ref={lenisRef} 
      root 
      autoRaf={false} /* Disable internal RAF to let GSAP handle it */
    >
      <div className='bg-background w-full min-h-screen cursor-none selection:bg-primary/30 selection:text-white'>
        <Cursor />
        <Home />
      </div>
    </ReactLenis>
  )
}

export default App
