import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Leaf, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PlantDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl">Rootsy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/marketplace" className="text-sm font-medium hover:text-green-600 transition-colors">
              Marketplace
            </Link>
            <Link href="/plantsitting" className="text-sm font-medium hover:text-green-600 transition-colors">
              Plant Sitting
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-green-600 transition-colors">
              Community
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] font-medium text-white">
                  3
                </span>
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="hidden md:flex">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="hidden md:flex bg-green-600 hover:bg-green-700">Sign up</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6">
            <Link
              href="/marketplace"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Marketplace
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={`/placeholder.svg?height=600&width=600&text=Plant+${params.id}`}
                  alt={`Plant ${params.id}`}
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="overflow-hidden rounded-md border cursor-pointer hover:border-green-600">
                    <Image
                      src={`/placeholder.svg?height=150&width=150&text=View+${i}`}
                      alt={`Plant view ${i}`}
                      width={150}
                      height={150}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-100">Best Seller</Badge>
                <h1 className="text-3xl font-bold">Monstera Deliciosa</h1>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">4.9 (128 reviews)</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-2xl font-bold text-green-600">$29.99</div>
                <p className="text-sm text-muted-foreground">In stock - usually ships within 24 hours</p>
              </div>

              <div className="mb-6 space-y-4">
                <div className="flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Leaf className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Healthy plant guaranteed</p>
                    <p className="text-xs text-muted-foreground">30-day plant health guarantee</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Truck className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Free shipping on orders over $50</p>
                    <p className="text-xs text-muted-foreground">Delivered in eco-friendly packaging</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-2 text-sm font-medium">Size</p>
                <div className="flex gap-2">
                  <Button variant="outline" className="rounded-full">
                    Small (4")
                  </Button>
                  <Button variant="outline" className="rounded-full bg-green-50 border-green-600 text-green-600">
                    Medium (6")
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    Large (8")
                  </Button>
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-2 text-sm font-medium">Quantity</p>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                    <Minus className="h-3 w-3" />
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <span className="mx-4 w-8 text-center">1</span>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                    <Plus className="h-3 w-3" />
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to Wishlist</span>
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="description" className="mb-12">
            <TabsList className="w-full grid grid-cols-3 mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="care">Care Guide</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <h2 className="text-2xl font-bold">About Monstera Deliciosa</h2>
              <p>
                The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its quirky natural leaf
                holes. These tropical plants are easy to care for and can add a jungle feel to your home.
              </p>
              <p>
                Native to the tropical forests of southern Mexico and Panama, the Monstera Deliciosa is a climbing
                evergreen that can reach heights of 20 meters in its natural habitat. The distinctive holes in its
                leaves are a natural adaptation that allows wind to pass through, preventing the plant from being
                uprooted during storms.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">Plant Details</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Botanical Name</span>
                      <span>Monstera Deliciosa</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Also Known As</span>
                      <span>Swiss Cheese Plant</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Origin</span>
                      <span>Southern Mexico, Panama</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Plant Type</span>
                      <span>Tropical Evergreen</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">Growth</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Mature Height</span>
                      <span>3-10 feet (indoors)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Growth Rate</span>
                      <span>Moderate to Fast</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Leaf Size</span>
                      <span>Up to 18 inches</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Toxicity</span>
                      <span>Toxic to pets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="care" className="space-y-4">
              <h2 className="text-2xl font-bold">Care Instructions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M12 3v18" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="font-medium mb-2">Light</h3>
                  <p className="text-sm text-muted-foreground">
                    Bright, indirect light is ideal. Can tolerate some direct morning sun, but avoid harsh afternoon sun
                    which can burn the leaves.
                  </p>
                </div>
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M12 22V2" />
                      <path d="M5 12H2" />
                      <path d="M22 12h-3" />
                      <path d="M15 12h-3" />
                      <path d="M9 12H6" />
                    </svg>
                  </div>
                  <h3 className="font-medium mb-2">Water</h3>
                  <p className="text-sm text-muted-foreground">
                    Allow the top 1-2 inches of soil to dry out between waterings. Water less in winter. Monsteras are
                    more tolerant of under-watering than over-watering.
                  </p>
                </div>
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M2 12h20" />
                      <path d="M12 2v20" />
                    </svg>
                  </div>
                  <h3 className="font-medium mb-2">Humidity</h3>
                  <p className="text-sm text-muted-foreground">
                    Enjoys higher humidity levels of 60% or more. Regular misting or a humidifier can help, especially
                    in dry environments.
                  </p>
                </div>
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <h3 className="font-medium mb-2">Temperature</h3>
                  <p className="text-sm text-muted-foreground">
                    Thrives in temperatures between 65-85°F (18-30°C). Avoid cold drafts and temperatures below 60°F
                    (15°C).
                  </p>
                </div>
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M3 6h18" />
                      <path d="M7 12h10" />
                      <path d="M10 18h4" />
                    </svg>
                  </div>
                  <h3 className="font-medium mb-2">Soil</h3>
                  <p className="text-sm text-muted-foreground">
                    Use a well-draining potting mix rich in organic matter. A mix of potting soil, perlite, and orchid
                    bark works well.
                  </p>
                </div>
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M16 2s-2 4-2 6c0 3 2 5 2 8 0 2-1 4-4 4-2 0-3-1-3-1" />
                      <path d="M10 10c0-2.5 1.5-6 5-6" />
                    </svg>
                  </div>
                  <h3 className="font-medium mb-2">Fertilizer</h3>
                  <p className="text-sm text-muted-foreground">
                    Feed monthly during the growing season (spring and summer) with a balanced liquid fertilizer diluted
                    to half strength.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Customer Reviews</h2>
                <Button className="bg-green-600 hover:bg-green-700">Write a Review</Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-5xl font-bold">4.9</div>
                  <div className="flex justify-center mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">Based on 128 reviews</div>
                </div>
                <div className="flex-1 space-y-1">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-2">
                      <div className="text-sm text-muted-foreground w-2">{rating}</div>
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 rounded-full"
                          style={{
                            width:
                              rating === 5
                                ? "80%"
                                : rating === 4
                                  ? "15%"
                                  : rating === 3
                                    ? "3%"
                                    : rating === 2
                                      ? "1%"
                                      : "1%",
                          }}
                        />
                      </div>
                      <div className="text-sm text-muted-foreground w-8">
                        {rating === 5 ? "80%" : rating === 4 ? "15%" : rating === 3 ? "3%" : rating === 2 ? "1%" : "1%"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-medium">
                            {i === 1 ? "Emily Johnson" : i === 2 ? "Michael Chen" : "Sarah Williams"}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            Verified Purchase
                          </Badge>
                        </div>
                        <div className="flex items-center mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="ml-2 text-xs text-muted-foreground">2 months ago</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {i === 1 ? "Jun 12, 2025" : i === 2 ? "May 28, 2025" : "Apr 15, 2025"}
                      </div>
                    </div>
                    <h3 className="font-medium mt-2">
                      {i === 1
                        ? "Beautiful, healthy plant!"
                        : i === 2
                          ? "Exceeded my expectations"
                          : "Perfect addition to my collection"}
                    </h3>
                    <p className="mt-2 text-sm">
                      {i === 1
                        ? "My Monstera arrived in perfect condition. The leaves are large and healthy with beautiful fenestrations. It was packaged extremely well and the soil was still slightly moist. Very happy with my purchase!"
                        : i === 2
                          ? "This plant is even more beautiful in person than in the photos. It arrived quickly and was very well packaged. The plant is healthy and has already put out a new leaf in the two weeks I've had it. Highly recommend!"
                          : "I've been looking for a good sized Monstera for months and this one is perfect. The shipping was fast and the plant arrived in great condition with no damage. The care instructions were very helpful too."}
                    </p>
                    <div className="mt-4 flex gap-2">
                      {i === 1 && (
                        <>
                          <Image
                            src="/placeholder.svg?height=80&width=80&text=Review+Photo+1"
                            alt="Review photo"
                            width={80}
                            height={80}
                            className="rounded-md object-cover"
                          />
                          <Image
                            src="/placeholder.svg?height=80&width=80&text=Review+Photo+2"
                            alt="Review photo"
                            width={80}
                            height={80}
                            className="rounded-md object-cover"
                          />
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </TabsContent>
          </Tabs>

          <div>
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Link href={`/plant/${i + 10}`} key={i} className="group">
                  <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                    <div className="relative aspect-square">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=Related+${i}`}
                        alt={`Related Plant ${i}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">
                        {i === 1 ? "Fiddle Leaf Fig" : i === 2 ? "Snake Plant" : i === 3 ? "Pothos" : "ZZ Plant"}
                      </h3>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="font-semibold text-green-600">${(19.99 + i * 5).toFixed(2)}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm text-muted-foreground">
                            {(4 + Math.random() * 0.9).toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Rootsy</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-muted-foreground hover:text-foreground transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
                    Plant Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/plantsitting" className="text-muted-foreground hover:text-foreground transition-colors">
                    Plant Sitting
                  </Link>
                </li>
                <li>
                  <Link href="/care-guides" className="text-muted-foreground hover:text-foreground transition-colors">
                    Plant Care Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <span className="font-semibold">Rootsy</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Rootsy. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
