"use client"

import {use,useState } from "react"

import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Minus, Plus, ShoppingCart, Truck, Shield, Award, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getProductById, getSimilarProducts } from "@/lib/products"
import { useCart } from "@/context/cart-context"
import { useWishlist } from "@/context/wishlist-context"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function ProductDetailPage({ params }: { params:Promise< { id: string }> }) {
  const router = useRouter()
  const { id } = use(params)
  const productId = Number.parseInt(id)
  const product = getProductById(productId)
  const similarProducts = getSimilarProducts(productId, 4)

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "")
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { toast } = useToast()

  if (!product) {
    return (
      <div className="w-full px-10 py-12 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-4 text-muted-foreground">The product you are looking for does not exist.</p>
        <Button className="mt-6" asChild>
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    )
  }

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: quantity,
      size: selectedSize,
    })

    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} (${selectedSize}) added to your cart.`,
      action: (
        <ToastAction altText="View Cart" onClick={() => router.push("/cart")}>
          View Cart
        </ToastAction>
      ),
    })
  }

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: quantity,
      size: selectedSize,
    })

    router.push("/checkout")
  }

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      toast({
        title: "Removed from wishlist",
        description: "Product removed from your wishlist",
      })
    } else {
      addToWishlist(product)
      toast({
        title: "Added to wishlist",
        description: "Product added to your wishlist",
        action: (
          <ToastAction altText="View Wishlist" onClick={() => router.push("/wishlist")}>
            View Wishlist
          </ToastAction>
        ),
      })
    }
  }

  return (
    <div className="w-full px-20 py-12 ">
      <Button variant="ghost" className="mb-6" asChild>
        <Link href="/products" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>
      </Button>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="rounded-lg border bg-background p-4 shadow-md">
          <div className="relative overflow-hidden rounded-md">
            <div className="absolute right-3 top-3 z-10">
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full ${isInWishlist(product.id) ? "bg-red-100 text-red-500" : "bg-white"}`}
                onClick={toggleWishlist}
              >
                <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
              </Button>
            </div>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Product Video (if available) */}
          {product.videoUrl && (
            <div className="mt-4">
              <h3 className="mb-2 text-sm font-medium">Product Video</h3>
              <div className="aspect-video overflow-hidden rounded-md">
                <iframe
                  src={product.videoUrl}
                  title={`${product.name} Video`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6 ">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-sm text-primary">{product.category}</span>
              {product.new && (
                <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">New</span>
              )}
              {product.bestSeller && (
                <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs text-white">Best Seller</span>
              )}
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-2 text-2xl font-semibold">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="font-medium">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className="min-w-[60px]"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Quantity</label>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => handleQuantityChange(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="flex-1 shadow-md" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button className="flex-1" variant="secondary" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>

          <div className="rounded-lg bg-gradient-to-r from-primary/10 to-background p-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>In stock - ready to ship</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12 m-1">
        <Tabs defaultValue="specifications">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features & Benefits</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="mt-6 rounded-lg border bg-background p-6 shadow-md">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-medium">
              <Award className="h-5 w-5 text-primary" />
              Technical Specifications
            </h3>
            <ul className="space-y-2">
              {product.details?.specifications?.map((spec, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="features" className="mt-6 rounded-lg border bg-background p-6 shadow-md">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-medium">
              <Star className="h-5 w-5 text-primary" />
              Key Features & Benefits
            </h3>
            <ul className="space-y-2">
              {[...(product.details?.features || []), ...(product.details?.benefits || [])].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="applications" className="mt-6 rounded-lg border bg-background p-6 shadow-md">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-medium">
              <Shield className="h-5 w-5 text-primary" />
              Recommended Applications
            </h3>
            <ul className="space-y-2">
              {product.details?.applications?.map((application, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{application}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-16 m-1">
          <h2 className="mb-6 text-2xl font-bold">Similar Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {similarProducts.map((similarProduct) => (
              <Link
                href={`/products/${similarProduct.id}`}
                key={similarProduct.id}
                className="group rounded-lg border bg-background p-4 transition-all hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src={similarProduct.image || "/placeholder.svg"}
                    alt={similarProduct.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-medium">{similarProduct.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{similarProduct.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-medium">${similarProduct.price.toFixed(2)}</span>
                    <Button size="sm" variant="secondary">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="mt-12 container-1 m-1">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How often should I change my oil?</AccordionTrigger>
            <AccordionContent>
              For synthetic oils like this one, we recommend changing every 7,500 to 10,000 miles under normal driving
              conditions. However, always follow your vehicle manufacturer's recommendations for oil change intervals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is this oil suitable for my vehicle?</AccordionTrigger>
            <AccordionContent>
              This oil is suitable for most modern vehicles that require the specified viscosity grade. Always check
              your owner's manual for the recommended oil specifications before purchase.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What are the benefits of synthetic oil?</AccordionTrigger>
            <AccordionContent>
              Synthetic oils offer better performance in extreme temperatures, improved engine protection, longer change
              intervals, better fuel economy, and reduced engine deposits compared to conventional oils.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
