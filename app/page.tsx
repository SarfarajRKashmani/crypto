"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Gauge, Shield, Zap, ChevronRight, Star, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUser } from "@/context/user-context"
import ProductCarousel from "@/components/product-carousel"
import VideoSection from "@/components/video-section"
import { getFeaturedProducts, getNewProducts, getBestSellerProducts, Product } from "@/lib/products"

export default function Home() {
  const { user, isAuthenticated } = useUser()
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [newProducts, setNewProducts] = useState<Product[]>([])
  const [bestSellerProducts, setBestSellerProducts] = useState<Product[]>([])

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts())
    setNewProducts(getNewProducts())
    setBestSellerProducts(getBestSellerProducts())
  }, [])

  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/30 via-primary/10 to-background">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32 px-4 sm:px-6 lg:px-8">
          {isAuthenticated && (
            <div className="mb-4 rounded-lg bg-primary/10 px-4 py-2 text-primary">
              Welcome back, {user?.firstName}! 👋
            </div>
          )}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            High-Performance <span className="text-primary">Engine Oils</span> & Lubricants
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            We provide premium quality lubricants engineered for maximum performance and engine protection.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="shadow-lg transition-all hover:shadow-xl" asChild>
              <Link href="/products" className="flex items-center gap-2">
                Explore Products <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="w-full py-12 px-14">
        <div className="px-6 w-full  sm:px-6 lg:px-8">
          <ProductCarousel products={featuredProducts} autoplay={true} interval={4000} />
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gradient-to-r from-background to-muted py-12">
        <div className="px-4 sm:px-6 lg:px-8">
          <VideoSection
            videoUrl="videos/home-video.mp4"
            title="Experience Premium Engine Protection"
            description="Our advanced formulations provide superior protection for your engine in all conditions."
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Why Choose Us
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Choose Crypto Lubricants?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Superior Performance",
                desc: "Our oils are engineered to deliver exceptional performance under extreme conditions."
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Engine Protection",
                desc: "Advanced formulations that protect your engine against wear, deposits, and corrosion."
              },
              {
                icon: <Gauge className="h-10 w-10 text-primary" />,
                title: "Fuel Efficiency",
                desc: "Specially designed to improve fuel economy and reduce emissions."
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 text-center shadow-md transition-transform hover:scale-105">
                <div className="rounded-full bg-primary/10 p-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="relative bg-gradient-to-b from-background to-muted py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">New Arrivals</h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/products" className="flex items-center gap-2">
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {newProducts.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="group rounded-lg border bg-background p-4 transition-all hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                    New
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-medium">${product.price.toFixed(2)}</span>
                    <Button size="sm" variant="secondary">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Best Sellers</h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/products" className="flex items-center gap-2">
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {bestSellerProducts.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="group rounded-lg border bg-background p-4 transition-all hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute right-2 top-2 rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
                    Best Seller
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-medium">${product.price.toFixed(2)}</span>
                    <Button size="sm" variant="secondary">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Testimonials
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Your Testimonials loop (same as before) */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Your CTA Section Content */}
        </div>
      </section>

    </div>
  )
}
