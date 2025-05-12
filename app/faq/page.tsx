import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle, Search } from "lucide-react"

export default function FAQPage() {
  const categories = ["General", "Account", "Plant Sitting", "Marketplace", "Payments", "Shipping"]

  const faqs = {
    General: [
      {
        question: "What is Rootsy?",
        answer:
          "Rootsy is a platform that connects plant lovers with plant sitters and provides a marketplace for buying and selling plants. Our mission is to make plant care accessible to everyone and build a community of plant enthusiasts.",
      },
      {
        question: "How do I get started with Rootsy?",
        answer:
          "To get started, create an account on our website or mobile app. Once you've signed up, you can browse plant sitters in your area, shop for plants in our marketplace, or list your own plants for sale.",
      },
      {
        question: "Is Rootsy available in my area?",
        answer:
          "Rootsy is currently available in major cities across the United States. We're expanding rapidly, so if we're not in your area yet, we hope to be soon! You can check availability in your area by entering your zip code on our homepage.",
      },
      {
        question: "How do I contact customer support?",
        answer:
          "You can reach our customer support team through the Help Center, by emailing support@rootsy.com, or by using the live chat feature on our website and app. Our support team is available Monday through Friday, 9am to 5pm EST.",
      },
    ],
    Account: [
      {
        question: "How do I create an account?",
        answer:
          "To create an account, click the 'Sign Up' button in the top right corner of our website or download our mobile app. You can sign up using your email address or connect with your Google or Facebook account.",
      },
      {
        question: "How do I reset my password?",
        answer:
          "If you've forgotten your password, click the 'Log In' button and then select 'Forgot Password'. Enter the email address associated with your account, and we'll send you instructions to reset your password.",
      },
      {
        question: "Can I have both a plant sitter and seller account?",
        answer:
          "Yes! You can be both a plant sitter and a seller on Rootsy. Simply complete the registration process for each role in your account settings.",
      },
      {
        question: "How do I delete my account?",
        answer:
          "To delete your account, go to your Account Settings and select 'Delete Account' at the bottom of the page. Please note that this action is permanent and will remove all your data from our platform.",
      },
    ],
    "Plant Sitting": [
      {
        question: "How does plant sitting work?",
        answer:
          "Plant sitting works similarly to pet sitting, but for plants! Plant owners can search for sitters in their area, view their profiles and reviews, and book them for specific dates. Sitters can provide services like watering, fertilizing, pruning, and general plant care.",
      },
      {
        question: "How much does plant sitting cost?",
        answer:
          "Plant sitting rates vary depending on the sitter, location, number of plants, and specific care requirements. On average, rates range from $15 to $30 per visit. Some sitters also offer package deals for longer-term care.",
      },
      {
        question: "How do I become a plant sitter?",
        answer:
          "To become a plant sitter, click on 'Become a Sitter' on our homepage and complete the application process. You'll need to provide information about your plant care experience, availability, and service area. Once approved, you can set up your profile and start accepting bookings.",
      },
      {
        question: "What if my plants are damaged during sitting?",
        answer:
          "All plant sitting bookings through Rootsy include basic protection for your plants. If your plants are damaged due to negligence by the sitter, you can file a claim through our platform. We recommend documenting the condition of your plants before and after the sitting period.",
      },
    ],
    Marketplace: [
      {
        question: "How do I purchase a plant?",
        answer:
          "To purchase a plant, browse our marketplace and select the plant you're interested in. Click 'Add to Cart' and proceed to checkout. You can pay using various payment methods, and the seller will ship the plant to your address.",
      },
      {
        question: "Can I sell my own plants?",
        answer:
          "Yes! To sell plants, click on 'Start Selling' on our homepage and complete the seller registration process. Once approved, you can create listings for your plants, set prices, and manage orders through your seller dashboard.",
      },
      {
        question: "What is your return policy?",
        answer:
          "Our return policy varies by seller. Each seller sets their own return policy, which is displayed on their profile and product listings. Generally, plants can be returned if they arrive damaged or significantly different from the description, but this must be reported within 48 hours of receipt.",
      },
      {
        question: "How are plants shipped?",
        answer:
          "Sellers are responsible for packaging and shipping plants. Most sellers use USPS, FedEx, or UPS, with special packaging to ensure plants arrive in good condition. Shipping methods and costs are specified in each listing.",
      },
    ],
    Payments: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept major credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. Some sellers may offer additional payment options.",
      },
      {
        question: "How do refunds work?",
        answer:
          "If you're eligible for a refund, it will be processed using your original payment method. Refunds typically take 5-10 business days to appear in your account, depending on your bank or credit card company.",
      },
      {
        question: "How do sellers get paid?",
        answer:
          "Sellers receive payments for their orders through our secure payment system. Funds are held until the buyer confirms receipt of the plant in good condition, and then released to the seller's account. Sellers can withdraw funds to their bank account or PayPal.",
      },
      {
        question: "Is there a fee for using Rootsy?",
        answer:
          "Rootsy charges a 10% commission on marketplace sales and a 15% service fee on plant sitting bookings. These fees help us maintain and improve our platform, provide customer support, and process secure payments.",
      },
    ],
    Shipping: [
      {
        question: "How long does shipping take?",
        answer:
          "Shipping times vary depending on the seller's location, your location, and the shipping method selected. Most domestic orders are delivered within 3-5 business days. Exact shipping times are provided at checkout.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "International shipping availability depends on the seller and is subject to customs regulations. Some sellers offer international shipping, while others only ship domestically. Shipping options are displayed on each product listing.",
      },
      {
        question: "How are plants packaged for shipping?",
        answer:
          "Sellers are required to package plants carefully to ensure they arrive in good condition. This typically includes secure pots, moisture-retaining materials, protective wrapping, and appropriate box sizes. Many sellers also include heat packs in cold weather.",
      },
      {
        question: "What if my plant arrives damaged?",
        answer:
          "If your plant arrives damaged, take photos immediately and contact the seller through our messaging system within 48 hours. Most sellers will offer a replacement or refund for plants damaged during shipping.",
      },
    ],
  }

  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about Rootsy, plant sitting, and our marketplace.
        </p>
        <div className="relative max-w-md mx-auto mt-8">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search FAQs..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="General" className="mb-16">
        <TabsList className="flex flex-wrap h-auto justify-start mb-6">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="mb-2">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <Card className="border-0 shadow-none">
              <Accordion type="single" collapsible className="w-full">
                {faqs[category].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-green-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-heading mb-4">Still Have Questions?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Can't find the answer you're looking for? Our support team is here to help.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 gap-2">
            <HelpCircle className="h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  )
}
