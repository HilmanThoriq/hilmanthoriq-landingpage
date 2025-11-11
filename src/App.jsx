import { useState, useEffect } from "react"
import LetterGlitch from "./components/LetterGlitch"
import Lanyard from "./components/Lanyard"

function App() {
  const [fov, setFov] = useState(8) // default desktop

  useEffect(() => {
    const updateFov = () => {
      const width = window.innerWidth
      if (width <= 640) {
        // 📱 mobile
        setFov(9)
      } else if (width <= 1024) {
        // 💻 tablet
        setFov(9)
      } else {
        // 🖥️ desktop
        setFov(8)
      }
    }

    updateFov() 
    window.addEventListener("resize", updateFov)
    return () => window.removeEventListener("resize", updateFov)
  }, [])

  return (
    <div className="w-screen h-screen overflow-hidden bg-black relative">
      {/* Letter Glitch Background */}
      <LetterGlitch
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/~`"
        glitchColors={["#1E293B", "#334155", "#475569", "#93C5FD"]}
        glitchSpeed={10}
        centerVignette={false}
        outerVignette={true}
        smooth={false}
      />

      {/* Lanyard 3D floating card */}
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

export default App;