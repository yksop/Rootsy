"use client"  // Aggiungiamo questa direttiva per poter usare gli stati in React

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, Search, SlidersHorizontal, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Plant data for the marketplace
  const plants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: 29.99,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      lightLevel: "Medium light • Moderate",
      careLevel: "Easy",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 24.99,
      rating: 4.7,
      image:
        "https://plus.unsplash.com/premium_photo-1673969608395-9281e5e4395f?q=80&w=2616&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lightLevel: "Low light • Easy care",
      careLevel: "Easy",
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      price: 34.99,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmlkZGxlJTIwTGVhZiUyMEZpZ3xlbnwwfHwwfHx8MA%3D%3D",
      lightLevel: "Bright light • Regular water",
      careLevel: "Moderate",
    },
    {
      id: 4,
      name: "Pothos",
      price: 19.99,
      rating: 4.9,
      image:
        "https://plus.unsplash.com/premium_photo-1673969608398-18921179fa7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG90aG9zfGVufDB8fDB8fHww",
      lightLevel: "Low to bright light • Easy care",
      careLevel: "Easy",
    },
    {
      id: 5,
      name: "ZZ Plant",
      price: 22.99,
      rating: 4.8,
      image:
        "https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WlolMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D",
      lightLevel: "Low light • Drought tolerant",
      careLevel: "Easy",
    },
    {
      id: 6,
      name: "Calathea",
      price: 27.99,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      lightLevel: "Medium light • High humidity",
      careLevel: "Moderate",
    },
    {
      id: 7,
      name: "Aloe Vera",
      price: 18.99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWxvZSUyMHZlcmF8ZW58MHx8MHx8fDA%3D",
      lightLevel: "Bright light • Drought tolerant",
      careLevel: "Easy",
    },
    {
      id: 8,
      name: "Peace Lily",
      price: 25.99,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      lightLevel: "Low to medium light • Regular water",
      careLevel: "Easy",
    },
    {
      id: 9,
      name: "Rubber Plant",
      price: 32.99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1669392597221-bbfd4b6e13ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UnViYmVyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      lightLevel: "Medium to bright light • Moderate water",
      careLevel: "Moderate",
    },
    {
      id: 10,
      name: "String of Pearls",
      price: 21.99,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1648070024741-43f8fa965966?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RyaW5nJTIwb2YlMjBwZWFybHMlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D",
      lightLevel: "Bright indirect light • Sparse water",
      careLevel: "Moderate",
    },
    {
      id: 11,
      name: "Bird of Paradise",
      price: 39.99,
      rating: 4.6,
      image:
        "https://plus.unsplash.com/premium_photo-1674473872726-f59a276c4287?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmlyZCUyMG9mJTIwcGFyYWRpc2V8ZW58MHx8MHx8fDA%3D",
      lightLevel: "Bright light • Moderate water",
      careLevel: "Moderate",
    },
    {
      id: 12,
      name: "Chinese Money Plant",
      price: 23.99,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1714674119508-6676b71d3bf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbmVzZSUyMG1vbmV5JTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      lightLevel: "Bright indirect light • Moderate water",
      careLevel: "Easy",
    },
  ]

  // Filtrare le piante in base al termine di ricerca
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.lightLevel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.careLevel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ordinare le piante in base al criterio selezionato
  const sortedPlants = [...filteredPlants].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        // Per semplicità, ordiniamo per ID (assumendo che ID più alti siano più recenti)
        return b.id - a.id;
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "popular":
        // Ordina per valutazione più alta
        return b.rating - a.rating;
      case "featured":
      default:
        // L'ordinamento predefinito "featured" lo lasciamo come è
        return 0;
    }
  });

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-heading">
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
            <Link href="/marketplace" className="text-sm font-medium text-green-600">
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
              <h1 className="text-3xl font-heading tracking-tight">Plant Marketplace</h1>
              <p className="text-muted-foreground mt-1">Find the perfect plants for your home</p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search plants..."
                  className="w-full pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
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
                    <SheetDescription>Narrow down your plant search with these filters.</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-6 py-6">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Price Range</h3>
                      <Slider defaultValue={[0, 100]} max={200} step={1} />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">$0</span>
                        <span className="text-xs text-muted-foreground">$200+</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Plant Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="indoor" />
                          <Label htmlFor="indoor">Indoor Plants</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="outdoor" />
                          <Label htmlFor="outdoor">Outdoor Plants</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="succulents" />
                          <Label htmlFor="succulents">Succulents</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="tropical" />
                          <Label htmlFor="tropical">Tropical</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cacti" />
                          <Label htmlFor="cacti">Cacti</Label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Light Requirements</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="low-light" />
                          <Label htmlFor="low-light">Low Light</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="medium-light" />
                          <Label htmlFor="medium-light">Medium Light</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="bright-light" />
                          <Label htmlFor="bright-light">Bright Light</Label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Care Level</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="beginner" />
                          <Label htmlFor="beginner">Beginner Friendly</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="intermediate" />
                          <Label htmlFor="intermediate">Intermediate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="expert" />
                          <Label htmlFor="expert">Expert</Label>
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
              <span className="text-sm text-muted-foreground">Showing {plants.length} results</span>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedPlants.map((plant) => (
              <Link href={`/plant/${plant.id}`} key={plant.id} className="group">
                <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                  <div className="relative aspect-square">
                    <Image
                      src={plant.image || "/placeholder.svg"}
                      alt={plant.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading">{plant.name}</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-semibold text-green-600">${plant.price.toFixed(2)}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm text-muted-foreground">{plant.rating}</span>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">{plant.lightLevel}</div>
                  </div>
                </div>
              </Link>
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
              <h3 className="font-heading mb-4">Rootsy</h3>
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
              <h3 className="font-heading mb-4">Services</h3>
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
              <h3 className="font-heading mb-4">Support</h3>
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
              <h3 className="font-heading mb-4">Legal</h3>
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
              <span className="font-heading">Rootsy</span>
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
