import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="w-full px-0 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 px-4 md:px-8">
          <div className="space-y-3">
            <div className="mb-4">
              <Image
                src="/images/crypto-only.png"
                alt="Crypto Lubricants Logo"
                width={150}
                height={40}
                className="h-10 w-auto rounded-xl"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Premium quality engine oils and lubricants for automotive and industrial applications.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                  Engine Oils
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                  Transmission Fluids
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                  Industrial Lubricants
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for updates</p>
          </div>
        </div>
        
        <div className="bg-[#f27b21] py-3 text-center mt-8">
          <p className="text-sm font-medium text-black">
            ENGINE OIL | GEAR OIL | GREASE | COOLANT | HYDRAULIC OIL
          </p>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Crypto Lubricants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
