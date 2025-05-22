"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Leaf, MapPin, Search, ShoppingBag, Star, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Rootsy Logo"
                width={100}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/marketplace" className="text-sm font-medium hover:text-green-600 transition-colors">
              Marketplace
            </Link>
            <Link href="/plantsitting" className="text-sm font-medium hover:text-green-600 transition-colors">
              Plant Sitting
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
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
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
            <div className="fixed inset-y-0 right-0 w-full max-w-sm border-l bg-background p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/images/logo.png"
                    alt="Rootsy Logo"
                    width={80}
                    height={80}
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="mt-8 flex flex-col gap-6">
                <Link
                  href="/marketplace"
                  className="text-base font-medium hover:text-green-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Marketplace
                </Link>
                <Link
                  href="/plantsitting"
                  className="text-base font-medium hover:text-green-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plant Sitting
                </Link>
                <Link
                  href="/about"
                  className="text-base font-medium hover:text-green-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <div className="h-px w-full bg-border" />
                <Link
                  href="/login"
                  className="text-base font-medium hover:text-green-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Sign up
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="relative h-screen">
          <Image
            src="/images/topiary-hero.png"
            alt="Elegant topiary plant"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/20 z-10"></div> {/* Aumentato l'opacità dello sfondo scuro */}
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
            <div className="max-w-3xl p-8 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 relative"> {/* Più contrasto e blur per lo sfondo */}
              <div className="flex items-center justify-center mb-6">
                <Image
                  src="/images/logo-white.png"
                  alt="Rootsy Logo"
                  width={200}
                  height={200}
                  className="h-40 w-auto object-contain"
                />
              </div>

              <p className="mt-6 max-w-md mx-auto text-xl text-white drop-shadow-md font-medium">
                Find plant sitters for your green friends or discover new plants to add to your collection.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/plantsitting">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg font-medium w-full sm:w-auto">
                    Find a Plant Sitter
                  </Button>
                </Link>
                <Link href="/marketplace">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg font-medium w-full sm:w-auto">
                    Shop Plants
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-heading tracking-tight">How It Works</h2>
              <p className="text-muted-foreground mt-2">Simple steps to get started with Rootsy</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <Search className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-heading mb-2">Find</h3>
              <p className="text-muted-foreground">
                Browse our marketplace for plants or find reliable plant sitters in your area.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <ShoppingBag className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-heading mb-2">Book or Buy</h3>
              <p className="text-muted-foreground">
                Schedule plant sitting services or purchase plants directly through our secure platform.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-heading mb-2">Enjoy</h3>
              <p className="text-muted-foreground">
                Relax knowing your plants are in good hands or enjoy your new green additions.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-green-50 py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-3xl font-heading tracking-tight">Explore Our Services</h2>
                <p className="text-muted-foreground mt-2">Find what you need for your plant journey</p>
              </div>
            </div>
            <Tabs defaultValue="marketplace" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="marketplace" className="font-heading">
                  Plant Marketplace
                </TabsTrigger>
                <TabsTrigger value="plantsitting" className="font-heading">
                  Plant Sitting
                </TabsTrigger>
              </TabsList>
              <TabsContent value="marketplace">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <Link href="/plant/1" className="group">
                    <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                      <div className="relative aspect-square">
                        <Image
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F_RxKTB2LvppM%2FS2NOOEY8qZI%2FAAAAAAAAA0M%2F0v0vBMJBV-o%2Fs400%2FMonstera%2Bpost%2Bshower%2B2%2Bcmp.jpg&f=1&nofb=1&ipt=0476a845a62c61c963c63debec1cbce67d991512c72f541f89551c69156d2f36"
                          alt="Monstera Deliciosa"
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading">Monstera Deliciosa</h3>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="font-semibold text-green-600">€29.99</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm text-muted-foreground">4.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/plant/2" className="group">
                    <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                      <div className="relative aspect-square">
                        <Image
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechnofaq.org%2Fwp-content%2Fuploads%2F2017%2F04%2FSnake-Plant-713x1024.jpg&f=1&nofb=1&ipt=eb754c3b5c9478f07516525f049913437318e540585c13fed60b84b529852812"
                          alt="Snake Plant"
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading">Snake Plant</h3>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="font-semibold text-green-600">€24.99</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm text-muted-foreground">4.7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/plant/3" className="group">
                    <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                      <div className="relative aspect-square">
                        <Image
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fterragreenhouses.com%2Fwp-content%2Fuploads%2F2020%2F08%2FFiddle-Leaf-Fig-10-Inch-Grower-Pot-scaled.jpg&f=1&nofb=1&ipt=b2c88ddea8209a4106bcba0af15a1fcb70dc4f54b8d5d61a2372925e663bd203"
                          alt="Fiddle Leaf Fig"
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading">Fiddle Leaf Fig</h3>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="font-semibold text-green-600">€34.99</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm text-muted-foreground">4.6</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/plant/4" className="group">
                    <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                      <div className="relative aspect-square">
                        <Image
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F1411%2F1409790495_4b2c5ca74a_b.jpg&f=1&nofb=1&ipt=a4be47c332aec27907f0611571887f548de2eb1a44f6b7e9d1b811bb6a471cf3"
                          alt="Pothos"
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading">Pothos</h3>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="font-semibold text-green-600">€19.99</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm text-muted-foreground">4.9</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="mt-8 flex justify-center">
                  <Link href="/marketplace">
                    <Button variant="outline" className="gap-2">
                      View All Plants
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="plantsitting">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="rounded-lg border bg-white p-6 transition-all hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                        <Image src="/images/sitter-1.png" alt="Plant Sitter 1" fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-heading">Sarah Johnson</h3>
                        <div className="mt-1 flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm text-muted-foreground">4.9 (24 reviews)</span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>2.5 miles away</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Plant enthusiast with 5+ years of experience caring for all types of indoor plants.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-medium text-green-600">€15/day</span>
                      <Link href="/sitter/1">
                        <Button size="sm">View Profile</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-white p-6 transition-all hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                        <Image src="/images/sitter-2.png" alt="Plant Sitter 2" fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-heading">Michael Chen</h3>
                        <div className="mt-1 flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm text-muted-foreground">4.8 (18 reviews)</span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>3.2 miles away</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Certified botanist specializing in tropical plants and succulents.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-medium text-green-600">€18/day</span>
                      <Link href="/sitter/2">
                        <Button size="sm">View Profile</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-white p-6 transition-all hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                        <Image src="/images/sitter-3.png" alt="Plant Sitter 3" fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-heading">Emma Rodriguez</h3>
                        <div className="mt-1 flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm text-muted-foreground">4.7 (31 reviews)</span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>1.8 miles away</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Passionate plant lover with expertise in rare and exotic species.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-medium text-green-600">€16/day</span>
                      <Link href="/sitter/3">
                        <Button size="sm">View Profile</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <Link href="/plantsitting">
                    <Button variant="outline" className="gap-2">
                      View All Sitters
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/plant-community.png" alt="Plant Community" fill className="object-cover opacity-10" />
          </div>
          <div className="absolute inset-0 bg-green-900 opacity-90 z-1"></div>
          <div className="container relative z-10 text-white">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-heading tracking-tight mb-4">Stay Connected</h2>
              <p className="max-w-md mb-8">
                Subscribe to our newsletter for plant care tips, exclusive offers, and community updates.
              </p>
              <div className="flex w-full max-w-md flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-white text-green-900 hover:bg-white/90">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
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
              <Image
                src="/images/logo.png" // Percorso al tuo file logo.jpg nella cartella public
                alt="Rootsy Logo"
                width={100}
                height={100}
                className="h-12 w-auto object-contain"
              />
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
