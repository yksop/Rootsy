import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { HelpCircle, Mail, MapPin, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-12 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading tracking-tight mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Get in touch with our team.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle>Email Us</CardTitle>
            <CardDescription>For general inquiries</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <a href="mailto:hello@rootsy.com" className="text-green-600 hover:underline">
              hello@rootsy.com
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle>Call Us</CardTitle>
            <CardDescription>Mon-Fri, 9am-5pm EST</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <a href="tel:+18005551234" className="text-green-600 hover:underline">
              (800) 555-1234
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <MessageSquare className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle>Live Chat</CardTitle>
            <CardDescription>Get immediate assistance</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="bg-green-600 hover:bg-green-700">Start Chat</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Your email address" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="What's this about?" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Visit Our Office</CardTitle>
              <CardDescription>Stop by our headquarters to meet the team.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Rootsy Headquarters</p>
                  <p className="text-muted-foreground">123 Plant Street</p>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                </div>
              </div>
              <div className="aspect-video relative rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620919255646!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-heading mb-4">Need Help?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Check out our Help Center for answers to frequently asked questions and helpful guides.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 gap-2">
            <HelpCircle className="h-4 w-4" />
            Visit Help Center
          </Button>
        </div>
      </div>
    </div>
  )
}
