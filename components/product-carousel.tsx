"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products"

interface ProductCarouselProps {
  products: Product[]
  title?: string
  autoplay?: boolean
  interval?: number
}

export default function ProductCarousel({ products, title, autoplay = true, interval = 4000 }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1))
  }, [products.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1))
  }, [products.length])
  const Images = [
    { name: "Bike Slide", image: "/images/sl-bike.png" },
    { name: "3in1 Product", image: "/images/3in1.PNG" },
    { name: "Crane Slide", image: "/images/sl-crane.png" },
    { name: "Navigator Slide", image: "/images/navigator.PNG"}
  ]

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isHovering || products.length <= 1) return

    const timer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [autoplay, currentIndex, interval, isHovering, nextSlide, products.length])

  if (products.length === 0) return null

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {title && <h2 className="mb-4 text-2xl font-bold">{title}</h2>}

      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        {/* Carousel slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Images.map((Images, index) => (
  <div key={index} className="flex-shrink-0 w-full">
    <Image
      src={Images.image} // Assuming `product.image` is the image URL
      alt={Images.name || "Product Image"}
      width={1300}
      height={800}
      className="object-contain md:object-cover"
    />
  </div>
))}
          {/* {products.map((product) => (
            <div key={product.id} className="relative min-w-full">
              <Link href={`/products/${product.id}`} className="block">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={1200}
                  height={675}
                  className="object-contain md:object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="mt-2 max-w-md">{product.description}</p>
                  <p className="mt-2 text-xl font-bold">${product.price.toFixed(2)}</p>
                  <Button className="mt-4" size="sm">
                    View Product
                  </Button>
                </div>
              </Link>
            </div>
          ))} */}
        </div>

        {/* Navigation arrows */}
        {products.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-background/80 text-foreground hover:bg-background/90"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-background/80 text-foreground hover:bg-background/90"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </>
        )}

        {/* Indicators */}
        {products.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentIndex ? "bg-primary w-4" : "bg-primary/50",
                )}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
