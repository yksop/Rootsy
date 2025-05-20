"use client";

import { useState } from "react";
import { Leaf, X } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Gaia Tognazzi",
    role: "CEO",
    image:
      "/images/photo_2025-05-20_15-56-55.jpg",
  },
  {
    name: "Marianna Seck",
    role: "COO",
    image: "/images/WhatsApp Image 2025-05-11 at 21.31.56.jpeg",
  },
  {
    name: "Giulia Nannetti",
    role: "CMO",
    image: "/images/WhatsApp Image 2025-05-11 at 18.02.46.jpeg",
  },
  {
    name: "Jacopo Veronese",
    role: "CTO",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGbNRi5yMOtDg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730667043728?e=1752710400&v=beta&t=hx7ErQaMXt0ifFzTDR2ZDGj16yp6yViKMGZGmbPhy6g",
  },
  {
    name: "Shivam Sharma",
    role: "Backend Developer",
    image: "/images/WhatsApp Image 2025-05-11 at 21.06.12.jpeg",
  },
  {
    name: "Pietro Ventrucci",
    role: "UX/UI Designer & Frontend Developer",
    image:
      "data:image/jpeg;base64,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",
  },
];

export default function AboutPage() {
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
            <Link
              href="/marketplace"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Marketplace
            </Link>
            <Link
              href="/plantsitting"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
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
              <Button className="hidden md:flex bg-green-600 hover:bg-green-700">
                Sign up
              </Button>
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
                  className="text-base font-medium text-green-600"
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
        <div className="container py-12 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading tracking-tight mb-4">
              About Rootsy
            </h1>
            <p className="text-xl text-muted-foreground">
              Our mission is to connect plant lovers and make plant care
              accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-heading mb-4">Our Story</h2>
              <p className="mb-4">
                Rootsy was founded in 2023 by a group of passionate plant
                enthusiasts who recognized a need in the community. Many plant
                owners struggled to find reliable care for their plants when
                traveling, while others were looking to expand their collections
                with healthy, ethically sourced plants.
              </p>
              <p>
                What started as a small community project has blossomed into a
                thriving platform connecting thousands of plant lovers across
                the country. Our marketplace and plant sitting services have
                helped countless plants find new homes and receive the care they
                deserve.
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
            <h2 className="text-2xl font-heading mb-6 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-heading mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to promoting sustainable plant care practices
                  and reducing the environmental impact of our operations.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-heading mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We believe in the power of community and strive to create a
                  supportive network of plant enthusiasts.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-heading mb-2">Education</h3>
                <p className="text-muted-foreground">
                  We're dedicated to sharing knowledge and helping people
                  develop their plant care skills.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-heading mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="text-center flex flex-col items-center"
                >
                  <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-heading">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-heading mb-4">Join Our Journey</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our team
              and help us grow. Check out our careers page for current
              opportunities.
            </p>
            <div className="flex justify-center">
              <a
                href="/careers"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
              >
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
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/marketplace"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Plant Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plantsitting"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Plant Sitting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/care-guides"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Plant Care Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/help"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
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
            <p className="text-sm text-muted-foreground">
              © 2025 Rootsy. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
