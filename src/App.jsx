import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LetterGlitch from "./components/LetterGlitch"
import Lanyard from "./components/Lanyard"
import DownloadPage from "./pages/DownloadPage"
import NotFound from "./pages/NotFound"

function HomePage() {
  const [fov, setFov] = useState(8)

  useEffect(() => {
    const updateFov = () => {
      const width = window.innerWidth
      if (width <= 640) {
        setFov(9)
      } else if (width <= 1024) {
        setFov(9)
      } else {
        setFov(8)
      }
    }

    updateFov() 
    window.addEventListener("resize", updateFov)
    return () => window.removeEventListener("resize", updateFov)
  }, [])

  return (
    <div className="w-screen h-screen overflow-hidden bg-black relative">
      <LetterGlitch
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/~`"
        glitchColors={["#1E293B", "#334155", "#475569", "#93C5FD"]}
        glitchSpeed={10}
        centerVignette={false}
        outerVignette={true}
        smooth={false}
      />

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <Lanyard
          position={[0, 0, 30]}
          gravity={[0, -40, 0]}
          fov={fov}
          transparent={true}
        />
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/downloads/:appSlug" element={<DownloadPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App