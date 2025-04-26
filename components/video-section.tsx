"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VideoSectionProps {
  videoUrl: string
  title: string
  description?: string
  className?: string
}

export default function VideoSection({ videoUrl, title, description, className }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <video
          ref={videoRef}
          src={videoUrl}
          className="h-full w-full object-cover"
          loop
          autoPlay
          muted={isMuted}
          playsInline
          onEnded={() => setIsPlaying(false)}
        />

        {/* Overlay with controls */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-6 text-center text-white transition-opacity duration-300 hover:bg-black/30">
          <h2 className="text-3xl font-bold">{title}</h2>
          {description && <p className="mt-2 max-w-md text-lg">{description}</p>}

          <div className="mt-6 flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-white bg-black/50 text-white hover:bg-black/70"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-white bg-black/50 text-white hover:bg-black/70"
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
