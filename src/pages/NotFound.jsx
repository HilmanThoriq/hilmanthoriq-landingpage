import { Home, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
            404
          </h1>
        </div>

        {/* Glitch Effect Text */}
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-white mb-3">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-xl text-slate-400 max-w-md mx-auto">
            Oops! Sepertinya halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
        </div>

        {/* Illustration */}
        <div className="my-12 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 flex items-center justify-center">
              <div className="text-8xl animate-bounce">🔍</div>
            </div>
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>
          
          <a
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5" />
            Ke Beranda
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-slate-500 text-sm">
          <p>Jika Anda yakin ini adalah kesalahan, silakan hubungi kami.</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound