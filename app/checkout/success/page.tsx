import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  // Generate a random order number
  const orderNumber = `CL-${Math.floor(100000 + Math.random() * 900000)}`

  return (
    <div className="container flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 rounded-full bg-primary/20 p-4">
        <CheckCircle className="h-16 w-16 text-primary" />
      </div>

      <h1 className="text-3xl font-bold">Order Successful!</h1>

      <p className="mt-4 max-w-md text-muted-foreground">
        Thank you for your purchase. Your order has been received and is being processed.
      </p>

      <div className="mt-8 rounded-lg border bg-background p-6">
        <h2 className="mb-4 text-xl font-medium">Order Details</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Order Number:</span>
            <span className="font-medium">{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Date:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Status:</span>
            <span className="text-primary">Processing</span>
          </div>
        </div>
      </div>

      <p className="mt-8 text-muted-foreground">A confirmation email has been sent to your email address.</p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}
