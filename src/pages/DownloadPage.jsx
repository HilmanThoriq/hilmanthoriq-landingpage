// Updated DownloadPage.jsx with layout matching the provided image
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Download, CheckCircle } from "lucide-react";
import { getAppData } from "../config/appsConfig";
import NotFound from "./NotFound";

function DownloadPage() {
  const { appSlug } = useParams();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const appData = getAppData(appSlug);

  useEffect(() => {
    if (appData) {
      document.title = `Download ${appData.name}`;
    }
  }, [appData]);

  if (!appData) {
    return <NotFound />;
  }

  const handleDownload = () => {
    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = appData.downloadUrl;
    link.download = `${appData.name}.apk`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-screen bg-gray-50 flex flex-col items-center justify-start p-0">
      <div className="w-11/12 md:w-6/12 lg:w-3/12 flex flex-col items-center mt-6">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 m-6">
          {appData.logo ? (
            <img
              src={appData.logo}
              alt={appData.name}
              className="w-12 h-12 rounded-xl object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : null}

          <h1 className="text-3xl font-bold text-gray-900">{appData.name}</h1>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-center text-gray-900 mb-2 mt-4">
          {appData.tagline}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm text-center leading-relaxed mb-8">
          {appData.description}
        </p>

        {/* QR Card */}
        <div className="relative ml-4">
          <div className="bg-white rounded-3xl shadow-md py-10 px-6 flex flex-col items-center">
            <img
              src={appData.logo}
              alt="logo"
              className="w-64 h-64 object-contain"
            />
          </div>

          {/* Floating Button */}
          <div className="absolute -bottom-6 left-6 right-6">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`w-full py-3 rounded-xl font-semibold text-base flex items-center justify-center gap-3 transition-all duration-300 text-white shadow-xl
                ${
                  isDownloading
                    ? "bg-gray-400 cursor-not-allowed"
                    : downloadComplete
                    ? `bg-[${appData.logoColors}] hover:bg-[${appData.logoColorsDark}]`
                    : `bg-[${appData.logoColors}] hover:bg-[${appData.logoColorsDark}]`
                }
              `}
            >
              {isDownloading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Downloading...</span>
                </>
              ) : downloadComplete ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Download Complete!</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download {appData.name}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Spacing */}
        <div className="h-10"></div>
      </div>
    </div>
  );
}

export default DownloadPage;
