import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CustomizerVideo({ src, className, onVideoEnd }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progressValue = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progressValue);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = (parseFloat(event.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
  };

  const toggleFullScreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", handleProgress);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleProgress);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[97%] rounded-lg overflow-hidden group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        onClick={togglePlayPause}
        onEnded={onVideoEnd}
        muted={true}
        className={className ? className : 'w-full h-full object-contain'}
      >
        <source src={src} type="video/mp4" />
      </video>

      {!isPlaying && (
        <button
          onClick={togglePlayPause}
          className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-3xl rounded-full w-12 h-12 mx-auto my-auto opacity-100 transition-opacity duration-200 group-hover:opacity-100"
        >
          <Play className="w-8 h-8" />
        </button>
      )}

      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 flex items-center gap-1 justify-between p-2 bg-black/70 transition-opacity duration-300",
          showControls ? "opacity-100" : "opacity-0"
        )}
      >
        <button onClick={togglePlayPause} className="text-white">
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="flex-grow mx-2 h-1 bg-gray-300 rounded-lg cursor-pointer"
        />

        <button onClick={toggleMute} className="text-white">
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>

        <button onClick={toggleFullScreen} className="text-white">
          {isFullScreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
