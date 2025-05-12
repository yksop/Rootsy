import { Leaf } from "lucide-react"

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-heading">
            <Image
              src="/images/logo.png" // Percorso al tuo file logo.jpg nella cartella public
              alt="Rootsy Logo"
              width={100}
              height={100}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/marketplace" className="text-sm font-medium hover:text-green-600 transition-colors">
              Marketplace
            </Link>
            <Link href="/plantsitting" className="text-sm font-medium hover:text-green-600 transition-colors">
              Plant Sitting
            </Link>
            <Link href="/about" className="text-sm font-medium text-green-600">
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
        <div className="container py-12 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading tracking-tight mb-4">About Rootsy</h1>
            <p className="text-xl text-muted-foreground">
              Our mission is to connect plant lovers and make plant care accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-heading mb-4">Our Story</h2>
              <p className="mb-4">
                Rootsy was founded in 2023 by a group of passionate plant enthusiasts who recognized a need in the
                community. Many plant owners struggled to find reliable care for their plants when traveling, while others
                were looking to expand their collections with healthy, ethically sourced plants.
              </p>
              <p>
                What started as a small community project has blossomed into a thriving platform connecting thousands of
                plant lovers across the country. Our marketplace and plant sitting services have helped countless plants
                find new homes and receive the care they deserve.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Plants in a greenhouse"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-heading mb-6 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-heading mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to promoting sustainable plant care practices and reducing the environmental impact of our
                  operations.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-heading mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We believe in the power of community and strive to create a supportive network of plant enthusiasts.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-heading mb-2">Education</h3>
                <p className="text-muted-foreground">
                  We're dedicated to sharing knowledge and helping people develop their plant care skills.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-heading mb-6 text-center">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="relative h-[200px] w-[200px] mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src={`https://images.unsplash.com/photo-151${i + 1000000}?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3`}
                      alt={`Team member ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-heading">Team Member {i}</h3>
                  <p className="text-muted-foreground">Co-Founder</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-heading mb-4">Join Our Journey</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our team and help us grow. Check out our careers page
              for current opportunities.
            </p>
            <div className="flex justify-center">
              <a href="/careers" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
                View Careers
              </a>
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
