import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, HelpCircle, Leaf, MessageSquare, Search, ShoppingBag, User } from "lucide-react"

export default function HelpCenterPage() {
  const popularTopics = [
    {
      title: "Getting Started",
      icon: Leaf,
      questions: [
        "How do I create an account?",
        "How does plant sitting work?",
        "How do I list my plants for sale?",
        "What payment methods are accepted?",
      ],
    },
    {
      title: "Plant Sitting",
      icon: User,
      questions: [
        "How do I find a plant sitter?",
        "How much should I pay a plant sitter?",
        "What if my plants are damaged?",
        "Can I become a plant sitter?",
      ],
    },
    {
      title: "Marketplace",
      icon: ShoppingBag,
      questions: [
        "How do I purchase a plant?",
        "What is your return policy?",
        "How are plants shipped?",
        "Can I sell my own plants?",
      ],
    },
  ]

  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading tracking-tight mb-4">Help Center</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions and learn how to get the most out of Rootsy.
        </p>
        <div className="relative max-w-md mx-auto mt-8">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search for help..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="topics" className="mb-16">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="topics">Popular Topics</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="contact">Contact Support</TabsTrigger>
        </TabsList>
        <TabsContent value="topics" className="mt-6">
          <div className="grid md:grid-cols-3 gap-6">
            {popularTopics.map((topic, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <topic.icon className="h-4 w-4 text-green-600" />
                    </div>
                    <CardTitle>{topic.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.questions.map((question, qIndex) => (
                      <li key={qIndex}>
                        <a href="#" className="text-green-600 hover:underline flex items-start">
                          <HelpCircle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                          <span>{question}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="guides" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <BookOpen className="h-4 w-4 text-green-600" />
                  </div>
                  <CardTitle>Plant Care Basics</CardTitle>
                </div>
                <CardDescription>Learn the fundamentals of caring for your plants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Watering Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Light Requirements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Soil and Fertilizer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Common Plant Problems
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <User className="h-4 w-4 text-green-600" />
                  </div>
                  <CardTitle>Plant Sitting Guide</CardTitle>
                </div>
                <CardDescription>Everything you need to know about plant sitting</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Finding the Right Sitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Preparing Your Plants
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Creating Care Instructions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Payment and Tipping
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <ShoppingBag className="h-4 w-4 text-green-600" />
                  </div>
                  <CardTitle>Marketplace Guide</CardTitle>
                </div>
                <CardDescription>How to buy and sell plants on Rootsy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Creating a Listing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Shipping Plants Safely
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Buying with Confidence
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Ratings and Reviews
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Leaf className="h-4 w-4 text-green-600" />
                  </div>
                  <CardTitle>Plant Types Guide</CardTitle>
                </div>
                <CardDescription>Learn about different types of plants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Houseplants for Beginners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Low-Light Plants
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Pet-Friendly Plants
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">
                      Rare and Exotic Plants
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="contact" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Can't find what you're looking for? Our support team is here to help.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="What's your question about?" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Please describe your issue in detail"
                  ></textarea>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">Submit Request</Button>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6 text-center">
              <MessageSquare className="h-8 w-8 mx-auto mb-4 text-green-600" />
              <h3 className="text-lg font-medium mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-4">Chat with our support team in real-time.</p>
              <Button variant="outline">Start Chat</Button>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <HelpCircle className="h-8 w-8 mx-auto mb-4 text-green-600" />
              <h3 className="text-lg font-medium mb-2">FAQs</h3>
              <p className="text-muted-foreground mb-4">Browse our frequently asked questions.</p>
              <Button variant="outline">View FAQs</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
