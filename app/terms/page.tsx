"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastUpdated = "May 1, 2025"

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
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
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
                  <Button className="w-full bg-green-600 hover:bg-green-700">Sign up</Button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <div className="container py-12 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading tracking-tight mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-green max-w-none mb-12">
            <p>
              Welcome to Rootsy. These Terms of Service ("Terms") govern your access to and use of the Rootsy website,
              mobile application, and services (collectively, the "Services"). Please read these Terms carefully before
              using our Services.
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms,
              you may not access or use the Services.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium text-lg py-4">1. Acceptance of Terms</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you
                    are using our Services on behalf of a company or other legal entity, you represent that you have the
                    authority to bind such entity to these Terms.
                  </p>
                  <p>
                    We may modify these Terms at any time. If we make changes, we will provide notice by posting the updated
                    Terms on our website and updating the "Last Updated" date. Your continued use of our Services after such
                    notice constitutes your acceptance of the changes.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-lg py-4">2. Account Registration</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    To use certain features of our Services, you may need to create an account. You agree to provide
                    accurate, current, and complete information during the registration process and to update such
                    information to keep it accurate, current, and complete.
                  </p>
                  <p>
                    You are responsible for safeguarding your password and for all activities that occur under your account.
                    You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                  <p>
                    We reserve the right to suspend or terminate your account if any information provided during the
                    registration process or thereafter proves to be inaccurate, not current, or incomplete.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-lg py-4">
                  3. Plant Sitting Services
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    Rootsy provides a platform for plant owners to connect with plant sitters. We do not provide plant
                    sitting services directly. We are not responsible for the actions or inactions of plant sitters or plant
                    owners.
                  </p>
                  <p>
                    Plant sitters are independent contractors and not employees or agents of Rootsy. Plant sitters are
                    solely responsible for their interactions with plant owners and the care they provide to plants.
                  </p>
                  <p>
                    Plant owners are solely responsible for providing accurate information about their plants and clear care
                    instructions to plant sitters.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium text-lg py-4">4. Marketplace Services</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    Rootsy provides a platform for users to buy and sell plants and plant-related products. We do not sell
                    products directly. We are not responsible for the quality, safety, legality, or availability of products
                    listed on our platform.
                  </p>
                  <p>
                    Sellers are solely responsible for the products they list, including descriptions, pricing, shipping,
                    and compliance with applicable laws and regulations.
                  </p>
                  <p>Buyers are solely responsible for verifying that products meet their needs before purchasing.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-medium text-lg py-4">5. Payments and Fees</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    Rootsy charges fees for the use of our Services. These fees are described on our website and may be
                    updated from time to time.
                  </p>
                  <p>
                    For plant sitting services, we charge a service fee to both plant owners and plant sitters. For
                    marketplace transactions, we charge a commission on each sale.
                  </p>
                  <p>
                    All payments are processed through our third-party payment processors. By using our Services, you agree
                    to comply with the terms and conditions of our payment processors.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-medium text-lg py-4">6. User Content</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    Our Services allow you to post, link, store, share, and otherwise make available certain information,
                    text, graphics, videos, or other material ("User Content"). You are responsible for the User Content
                    that you post on or through our Services.
                  </p>
                  <p>
                    By posting User Content on or through our Services, you grant us a worldwide, non-exclusive,
                    royalty-free license to use, copy, modify, create derivative works based on, distribute, publicly
                    display, publicly perform, and otherwise use your User Content in connection with operating and
                    providing our Services.
                  </p>
                  <p>
                    You represent and warrant that: (i) the User Content is yours or you have the right to use it and grant
                    us the rights and license as provided in these Terms, and (ii) the posting of your User Content on or
                    through our Services does not violate the privacy rights, publicity rights, copyrights, contract rights,
                    or any other rights of any person.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left font-medium text-lg py-4">7. Prohibited Conduct</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>You agree not to engage in any of the following prohibited activities:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violating any applicable law, regulation, or these Terms</li>
                    <li>Using our Services for any illegal purpose</li>
                    <li>Impersonating any person or entity</li>
                    <li>Harassing, abusing, or harming another person</li>
                    <li>Sending spam or unsolicited messages</li>
                    <li>
                      Attempting to interfere with, compromise the system integrity or security, or decipher any
                      transmissions to or from the servers running our Services
                    </li>
                    <li>
                      Taking any action that imposes an unreasonable or disproportionately large load on our infrastructure
                    </li>
                    <li>Uploading invalid data, viruses, worms, or other software agents through our Services</li>
                    <li>Collecting or harvesting any personally identifiable information from our Services</li>
                    <li>Using our Services for any commercial solicitation purposes without our prior written consent</li>
                    <li>Impersonating another user or accessing the account of another user</li>
                    <li>Selling or otherwise transferring your account</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left font-medium text-lg py-4">8. Termination</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    We may terminate or suspend your account and access to our Services immediately, without prior notice or
                    liability, for any reason, including if you breach these Terms.
                  </p>
                  <p>
                    Upon termination, your right to use our Services will immediately cease. If you wish to terminate your
                    account, you may simply discontinue using our Services or delete your account through the account
                    settings.
                  </p>
                  <p>
                    All provisions of these Terms which by their nature should survive termination shall survive
                    termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and
                    limitations of liability.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left font-medium text-lg py-4">
                  9. Disclaimer of Warranties
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    Our Services are provided "as is" and "as available" without any warranties of any kind, either express
                    or implied, including but not limited to the implied warranties of merchantability, fitness for a
                    particular purpose, or non-infringement.
                  </p>
                  <p>
                    We do not warrant that our Services will be uninterrupted or error-free, that defects will be corrected,
                    or that our Services or the servers that make them available are free of viruses or other harmful
                    components.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left font-medium text-lg py-4">
                  10. Limitation of Liability
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    To the maximum extent permitted by law, in no event shall Rootsy, its directors, employees, partners,
                    agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or
                    punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                    intangible losses, resulting from (i) your access to or use of or inability to access or use our
                    Services; (ii) any conduct or content of any third party on our Services; (iii) any content obtained
                    from our Services; and (iv) unauthorized access, use, or alteration of your transmissions or content,
                    whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or
                    not we have been informed of the possibility of such damage.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center">
            <p className="mb-6 text-muted-foreground">
              By using Rootsy, you acknowledge that you have read, understood, and agree to be bound by these Terms of
              Service.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">Accept Terms</Button>
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
