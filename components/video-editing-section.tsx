import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"

const video = {
  id: "dQw4w9WgXcQ",
  title: "Animation Showcase Reel",
  description:
    "A comprehensive showcase of my animation work including character animation, motion graphics, and visual effects techniques.",
}

export function VideoEditingSection() {
  return (
    <section id="video-editing" className="py-20 bg-card/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Video Editing & Animation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore my animated projects, from character design to motion graphics and visual effects.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 sketchbook-border">
            <CardHeader>
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
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
