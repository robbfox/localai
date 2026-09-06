"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { PunkStickerTape } from "./PunkAccents";

interface HeroVideoProps {
  posterSrc?: string;
  videoSrc?: string;
  playbackRate?: number;
}

export default function HeroVideo({
  posterSrc = "/hero-image-v2.avif",
  videoSrc = "/hero-image.mp4",
  playbackRate = 1.0,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = playbackRate;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!motionPreference.matches) video.play().catch(() => {});
    const handleMotionChange = () => {
      if (motionPreference.matches) video.pause();
    };
    motionPreference.addEventListener("change", handleMotionChange);
    return () => motionPreference.removeEventListener("change", handleMotionChange);
  }, [playbackRate]);

  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
    setIsLoaded(true);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="group relative h-[320px] overflow-hidden rounded-2xl border border-white/15 bg-black/90 shadow-2xl sm:h-[400px]">
      {!hasVideoError ? (
        <>
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            loop
            muted={isMuted}
            playsInline
            onLoadedData={handleLoadedData}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => setHasVideoError(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            id="hero-video-player"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark-1/20 to-bg-dark-1 lg:bg-gradient-to-r lg:from-bg-dark-1 lg:via-bg-dark-1/30 lg:to-transparent"
            aria-hidden="true"
          />
        </>
      ) : (
        <>
          <Image
            src={posterSrc}
            alt="Modern event space"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark-1/20 to-bg-dark-1 lg:bg-gradient-to-r lg:from-bg-dark-1 lg:via-bg-dark-1/30 lg:to-transparent"
            aria-hidden="true"
          />
        </>
      )}

      {/* Corner punk tape sticker */}
      <div className="absolute top-4 right-4 z-10">
        <PunkStickerTape text="LIVE & IN PERSON" color="pink" rotate={4} />
      </div>

      {/* Floating minimal video controls */}
      {!hasVideoError && isLoaded && (
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 opacity-80 transition-opacity group-hover:opacity-100">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/70 text-white border border-punk-pink/50 backdrop-blur-md transition-all hover:bg-punk-pink hover:text-black shadow-[2px_2px_0px_#ffe600]"
            id="hero-video-play-toggle"
          >
            {isPlaying ? (
              <Pause className="h-3.5 w-3.5 fill-current" />
            ) : (
              <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
            )}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/70 text-white border border-punk-yellow/50 backdrop-blur-md transition-all hover:bg-punk-yellow hover:text-black shadow-[2px_2px_0px_#ff2a85]"
            id="hero-video-mute-toggle"
          >
            {isMuted ? (
              <VolumeX className="h-3.5 w-3.5" />
            ) : (
              <Volume2 className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
