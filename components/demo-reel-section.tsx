"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Award } from "lucide-react"

const demoVideo = {
  id: "OMPHJHXUZPo", // 👈 cambia aquí el ID de YouTube
  title: "Mariel Domínguez - Demo Reel 2024",
}

export function DemoReelSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="demo-reel" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Demo Reel 2024</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A curated showcase of my best animation work, highlighting technical skills and creative storytelling.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden sketchbook-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">Featured Demo Reel</CardTitle>
              <CardDescription>
                A comprehensive look at my animation journey and technical expertise
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group">
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${demoVideo.id}?autoplay=1`}
                    title={demoVideo.title}
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
                      src={`https://img.youtube.com/vi/${demoVideo.id}/hqdefault.jpg`}
                      alt={demoVideo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Play className="h-16 w-16 text-white opacity-90" />
                    </div>
                  </button>
                )}
              </div>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground mb-4">
                  This demo reel showcases my expertise in character animation, motion graphics, visual effects, and
                  storytelling through digital media.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Character Animation", "Motion Graphics", "Visual Effects", "3D Modeling", "Compositing"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
