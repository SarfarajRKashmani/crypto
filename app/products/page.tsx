"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/context/wishlist-context"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products, productCategories, productSizes, sortOptions, searchProducts, sortProducts } from "@/lib/products"
import { ChevronRight, Filter, Search, SlidersHorizontal, Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [size, setSize] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { toast } = useToast()

  // Apply filters whenever any filter changes
  useEffect(() => {
    let result = products

    // Apply search filter
    if (searchTerm) {
      result = searchProducts(searchTerm)
    }

    // Apply category filter
    if (category !== "all") {
      result = result.filter((product) => product.category === category)
    }

    // Apply size filter
    if (size !== "all") {
      result = result.filter((product) => product.sizes.includes(size))
    }

    // Apply sorting
    result = sortProducts(result, sortBy)

    setFilteredProducts(result)
  }, [searchTerm, category, size, sortBy])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (value: string) => {
    setCategory(value)
  }

  const handleSizeChange = (value: string) => {
    setSize(value)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
  }

  const handleAddToWishlist = (e: React.MouseEvent, product: any) => {
    e.preventDefault()
    e.stopPropagation()
    addToWishlist(product)
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    })
  }

  const handleRemoveFromWishlist = (e: React.MouseEvent, productId: number) => {
    e.preventDefault()
    e.stopPropagation()
    removeFromWishlist(productId)
    toast({
      title: "Removed from wishlist",
      description: "Product has been removed from your wishlist.",
    })
  }

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
      size: product.sizes[0],
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
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
        <div className="w-full px-10 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Products</h1>
            <p className="mt-4 text-muted-foreground">
              Discover our range of premium quality engine oils and lubricants for all your automotive needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="w-full px-10">
          {/* Filters */}
          <div className="mb-8 rounded-lg border bg-gradient-to-r from-primary/5 to-background p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-medium">Filter Products</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="pl-10 transition-all focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <Select value={category} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="transition-all focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="transition-all focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={size} onValueChange={handleSizeChange}>
                  <SelectTrigger className="transition-all focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    {productSizes.map((size) => (
                      <SelectItem key={size.value} value={size.value}>
                        {size.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6 flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="rounded-lg border bg-background p-8 text-center shadow-md">
              <h2 className="text-xl font-medium">No products found</h2>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setCategory("all")
                  setSize("all")
                  setSortBy("featured")
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group rounded-lg border bg-background p-4 transition-all hover:shadow-lg"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="h-full w-full object-contain transition-transform group-hover:scale-105"
                      />
                    </Link>
                    {product.new && (
                      <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                        New
                      </div>
                    )}
                    {product.bestSeller && (
                      <div className="absolute right-2 top-2 rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
                        Best Seller
                      </div>
                    )}

                    {/* Quick action buttons */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-2 bg-black/60 transition-all ${hoveredProduct === product.id ? "opacity-100" : "opacity-0"}`}
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className={`rounded-full ${isInWishlist(product.id) ? "bg-red-100 text-red-500" : "bg-white text-[#1a1a1a]"} hover:bg-gray-100 h-8 w-8 p-0`}
                        onClick={(e) =>
                          isInWishlist(product.id)
                            ? handleRemoveFromWishlist(e, product.id)
                            : handleAddToWishlist(e, product)
                        }
                      >
                        <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-full bg-white text-[#1a1a1a] hover:bg-gray-100 h-8 w-8 p-0"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-1">
                      <Badge variant="outline" className="text-xs text-primary border-primary">
                        {product.category}
                      </Badge>
                    </div>
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-medium hover:text-primary transition-colors">{product.name}</h3>
                    </Link>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {product.sizes.slice(0, 3).map((size) => (
                        <span key={size} className="inline-flex rounded-full bg-muted px-2 py-1 text-xs">
                          {size}
                        </span>
                      ))}
                      {product.sizes.length > 3 && (
                        <span className="inline-flex rounded-full bg-muted px-2 py-1 text-xs">
                          +{product.sizes.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
                      <Button size="sm" className="bg-primary text-white hover:bg-primary/90" asChild>
                        <Link href={`/products/${product.id}`}>
                          <span className="flex items-center gap-1">
                            View Details
                            <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="relative bg-gradient-to-b from-background to-muted py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/oil-flow.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></div>
        <div className="w-full px-10 relative z-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Bulk Orders for Businesses</h2>
              <p className="text-muted-foreground">
                We offer special pricing and packaging options for automotive shops, fleet operators, and industrial
                clients. Contact our sales team to discuss your specific requirements.
              </p>
              <div>
                <Button asChild className="shadow-md transition-all hover:shadow-lg">
                  <Link href="/contact" className="flex items-center gap-2">
                    Request a Quote
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/barcode.png"
                alt="Bulk packaging"
                width={200}
                height={200}
                className=" object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
