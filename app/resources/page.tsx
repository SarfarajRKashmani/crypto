import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Video, Download, ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Resources</h1>
          <p className="mt-4 text-muted-foreground">
            Explore our collection of guides, videos, and technical documents to help you get the most out of our
            products.
          </p>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guides">Guides & Articles</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="technical">Technical Documents</TabsTrigger>
          </TabsList>

          {/* Guides & Articles */}
          <TabsContent value="guides" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Understanding Oil Viscosity",
                  description:
                    "Learn what those numbers on oil containers mean and how to choose the right viscosity for your vehicle.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "#",
                },
                {
                  title: "Synthetic vs. Conventional Oil",
                  description:
                    "Explore the differences between synthetic and conventional oils and which is best for your engine.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "#",
                },
                {
                  title: "How to Extend Engine Life",
                  description: "Practical tips and maintenance practices to maximize your engine's lifespan.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "#",
                },
                {
                  title: "Oil Change Best Practices",
                  description:
                    "Step-by-step guide to performing the perfect oil change for optimal engine performance.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "#",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader className="p-0">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={200}
                        className="h-48 w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-2">{item.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="border-t p-6 pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={item.link} className="flex items-center justify-center gap-2">
                        <FileText className="h-4 w-4" />
                        Read Article
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Videos */}
          <TabsContent value="videos" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "How Engine Oil Works",
                  description:
                    "A detailed explanation of how engine oil protects and lubricates your engine components.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                {
                  title: "Oil Change Tutorial",
                  description: "Step-by-step guide to changing your oil at home with professional tips.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                {
                  title: "Racing Oil Performance Test",
                  description: "See how our racing formula performs under extreme conditions in this test video.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                {
                  title: "Product Comparison",
                  description: "Compare different oil types and see which one is right for your specific vehicle.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={200}
                        className="h-48 w-full object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                        <Video className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-2">{item.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="border-t p-6 pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Watch Video
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Technical Documents */}
          <TabsContent value="technical" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Product Data Sheets",
                  description: "Detailed technical specifications for all our products.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "#",
                },
                {
                  title: "Safety Data Sheets (SDS)",
                  description: "Safety information and handling guidelines for our products.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "#",
                },
                {
                  title: "OEM Approvals List",
                  description: "Complete list of manufacturer approvals for our lubricants.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "#",
                },
                {
                  title: "Technical Bulletins",
                  description: "Latest technical updates and recommendations for specific applications.",
                  image: "/placeholder.svg?height=200&width=400",
                  link: "#",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader className="p-0">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={200}
                        className="h-48 w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-2">{item.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="border-t p-6 pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={item.link} className="flex items-center justify-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter Signup */}
        <div className="mt-12 rounded-lg bg-muted p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Stay Updated</h2>
            <p className="mt-2 text-muted-foreground">
              Subscribe to our newsletter to receive the latest product updates, technical articles, and maintenance
              tips.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border bg-background px-4 py-2 sm:min-w-[300px]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
