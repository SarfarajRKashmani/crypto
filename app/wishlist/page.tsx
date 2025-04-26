"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Trash2, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/context/wishlist-context"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [selectedSize, setSelectedSize] = useState<Record<number, string>>({})

  const handleSizeChange = (productId: number, size: string) => {
    setSelectedSize((prev) => ({
      ...prev,
      [productId]: size,
    }))
  }

  const handleAddToCart = (product: any) => {
    const size = selectedSize[product.id] || product.sizes[0]

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
      size: size,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} (${size}) added to your cart.`,
    })
  }

  const handleRemoveFromWishlist = (productId: number) => {
    removeFromWishlist(productId)
    toast({
      title: "Removed from wishlist",
      description: "Product has been removed from your wishlist.",
    })
  }

  return (
    <div className="w-full px-10 py-12">
      <div className="mb-6 flex items-center justify-between">
        <Button variant="ghost" asChild>
          <Link href="/products" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        {wishlistItems.length > 0 && (
          <Button variant="outline" onClick={clearWishlist}>
            Clear Wishlist
          </Button>
        )}
      </div>

      <h1 className="mb-8 text-3xl font-bold">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border bg-background p-12 text-center">
          <div className="text-xl font-medium">Your wishlist is empty</div>
          <p className="text-muted-foreground">Looks like you haven't added any products to your wishlist yet.</p>
          <Button asChild>
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlistItems.map((product) => (
            <div key={product.id} className="group rounded-lg border bg-white p-4 transition-all hover:shadow-lg">
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
                  <div className="absolute left-2 top-2 rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                    New
                  </div>
                )}
                {product.bestSeller && (
                  <div className="absolute right-2 top-2 rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
                    Best Seller
                  </div>
                )}
              </div>
              <div className="mt-4">
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-medium text-[#1a1a1a] hover:text-primary transition-colors">{product.name}</h3>
                </Link>
                <p className="mt-1 line-clamp-2 text-sm text-gray-700">{product.description}</p>
                <div className="mt-2">
                  <label className="text-sm font-medium">Size:</label>
                  <select
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm"
                    value={selectedSize[product.id] || product.sizes[0]}
                    onChange={(e) => handleSizeChange(product.id, e.target.value)}
                  >
                    {product.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button size="sm" className="w-full" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="mr-1 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-red-500 hover:bg-red-50 hover:text-red-600"
                    onClick={() => handleRemoveFromWishlist(product.id)}
                  >
                    <Trash2 className="mr-1 h-4 w-4" />
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
