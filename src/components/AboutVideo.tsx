"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX, Play, Pause, RotateCcw } from "lucide-react";
import { PunkBadge } from "./PaintSplatter";

interface AboutVideoProps {
  posterSrc?: string;
  videoSrc?: string;
}

export default function AboutVideo({
  posterSrc,
  videoSrc = "/cute-robot.mp4",
}: AboutVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!motionPreference.matches) video.play().catch(() => {});
    const handleMotionChange = () => {
      if (motionPreference.matches) video.pause();
    };
    motionPreference.addEventListener("change", handleMotionChange);
    return () => motionPreference.removeEventListener("change", handleMotionChange);
  }, []);

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

  const restartVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  return (
    <div className="group relative h-[340px] md:h-[440px] overflow-hidden rounded-2xl md:rounded-l-3xl border-4 border-black/80 bg-black/90 shadow-[10px_10px_0px_#ff2a85]">
      {!hasVideoError ? (
        <>
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            loop
            muted={isMuted}
            playsInline
            onLoadedData={() => setIsLoaded(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => setHasVideoError(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            id="about-scenario-video"
          />
          {/* Subtle gradient vignette */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
            aria-hidden="true"
          />
        </>
      ) : (
        posterSrc ? (
          <>
            <Image
              src={posterSrc}
              alt="AI risk scenario exploration"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
              aria-hidden="true"
            />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-black/90">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>
        )
      )}

      {/* Floating Badges */}
      <div className="absolute top-4 left-4 z-20">
        <PunkBadge color="yellow">
          ⚡ REAL-WORLD SCENARIOS
        </PunkBadge>
      </div>

      <div className="absolute bottom-4 left-4 z-20">
        <PunkBadge color="pink">
          🤖 RESPONSIBLE AI
        </PunkBadge>
      </div>

      {/* Video Control Buttons (Play/Pause, Mute/Unmute, Restart) */}
      {!hasVideoError && isLoaded && (
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/80 text-white border border-punk-pink/50 backdrop-blur-md transition-all hover:bg-punk-pink hover:text-black hover:scale-105 shadow-[2px_2px_0px_#ffe600]"
            id="video-play-toggle"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 fill-current" />
            ) : (
              <Play className="h-4 w-4 fill-current ml-0.5" />
            )}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/80 text-white border border-punk-yellow/50 backdrop-blur-md transition-all hover:bg-punk-yellow hover:text-black hover:scale-105 shadow-[2px_2px_0px_#ff2a85]"
            id="video-mute-toggle"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={restartVideo}
            aria-label="Restart video"
            className="hidden sm:flex h-11 w-11 items-center justify-center rounded-lg bg-black/80 text-white border border-white/30 backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-105 shadow-[2px_2px_0px_#000]"
            id="video-restart-button"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
