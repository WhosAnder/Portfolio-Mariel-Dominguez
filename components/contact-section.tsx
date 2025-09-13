"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram, Linkedin, Youtube } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Let's Create Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Ready to bring your ideas to life? Get in touch and let's discuss your next animation project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="sketchbook-border">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'd love to hear about your project ideas and how we can collaborate.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="sketchbook-border">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Connect with me through various channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>mariel.dominguezlo@udlap.mx</span>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-primary" />
                  <span>@mags._.737</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span>-</span>
                </div>
                <div className="flex items-center gap-3">
                  <Youtube className="h-5 w-5 text-primary" />
                  <span>-</span>
                </div>
              </CardContent>
            </Card>

            <Card className="sketchbook-border">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4 font-kalam text-lg">
                    "Hoponopono."
                  </p>
                  <p className="text-sm text-muted-foreground">- Walter Bazar</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
