import Image from "next/image"
import { Leaf } from "lucide-react"

export default function AboutPage() {
  return (
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
  )
}
