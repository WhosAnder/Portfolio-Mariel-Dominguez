"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowDown } from "lucide-react"
import Image from "next/image"
import { asset } from "@/lib/asset"   // 👈 importa el helper

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="w-full">
          <div className="mb-8 relative w-full">
            <Image
              src={asset("/images/portfolio-cover.png")}  // 👈 antes: "/images/portfolio-cover.png"
              alt="Digital Animation Portfolio of Mariel Domínguez"
              width={1920}
              height={1080}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-primary">Digital Animation</span>
            <br />
            Portfolio
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Bringing stories to life through creative animation and visual storytelling
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("demo-reel")}>
              <Play className="mr-2 h-5 w-5" />
              Watch Demo Reel
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("video-editing")}>
              View My Work
            </Button>
          </div>

          <div className="animate-bounce">
            <Button variant="ghost" size="icon" onClick={() => scrollToSection("video-editing")}
              className="text-muted-foreground hover:text-primary">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
