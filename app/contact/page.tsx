"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Send, CheckCircle, Globe } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-background py-16">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/oil-flow.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></div>
        <div className="ww-full px-10 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-muted-foreground">Have questions or need more information? We're here to help.</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="ww-full px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-lg border bg-background p-6 shadow-md transition-transform hover:shadow-lg">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                <Send className="h-6 w-6 text-primary" />
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="rounded-lg bg-primary/10 p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <CheckCircle className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="transition-all focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="transition-all focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99417 99417"
                        className="transition-all focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select onValueChange={handleSelectChange} value={formData.subject}>
                        <SelectTrigger className="transition-all focus:border-primary focus:ring-primary">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      className="transition-all focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full shadow-md transition-all hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                  <Mail className="h-6 w-6 text-primary" />
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-primary/10 p-2 shadow-md">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        PLOT NO. 152, PATEL GOVIND INDUSTRIAL ESTATE, PANDOL,
                        <br />
                        VED ROAD, FATAKDA WADI, SURAT - 395004. (GUJ.) INDIA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-primary/10 p-2 shadow-md">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">
                        Customer Care: +91 99417 99417
                        <br />
                        Mon-Fri, 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-primary/10 p-2 shadow-md">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">jindalpetrochemm77@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-primary/10 p-2 shadow-md">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Website</h3>
                      <p className="text-muted-foreground">www.cryptolubricants.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-gradient-to-br from-primary/5 to-background p-6 shadow-md">
                <Image
                  src="/images/jindal-com-bg.png"
                  alt="Crypto Lubricants Logo"
                  width={300}
                  height={200}
                  className="mx-auto mb-4"
                />
                {/* <p className="text-center italic text-sm text-muted-foreground">
                  "Committed To Superior Quality And Results"
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gradient-to-b from-background to-muted">
        <div className="ww-full px-10">
          <h2 className="mb-6 flex items-center justify-center gap-2 text-2xl font-bold text-center">
            <MapPin className="h-6 w-6 text-primary" />
            Find Us
          </h2>
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg transition-transform hover:shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426.4875884082674!2d72.81988405915196!3d21.211513330239367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb902eaa9b7%3A0x9e119a80e4d603d1!2sJINDAL%20PETROCHEM!5e0!3m2!1sen!2sin!4v1743962115570!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
