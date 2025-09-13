"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { X, ZoomIn, ChevronDown, ChevronUp } from "lucide-react"

const images = [
  {
    src: "/images/sketchbook-hands.png",
    alt: "Hand studies and character sketches",
    title: "Life Drawing Studies",
    hasProcess: true,
    processImages: [
      { src: "/process-sketch-1.jpg", alt: "Initial sketches", title: "Initial Sketches" },
      { src: "/process-lines-1.jpg", alt: "Clean line art", title: "Line Art" },
      { src: "/process-color-1.jpg", alt: "Color studies", title: "Color Studies" },
      { src: "/images/sketchbook-hands.png", alt: "Final result", title: "Final Result" },
    ],
  },
  {
    src: "/character-design-sketches.jpg",
    alt: "Character design concepts",
    title: "Character Concepts",
    hasProcess: true,
    processImages: [
      { src: "/process-concept-1.jpg", alt: "Character concepts", title: "Concepts" },
      { src: "/process-refine-1.jpg", alt: "Refined design", title: "Refinement" },
      { src: "/process-final-1.jpg", alt: "Final character", title: "Final Design" },
    ],
  },
  {
    src: "/storyboard-panels-animation.jpg",
    alt: "Storyboard panels",
    title: "Storyboard Development",
  },
  {
    src: "/digital-painting-landscape.jpg",
    alt: "Digital environment painting",
    title: "Environment Design",
    hasProcess: true,
    processImages: [
      { src: "/process-thumbnail-1.jpg", alt: "Thumbnails", title: "Thumbnails" },
      { src: "/process-composition-1.jpg", alt: "Composition", title: "Composition" },
      { src: "/process-lighting-1.jpg", alt: "Lighting pass", title: "Lighting" },
      { src: "/digital-painting-landscape.jpg", alt: "Final painting", title: "Final Painting" },
    ],
  },
  {
    src: "/3d-character-model-turnaround.jpg",
    alt: "3D character model",
    title: "3D Character Modeling",
  },
  {
    src: "/animation-keyframes-sequence.jpg",
    alt: "Animation keyframes",
    title: "Animation Keyframes",
  },
]

export function ImagesSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null)
  const [openAccordions, setOpenAccordions] = useState<Set<number>>(new Set())

  const toggleAccordion = (index: number) => {
    const newOpenAccordions = new Set(openAccordions)
    if (newOpenAccordions.has(index)) {
      newOpenAccordions.delete(index)
    } else {
      newOpenAccordions.add(index)
    }
    setOpenAccordions(newOpenAccordions)
  }

  const openLightbox = (imageData: { src: string; alt: string; title: string }, event: React.MouseEvent) => {
    event.stopPropagation()
    setSelectedImage(imageData)
  }

  return (
    <section id="images" className="py-20 bg-card/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Illustrations & Design</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A collection of sketches, character designs, and digital illustrations that showcase my artistic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 sketchbook-border"
            >
              <div
                className="relative aspect-square overflow-hidden cursor-pointer"
                onClick={(e) => openLightbox({ src: image.src, alt: image.alt, title: image.title }, e)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-center mb-3">{image.title}</h3>

                {image.hasProcess && (
                  <Collapsible open={openAccordions.has(index)} onOpenChange={() => toggleAccordion(index)}>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Ver proceso
                        {openAccordions.has(index) ? (
                          <ChevronUp className="h-4 w-4 ml-2" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-2" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3">
                      <div className="grid grid-cols-2 gap-2">
                        {image.processImages?.map((processImg, processIndex) => (
                          <div
                            key={processIndex}
                            className="relative aspect-square cursor-pointer group/process"
                            onClick={(e) => openLightbox(processImg, e)}
                          >
                            <Image
                              src={processImg.src || "/placeholder.svg"}
                              alt={processImg.alt}
                              fill
                              className="object-cover rounded group-hover/process:scale-105 transition-transform duration-200"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/process:bg-black/20 transition-colors flex items-center justify-center">
                              <ZoomIn className="h-4 w-4 text-white opacity-0 group-hover/process:opacity-100 transition-opacity" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 text-center">
                              {processImg.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </div>
            </Card>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={800}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
