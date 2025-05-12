import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function PressPage() {
  const pressReleases = [
    {
      title: "Rootsy Raises $5M to Expand Plant Sitting Services",
      date: "May 15, 2025",
      excerpt: "Funding will help Rootsy expand to 10 new cities and enhance its plant marketplace platform.",
    },
    {
      title: "Rootsy Launches New Mobile App for Plant Care",
      date: "March 3, 2025",
      excerpt: "New app features plant identification, care reminders, and easy access to plant sitters.",
    },
    {
      title: "Rootsy Partners with Botanical Gardens Nationwide",
      date: "January 20, 2025",
      excerpt: "Partnership aims to promote plant education and conservation efforts.",
    },
    {
      title: "Rootsy Celebrates 10,000 Successful Plant Sitting Bookings",
      date: "November 12, 2024",
      excerpt: "Milestone highlights growing demand for specialized plant care services.",
    },
  ]

  const mediaFeatures = [
    {
      publication: "TechCrunch",
      title: "How Rootsy is Revolutionizing Plant Care",
      date: "April 2025",
    },
    {
      publication: "The New York Times",
      title: "The Rise of Plant Sitting Services",
      date: "March 2025",
    },
    {
      publication: "Apartment Therapy",
      title: "Best Apps for Plant Lovers in 2025",
      date: "February 2025",
    },
    {
      publication: "Forbes",
      title: "Startups Making Waves in the Green Industry",
      date: "January 2025",
    },
  ]

  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading tracking-tight mb-4">Press & Media</h1>
        <p className="text-xl text-muted-foreground">Latest news, press releases, and media coverage about Rootsy.</p>
      </div>

      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading">Press Releases</h2>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Press Kit
          </Button>
        </div>
        <div className="space-y-6">
          {pressReleases.map((release, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{release.title}</CardTitle>
                  <CardDescription>{release.date}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-green-600 hover:text-green-700">
                  Read Full Release
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-heading mb-6">Media Coverage</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mediaFeatures.map((feature, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-2">
                {feature.publication} • {feature.date}
              </div>
              <h3 className="text-lg font-medium mb-4">{feature.title}</h3>
              <Button variant="link" className="p-0 h-auto text-green-600 hover:text-green-700">
                Read Article
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-heading mb-6">Brand Assets</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Logo Package</h3>
            <p className="text-muted-foreground mb-4">Download our logo in various formats and sizes.</p>
            <Button className="bg-green-600 hover:bg-green-700 gap-2">
              <Download className="h-4 w-4" />
              Download Logos
            </Button>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Brand Guidelines</h3>
            <p className="text-muted-foreground mb-4">Our official brand guidelines and usage instructions.</p>
            <Button className="bg-green-600 hover:bg-green-700 gap-2">
              <Download className="h-4 w-4" />
              Download Guidelines
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-heading mb-4 text-center">Media Inquiries</h2>
        <p className="text-center mb-6">
          For press inquiries, interview requests, or additional information, please contact our press team.
        </p>
        <div className="flex justify-center">
          <Button className="bg-green-600 hover:bg-green-700">Contact Press Team</Button>
        </div>
      </div>
    </div>
  )
}
