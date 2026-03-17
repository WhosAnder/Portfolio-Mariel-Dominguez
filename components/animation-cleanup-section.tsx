"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"

const video = {
  id: "SglZHjA0Yng",
  title: "Animation and Clean Up",
  description:
    "Trabajo de animación y clean up realizado por Mariel Domínguez.",
}

export function AnimationCleanupSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="animation-cleanup" className="py-20 bg-card/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Animation and Clean Up</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Showcasing animation and clean up work, bringing sketches to polished final frames.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 sketchbook-border">
            <CardHeader>
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-full h-full relative"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Play className="h-16 w-16 text-white opacity-90" />
                    </div>
                  </button>
                )}
              </div>
              <CardTitle className="text-xl">{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">{video.description}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
