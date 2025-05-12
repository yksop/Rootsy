import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import Image from "next/image"


export default function CookiePolicyPage() {
  const lastUpdated = "May 1, 2025"

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
        <div className="container py-12 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading tracking-tight mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-green max-w-none mb-12">
            <p>
              This Cookie Policy explains how Rootsy ("we", "us", or "our") uses cookies and similar technologies on our
              website and mobile application (collectively, the "Services"). This Cookie Policy should be read together with
              our Privacy Policy and Terms of Service.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium text-lg py-4">1. What Are Cookies?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit
                    a website. Cookies are widely used to make websites work more efficiently and provide information to the
                    website owners.
                  </p>
                  <p>Cookies help us enhance your experience on our Services by:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remembering your preferences and settings</li>
                    <li>Keeping you signed in</li>
                    <li>Understanding how you use our Services</li>
                    <li>Tailoring content and advertisements to your interests</li>
                    <li>Improving the speed and security of our Services</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-lg py-4">
                  2. Types of Cookies We Use
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>We use the following types of cookies:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Essential Cookies:</strong> These cookies are necessary for our Services to function properly.
                      They enable core functionality such as security, network management, and account access. You cannot
                      opt out of these cookies.
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> These cookies allow us to remember your preferences and settings,
                      such as language and region, to provide a more personalized experience.
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our
                      Services by collecting and reporting information anonymously. This helps us improve our Services.
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> These cookies track your online activity to help advertisers
                      deliver more relevant advertising or to limit how many times you see an ad. These cookies can share
                      information with other organizations or advertisers.
                    </li>
                    <li>
                      <strong>Social Media Cookies:</strong> These cookies are set by social media services that we have
                      added to our Services to enable you to share our content with your friends and networks.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-lg py-4">3. Third-Party Cookies</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>Some cookies are placed by third parties on our Services. These third parties may include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Analytics providers (such as Google Analytics)</li>
                    <li>Advertising networks</li>
                    <li>Social media platforms</li>
                    <li>Payment processors</li>
                  </ul>
                  <p>
                    These third parties may use cookies, web beacons, and similar technologies to collect information about
                    your use of our Services and other websites. This information may be used to, among other things,
                    analyze and track data, determine the popularity of certain content, and better understand your online
                    activity.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium text-lg py-4">4. Cookie Management</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    Most web browsers allow you to control cookies through their settings preferences. However, if you limit
                    the ability of websites to set cookies, you may worsen your overall user experience, as it will no
                    longer be personalized to you. It may also stop you from saving customized settings like login
                    information.
                  </p>
                  <p>To manage cookies in your web browser, you can:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Google Chrome:</strong> Click the three dots in the top right corner, select "Settings,"
                      scroll down and click on "Advanced," then select "Privacy and security" and "Site Settings," then
                      "Cookies and site data."
                    </li>
                    <li>
                      <strong>Mozilla Firefox:</strong> Click the three lines in the top right corner, select "Options,"
                      choose "Privacy & Security" on the left, and go to the "Cookies and Site Data" section.
                    </li>
                    <li>
                      <strong>Safari:</strong> Go to "Preferences," select the "Privacy" tab, and then choose your preferred
                      cookie settings.
                    </li>
                    <li>
                      <strong>Microsoft Edge:</strong> Click the three dots in the top right corner, select "Settings," then
                      "Site permissions," and then "Cookies and site data."
                    </li>
                  </ul>
                  <p>
                    You can also use tools like the Digital Advertising Alliance's WebChoices tool
                    (www.aboutads.info/choices) to opt out of interest-based advertising by certain third parties.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-medium text-lg py-4">5. Do Not Track</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have
                    your online activities tracked. Currently, there is no standard for how online services should respond
                    to "Do Not Track" signals, and we do not currently respond to such signals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-medium text-lg py-4">
                  6. Updates to This Cookie Policy
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our
                    business practices. Any changes will become effective when we post the revised Cookie Policy on our
                    Services. We encourage you to periodically review this page for the latest information on our cookie
                    practices.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left font-medium text-lg py-4">7. Contact Us</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
                  <p className="mt-2">
                    Rootsy
                    <br />
                    123 Plant Street
                    <br />
                    New York, NY 10001
                    <br />
                    Email: privacy@rootsy.com
                    <br />
                    Phone: (800) 555-1234
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center">
            <p className="mb-6 text-muted-foreground">
              By continuing to use our Services, you consent to our use of cookies as described in this Cookie Policy.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700">Accept All Cookies</Button>
              <Button variant="outline">Manage Cookie Preferences</Button>
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
