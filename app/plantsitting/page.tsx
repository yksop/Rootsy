import Link from "next/link"
import Image from "next/image"
import { Filter, MapPin, Search, SlidersHorizontal, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function PlantsittingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
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
              className="h-6 w-6 text-green-600"
            >
              <path d="M2 22a10 10 0 0 1 20 0" />
              <path d="M16 7a4 4 0 0 0-8 0" />
              <path d="M12 22V8" />
              <path d="M9 10a3 3 0 0 0 6 0" />
            </svg>
            <span className="text-xl">Rootsy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/marketplace" className="text-sm font-medium hover:text-green-600 transition-colors">
              Marketplace
            </Link>
            <Link href="/plantsitting" className="text-sm font-medium text-green-600">
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
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Plant Sitting Services</h1>
              <p className="text-muted-foreground mt-1">Find reliable plant sitters in your area</p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by location..." className="w-full pl-8" />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Find the perfect plant sitter with these filters.</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-6 py-6">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Price Range (per day)</h3>
                      <Slider defaultValue={[0, 50]} max={100} step={1} />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">$0</span>
                        <span className="text-xs text-muted-foreground">$100+</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Distance</h3>
                      <Slider defaultValue={[5]} max={50} step={1} />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">0 miles</span>
                        <span className="text-xs text-muted-foreground">50+ miles</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Services</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="watering" />
                          <Label htmlFor="watering">Watering</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fertilizing" />
                          <Label htmlFor="fertilizing">Fertilizing</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="pruning" />
                          <Label htmlFor="pruning">Pruning</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="repotting" />
                          <Label htmlFor="repotting">Repotting</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="pest-control" />
                          <Label htmlFor="pest-control">Pest Control</Label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Experience Level</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="beginner-sitter" />
                          <Label htmlFor="beginner-sitter">Beginner (0-1 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="intermediate-sitter" />
                          <Label htmlFor="intermediate-sitter">Intermediate (1-3 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="expert-sitter" />
                          <Label htmlFor="expert-sitter">Expert (3+ years)</Label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Availability</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="weekdays" />
                          <Label htmlFor="weekdays">Weekdays</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="weekends" />
                          <Label htmlFor="weekends">Weekends</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="holidays" />
                          <Label htmlFor="holidays">Holidays</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline">Reset</Button>
                    <Button className="bg-green-600 hover:bg-green-700">Apply Filters</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Showing 15 results</span>
            </div>
            <Select defaultValue="distance">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Distance</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-lg border bg-white p-6 transition-all hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={`/placeholder.svg?height=64&width=64&text=Sitter+${i + 1}`}
                      alt={`Plant Sitter ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {i % 3 === 0 ? "Sarah Johnson" : i % 3 === 1 ? "Michael Chen" : "Emma Rodriguez"}
                    </h3>
                    <div className="mt-1 flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm text-muted-foreground">
                        {(4 + Math.random()).toFixed(1)} ({Math.floor(Math.random() * 30) + 5} reviews)
                      </span>
                    </div>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>{(Math.random() * 10).toFixed(1)} miles away</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {i % 3 === 0 && (
                    <>
                      <Badge variant="outline" className="bg-green-50">
                        Watering
                      </Badge>
                      <Badge variant="outline" className="bg-green-50">
                        Pruning
                      </Badge>
                      <Badge variant="outline" className="bg-green-50">
                        Fertilizing
                      </Badge>
                    </>
                  )}
                  {i % 3 === 1 && (
                    <>
                      <Badge variant="outline" className="bg-green-50">
                        Watering
                      </Badge>
                      <Badge variant="outline" className="bg-green-50">
                        Repotting
                      </Badge>
                      <Badge variant="outline" className="bg-green-50">
                        Pest Control
                      </Badge>
                    </>
                  )}
                  {i % 3 === 2 && (
                    <>
                      <Badge variant="outline" className="bg-green-50">
                        Watering
                      </Badge>
                      <Badge variant="outline" className="bg-green-50">
                        Pruning
                      </Badge>
                      <Badge variant="outline" className="bg-green-50">
                        Plant Health
                      </Badge>
                    </>
                  )}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {i % 3 === 0
                    ? "Plant enthusiast with 5+ years of experience caring for all types of indoor plants."
                    : i % 3 === 1
                      ? "Certified botanist specializing in tropical plants and succulents."
                      : "Passionate plant lover with expertise in rare and exotic species."}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-medium text-green-600">${10 + i * 2}/day</span>
                  <Link href={`/sitter/${i + 1}`}>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
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
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">Previous</span>
              </Button>
              <Button variant="outline" className="h-8 w-8" disabled>
                1
              </Button>
              <Button variant="outline" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" className="h-8 w-8">
                3
              </Button>
              <Button variant="outline" size="icon">
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
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">Next</span>
              </Button>
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
                <path d="M2 22a10 10 0 0 1 20 0" />
                <path d="M16 7a4 4 0 0 0-8 0" />
                <path d="M12 22V8" />
                <path d="M9 10a3 3 0 0 0 6 0" />
              </svg>
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
