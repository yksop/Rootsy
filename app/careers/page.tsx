import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Code, Leaf, MessageSquare, PenTool, Users } from "lucide-react"

export default function CareersPage() {
  const departments = [
    {
      name: "Engineering",
      icon: Code,
      description: "Build the technology that powers our platform",
    },
    {
      name: "Design",
      icon: PenTool,
      description: "Create beautiful, intuitive experiences for our users",
    },
    {
      name: "Customer Support",
      icon: MessageSquare,
      description: "Help our users get the most out of Rootsy",
    },
    {
      name: "Community",
      icon: Users,
      description: "Grow and nurture our community of plant lovers",
    },
    {
      name: "Plant Expertise",
      icon: Leaf,
      description: "Share your plant knowledge and help educate our community",
    },
    {
      name: "Operations",
      icon: Briefcase,
      description: "Keep things running smoothly behind the scenes",
    },
  ]

  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote (US)",
      type: "Full-time",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
    },
    {
      title: "Community Manager",
      department: "Community",
      location: "Remote (US)",
      type: "Full-time",
    },
    {
      title: "Customer Support Specialist",
      department: "Customer Support",
      location: "Remote (US)",
      type: "Part-time",
    },
    {
      title: "Plant Care Expert",
      department: "Plant Expertise",
      location: "Remote (US)",
      type: "Contract",
    },
  ]

  return (
    <div className="container py-12 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading tracking-tight mb-4">Join Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're on a mission to make plant care accessible to everyone. Join us and help build the future of plant care.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-heading mb-6">Why Work at Rootsy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-heading mb-2">Mission-Driven</h3>
            <p className="text-muted-foreground">
              Be part of a team that's passionate about plants and committed to making a positive impact.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-heading mb-2">Growth Opportunities</h3>
            <p className="text-muted-foreground">
              Develop your skills and advance your career in a supportive environment.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-heading mb-2">Work-Life Balance</h3>
            <p className="text-muted-foreground">
              Flexible work arrangements and generous time off to help you thrive both at work and at home.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-heading mb-6">Our Departments</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 mr-3">
                  <dept.icon className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-xl font-heading">{dept.name}</h3>
              </div>
              <p className="text-muted-foreground">{dept.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-heading mb-6">Open Positions</h2>
        <div className="space-y-4">
          {openPositions.map((position, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle>{position.title}</CardTitle>
                <CardDescription>{position.department}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <span className="text-sm text-muted-foreground">{position.location}</span>
                    <span className="text-sm text-muted-foreground">{position.type}</span>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-heading mb-4">Don't See a Perfect Fit?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. Send us your resume and let us know how you
          can contribute to Rootsy.
        </p>
        <Button className="bg-green-600 hover:bg-green-700">Send General Application</Button>
      </div>
    </div>
  )
}
