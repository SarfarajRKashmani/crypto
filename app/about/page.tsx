import Image from "next/image"
import Link from "next/link"
import { Award, Clock, Globe, Users, ChevronRight, Star, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex  flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/30 via-primary/10 to-background py-16 md:py-24">
        <div
          className="absolute  inset-0 opacity-10"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></div>
        <div className="w-full px-10 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Crypto Lubricants</h1>
              <p className="text-xl text-muted-foreground">
                We're on a mission to provide the highest quality engine oils and lubricants to maximize performance and
                protect engines worldwide.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/about-crypto.jpg?height=400&width=600"
                alt="Crypto Lubricants facility"
                width={600}
                height={400}
                className="rounded-lg opacity-80 object-cover shadow-lg transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="w-full px-10">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Our Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2010, Crypto Lubricants began as a specialized research team focused on developing advanced
              lubricant technologies. What started as a modest operation has grown into a leading provider of premium
              engine oils and lubricants, serving customers across the automotive, racing, and industrial sectors.
            </p>
            <p className="text-muted-foreground">
              Our journey has been guided by a commitment to excellence, innovation, and environmental responsibility.
              We work directly with engineers and manufacturers to ensure our products meet the highest standards, while
              our state-of-the-art facilities employ the latest technologies to create formulations that exceed industry
              specifications.
            </p>
            <p className="text-muted-foreground">
              Today, Crypto Lubricants continues to expand its reach while staying true to its founding principles.
              We're proud of our heritage and excited about the future as we continue to develop new products and
              solutions that meet the evolving needs of modern engines.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-gradient-to-t from-muted to-background py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></div>
        <div className="w-full px-10 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              What We Stand For
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="rounded-full bg-primary/10 p-4 shadow-sm">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Quality</h3>
              <p className="text-muted-foreground">
                We're committed to providing products of the highest quality, from research to manufacturing.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="rounded-full bg-primary/10 p-4 shadow-sm">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Sustainability</h3>
              <p className="text-muted-foreground">
                We prioritize environmentally responsible practices throughout our production process.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="rounded-full bg-primary/10 p-4 shadow-sm">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Partnership</h3>
              <p className="text-muted-foreground">
                We build lasting relationships with our customers, suppliers, and communities.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="rounded-full bg-primary/10 p-4 shadow-sm">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously seek new ways to improve our products and processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="w-full px-10">
          <div className="text-center mb-12">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Meet Our Team
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">Our Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Wasim Amdani",
                position: "CEO & Founder",
                image: "/images/wasim.png?height=300&width=300",
                bio: "With over 20 years of experience in the automotive industry, Wasim founded Crypto Lubricants with a vision to revolutionize engine performance.",
              },
              {
                name: "Yasin Bhai",
                position: "Chief Technology Officer",
                image: "/images/yasin.png?height=300&width=300",
                bio: "Yasin leads our research and development team, creating innovative formulations that push the boundaries of lubricant technology.",
              },
              {
                name: "Sohel Amdani",
                position: "Head of Operations",
                image: "/images/sohel.png?height=300&width=300",
                bio: "Michael oversees all operational aspects of Crypto Lubricants, ensuring efficiency and quality across our production facilities.",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 text-center">
                <div className="overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="h-48 w-48 object-cover transition-transform hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-primary">{member.position}</p>
                  <p className="mt-2 text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/10 to-background py-12">
        <div className="w-full px-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-md">
              <Star className="mb-2 h-8 w-8 text-primary" />
              <span className="text-3xl font-bold">12+</span>
              <span className="text-sm text-muted-foreground">Years Experience</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-md">
              <Shield className="mb-2 h-8 w-8 text-primary" />
              <span className="text-3xl font-bold">50+</span>
              <span className="text-sm text-muted-foreground">Products</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-md">
              <Users className="mb-2 h-8 w-8 text-primary" />
              <span className="text-3xl font-bold">10k+</span>
              <span className="text-sm text-muted-foreground">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-md">
              <Zap className="mb-2 h-8 w-8 text-primary" />
              <span className="text-3xl font-bold">24</span>
              <span className="text-sm text-muted-foreground">Countries Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-background py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></div>
        <div className="w-full px-10 relative z-10">
          <div className="mx-auto max-w-3xl rounded-xl bg-background p-8 shadow-lg text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">Join the Crypto Lubricants Family</h2>
            <p className="mb-8 text-muted-foreground">
              Whether you're a business looking for premium lubricant products or a potential partner, we'd love to hear
              from you.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="shadow-md transition-all hover:shadow-lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
