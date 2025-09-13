import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VideoEditingSection } from "@/components/video-editing-section"
import { DemoReelSection } from "@/components/demo-reel-section"
import { ImagesSection } from "@/components/images-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VideoEditingSection />
      <DemoReelSection />
      <ImagesSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-card/10 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 Mariel Domínguez. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-2">Digital Animation Portfolio - Bringing Stories to Life</p>
        </div>
      </footer>
    </main>
  )
}
