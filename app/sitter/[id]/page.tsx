import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Check, Clock, Leaf, MapPin, MessageSquare, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function SitterDetailPage({ params }: { params: { id: string } }) {
  // Convert id to number for lookup
  const sitterId = parseInt(params.id);

  // Define all sitter data
  const allSitterData = {
    1: {
      id: "1",
      name: "Sarah Johnson",
      location: "Milan, Italy",
      distance: "2.5 km",
      rating: 4.9,
      reviews: 124,
      hourlyRate: 15,
      memberSince: "January 2023",
      responseTime: "< 1 hour",
      completedJobs: 87,
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
      coverImage:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "Plant enthusiast with 5+ years of experience caring for all types of indoor plants. I take care of your plants as if they were my own!",
      specialties: ["Tropical Plants", "Orchids", "Rare Plants", "Bonsai"],
      services: [
        {
          name: "Daily visits",
          price: 15,
          description: "Daily visit to water, check and care for your plants.",
        },
        {
          name: "Weekly package",
          price: 90,
          description: "Daily visits for a week, includes watering, fertilizing and general care.",
        },
        {
          name: "Plant Consultation",
          price: 40,
          description:
            "One hour consultation to assess the health of your plants and provide personalized advice.",
        },
        {
          name: "Transplanting and Pruning",
          price: 25,
          description: "Transplanting and pruning service for your plants, includes quality soil.",
        },
      ],
      availability: [
        { day: "Monday", hours: "9:00 - 18:00" },
        { day: "Tuesday", hours: "9:00 - 18:00" },
        { day: "Wednesday", hours: "9:00 - 18:00" },
        { day: "Thursday", hours: "9:00 - 18:00" },
        { day: "Friday", hours: "9:00 - 18:00" },
        { day: "Saturday", hours: "10:00 - 15:00" },
        { day: "Sunday", hours: "Closed" },
      ],
      education: [
        { title: "Bachelor of Science in Biology", institution: "Università di Milano", year: "2018" },
        { title: "Advanced Botany Course", institution: "Orto Botanico di Brera", year: "2020" },
        {
          title: "Certification in Tropical Plant Care",
          institution: "Associazione Botanica Italiana",
          year: "2021",
        },
      ],
      languages: ["Italian", "English", "Spanish"],
    },
    2: {
      id: "2",
      name: "Michael Chen",
      location: "Roma, Italy",
      distance: "3.2 km",
      rating: 4.8,
      reviews: 98,
      hourlyRate: 18,
      memberSince: "March 2022",
      responseTime: "< 2 hours",
      completedJobs: 112,
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop",
      coverImage:
        "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=1200&auto=format&fit=crop",
      bio: "Certified botanist specializing in tropical plants and succulents. I offer plant sitting services and advice for the optimal care of your plants.",
      specialties: ["Succulents", "Mediterranean plants", "Tropical Plants", "Aromatic herbs"],
      services: [
        {
          name: "Daily visit",
          price: 18,
          description: "Daily visit to water, check and take care of your plants.",
        },
        {
          name: "Weekly package",
          price: 110,
          description: "Daily visits for a week, includes watering, fertilizing and general care.",
        },
        {
          name: "Garden consultation",
          price: 50,
          description:
            "One-hour consultation to assess the health of your plants and provide personalized advice.",
        },
        {
          name: "Pest Control",
          price: 35,
          description: "Complete treatment against parasites and plant diseases with natural products.",
        },
      ],
      availability: [
        { day: "Monday", hours: "8:00 - 17:00" },
        { day: "Tuesday", hours: "8:00 - 17:00" },
        { day: "Wednesday", hours: "8:00 - 17:00" },
        { day: "Thursday", hours: "8:00 - 17:00" },
        { day: "Friday", hours: "8:00 - 17:00" },
        { day: "Saturday", hours: "9:00 - 14:00" },
        { day: "Sunday", hours: "Closed" },
      ],
      education: [
        { title: "Diploma in Botany", institution: "University of Rome", year: "2010" },
        { title: "Professional Gardening Course", institution: "Botanical Garden of Rome", year: "2012" },
        { title: "Certification in Permaculture", institution: "Italian Permaculture Academy", year: "2015" },
      ],
      languages: ["Italian", "English", "Chinese"],
    },
    3: {
      id: "3",
      name: "Emma Rodriguez",
      location: "Firenze, Italy",
      distance: "1.8 km",
      rating: 4.7,
      reviews: 76,
      hourlyRate: 20,
      memberSince: "June 2021",
      responseTime: "< 30 minutes",
      completedJobs: 94,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      coverImage:
        "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?q=80&w=1200&auto=format&fit=crop",
      bio: "Passionate plant lover with expertise in rare and exotic species. I offer high quality plant sitting services with attention to detail and the specific needs of each plant.",
      specialties: ["Rare plants", "Ferns", "Plant Health", "Pruning"],
      services: [
        {
          name: "Daily visit",
          price: 20,
          description: "Daily visit to water, check and take care of your plants.",
        },
        {
          name: "Weekly package",
          price: 120,
          description: "Daily visits for a week, includes watering, fertilization and general care.",
        },
        {
          name: "Rare plant consultancy",
          price: 60,
          description: "Specialized consultancy for the care of rare and delicate plants.",
        },
        {
          name: "Propagation",
          price: 40,
          description: "Propagation service to multiply your favorite plants.",
        },
      ],
      availability: [
        { day: "Monday", hours: "10:00 - 19:00" },
        { day: "Tuesday", hours: "10:00 - 19:00" },
        { day: "Wednesday", hours: "10:00 - 19:00" },
        { day: "Thursday", hours: "10:00 - 19:00" },
        { day: "Friday", hours: "10:00 - 19:00" },
        { day: "Saturday", hours: "10:00 - 16:00" },
        { day: "Sunday", hours: "10:00 - 14:00" },
      ],
      education: [
        { title: "Degree in Natural Sciences", institution: "University of Florence", year: "2017" },
        { title: "Master in Tropical Botany", institution: "University of Padua", year: "2019" },
        {
          title: "Specialization Course in Rare Plants",
          institution: "Botanical Garden of Florence",
          year: "2020",
        },
      ],
      languages: ["Italian", "English", "Spanish"],
    },
    4: {
      id: "4",
      name: "David Kim",
      location: "Milan, Italy",
      distance: "4.1 km",
      rating: 4.6,
      reviews: 15,
      hourlyRate: 14,
      memberSince: "August 2023",
      responseTime: "< 3 hours",
      completedJobs: 42,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      coverImage:
        "https://images.unsplash.com/photo-1590622783586-e5d3d07df951?q=80&w=1200&auto=format&fit=crop",
      bio: "Horticulture student with a focus on indoor plant ecosystems. I have a passion for creating balanced growing environments for all types of houseplants.",
      specialties: ["Indoor Plants", "Light Management", "Fertilizing", "Plant Ecosystems"],
      services: [
        {
          name: "Daily care",
          price: 14,
          description: "Daily visit for basic plant care and watering.",
        },
        {
          name: "Weekly package",
          price: 85,
          description: "Complete care for your plants throughout the week.",
        },
        {
          name: "Light assessment",
          price: 30,
          description: "Evaluation of your home's light conditions and plant placement recommendations.",
        },
        {
          name: "Fertilization plan",
          price: 25,
          description: "Custom fertilization schedule based on your plants' specific needs.",
        },
      ],
      availability: [
        { day: "Monday", hours: "13:00 - 20:00" },
        { day: "Tuesday", hours: "13:00 - 20:00" },
        { day: "Wednesday", hours: "13:00 - 20:00" },
        { day: "Thursday", hours: "13:00 - 20:00" },
        { day: "Friday", hours: "13:00 - 20:00" },
        { day: "Saturday", hours: "10:00 - 18:00" },
        { day: "Sunday", hours: "10:00 - 18:00" },
      ],
      education: [
        { title: "Bachelor of Science in Horticulture (in progress)", institution: "University of Milan", year: "2023-present" },
        { title: "Certificate in Indoor Plant Care", institution: "Milan Botanical Garden", year: "2022" },
      ],
      languages: ["Italian", "English", "Korean"],
    },
    // Add more sitters as needed
  };

  // Add more sitters to match all the IDs from the plantsitting page
  for (let i = 5; i <= 9; i++) {
    if (!allSitterData[i as keyof typeof allSitterData]) {
      const names = ["Olivia Martinez", "James Wilson", "Sophia Lee", "Ethan Brown", "Ava Thompson"];
      const locations = ["Turin, Italy", "Florence, Italy", "Naples, Italy", "Venice, Italy", "Bologna, Italy"];
      const distances = ["2.3 km", "3.7 km", "1.5 km", "5.2 km", "2.8 km"];
      const avatars = [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
      ];
      const idx = i - 5;

      allSitterData[i as keyof typeof allSitterData] = {
        id: i.toString(),
        name: names[idx] || `Plant Sitter ${i}`,
        location: locations[idx] || "Italy",
        distance: distances[idx] || "3.0 km",
        rating: 4.5 + (idx * 0.1),
        reviews: 15 + (idx * 5),
        hourlyRate: 15 + idx,
        memberSince: "January 2023",
        responseTime: "< 2 hours",
        completedJobs: 50 + (idx * 10),
        avatar: avatars[idx] || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
        coverImage: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?q=80&w=1200&auto=format&fit=crop",
        bio: "Experienced plant caretaker with a passion for all types of indoor and outdoor plants.",
        specialties: ["Indoor Plants", "Outdoor Plants", "Seasonal Care", "Plant Health"],
        services: [
          {
            name: "Daily care",
            price: 15 + idx,
            description: "Daily visit for plant care and watering.",
          },
          {
            name: "Weekly package",
            price: 90 + (idx * 5),
            description: "Complete care package for one week.",
          },
          {
            name: "Plant health check",
            price: 35,
            description: "Thorough assessment of your plants' health and care needs.",
          },
          {
            name: "Special care service",
            price: 40,
            description: "Specialized care for exotic or sensitive plants.",
          },
        ],
        availability: [
          { day: "Monday", hours: "9:00 - 18:00" },
          { day: "Tuesday", hours: "9:00 - 18:00" },
          { day: "Wednesday", hours: "9:00 - 18:00" },
          { day: "Thursday", hours: "9:00 - 18:00" },
          { day: "Friday", hours: "9:00 - 18:00" },
          { day: "Saturday", hours: "10:00 - 15:00" },
          { day: "Sunday", hours: "Closed" },
        ],
        education: [
          { title: "Plant Care Certification", institution: "Italian Botanical Association", year: "2020" },
          { title: "Gardening Course", institution: "Community Garden School", year: "2019" },
        ],
        languages: ["Italian", "English"],
      };
    }
  }

  // Get sitter data with fallback to sitter #1 if not found
  const sitterData = allSitterData[sitterId as keyof typeof allSitterData] || allSitterData[1];

  // Determine which sitters to show in "Other sitters in your area" section
  // Get 2 random sitters that aren't the current one
  const getRelatedSitters = () => {
    const availableSitterIds = Object.keys(allSitterData)
      .map(id => parseInt(id))
      .filter(id => id !== sitterId)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    return availableSitterIds.map(id => allSitterData[id as keyof typeof allSitterData]);
  };

  const relatedSitters = getRelatedSitters();

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
            <Link href="/about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
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
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <Image
            src={sitterData.coverImage || "/placeholder.svg"}
            alt={`${sitterData.name} cover image`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="container absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="mb-6">
              <Link
                href="/plantsitting"
                className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Plant Sitters
              </Link>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column - Profile */}
            <div className="md:col-span-1">
              <div className="relative -mt-20 mb-6">
                <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-white bg-white">
                  <Image
                    src={sitterData.avatar || "/placeholder.svg"}
                    alt={sitterData.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-heading">{sitterData.name}</h1>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {sitterData.location} ({sitterData.distance})
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i <= Math.floor(sitterData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm">
                      {sitterData.rating} ({sitterData.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Hourly rate</span>
                    <span className="font-semibold text-green-600">€{sitterData.hourlyRate}/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Response time</span>
                    <span>{sitterData.responseTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Completed jobs</span>
                    <span>{sitterData.completedJobs}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Member since</span>
                    <span>{sitterData.memberSince}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading mb-2">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {sitterData.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="bg-green-50">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {sitterData.languages.map((language) => (
                      <Badge key={language} variant="outline">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading mb-2">Availability</h3>
                  <div className="space-y-2 text-sm">
                    {sitterData.availability.map((slot) => (
                      <div key={slot.day} className="flex justify-between">
                        <span className="font-medium">{slot.day}</span>
                        <span className={slot.hours === "Closed" ? "text-red-500" : ""}>{slot.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>

            {/* Right column - Main content */}
            <div className="md:col-span-2">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="w-full grid grid-cols-3 mb-8">
                  <TabsTrigger value="about" className="font-heading">
                    Who I Am
                  </TabsTrigger>
                  <TabsTrigger value="services" className="font-heading">
                    Services
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="font-heading">
                    Reviews
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-heading mb-4">Who I am</h2>
                    <p className="text-muted-foreground">{sitterData.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-heading mb-3">Education</h3>
                    <div className="space-y-4">
                      {sitterData.education.map((edu, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
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
                              className="h-5 w-5 text-green-600"
                            >
                              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">{edu.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {edu.institution} • {edu.year}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-heading mb-3">Why choosing me</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Many years of experience in plant care</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>In-depth knowledge of different plant species</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Personalized service based on your plants' needs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Regular updates with photos of your plants</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Flexible availability and reliable service</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-heading mb-2">Service Area</h3>
                      <p className="text-sm text-muted-foreground">
                        I offer plant sitting services within a 10km radius of {sitterData.location}. For longer distances, a supplement may apply.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="font-heading mb-2">Cancellation Policy</h3>
                      <p className="text-sm text-muted-foreground">
                        Free cancellation up to 48 hours before the service. After this time, 50% of the total cost will be charged.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="services" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-heading mb-4">Services Offered</h2>
                    <p className="text-muted-foreground mb-6">
                      I offer a variety of services to care for your plants while you are away or to help you
                      keep them healthy. All services can be customized to your specific needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sitterData.services.map((service, index) => (
                        <div key={index} className="border rounded-lg p-4 flex flex-col h-full">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-heading">{service.name}</h3>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">€{service.price}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground flex-grow">{service.description}</p>
                          <Button variant="outline" className="mt-4 w-full">
                            Book
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-heading mb-3">Customized services</h3>
                    <p className="text-muted-foreground mb-4">
                      Do you have special needs or plants that require special care? Contact me to discuss a
                      customized service suited to your needs.
                    </p>
                    <div className="flex gap-4">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Request a quote
                      </Button>
                      <Button variant="outline">
                        <Calendar className="mr-2 h-4 w-4" />
                        Check availability
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                        <Clock className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-heading mb-1">Quick Booking</h3>
                        <p className="text-sm text-muted-foreground">
                          Need a plant sitter urgently? I respond to requests within {" "}
                          {sitterData.responseTime} and can often arrange a service at short notice.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-heading">Clients review</h2>
                  </div>

                  <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="text-center">
                      <div className="text-5xl font-heading">{sitterData.rating}</div>
                      <div className="flex justify-center mt-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Based on {sitterData.reviews} reviews
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-2">
                          <div className="text-sm text-muted-foreground w-2">{rating}</div>
                          <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full"
                              style={{
                                width:
                                  rating === 5
                                    ? "85%"
                                    : rating === 4
                                      ? "12%"
                                      : rating === 3
                                        ? "2%"
                                        : rating === 2
                                          ? "1%"
                                          : "0%",
                              }}
                            />
                          </div>
                          <div className="text-sm text-muted-foreground w-8">
                            {rating === 5
                              ? "85%"
                              : rating === 4
                                ? "12%"
                                : rating === 3
                                  ? "2%"
                                  : rating === 2
                                    ? "1%"
                                    : "0%"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recensioni fittizie */}
                  <div className="space-y-6">
                    {[
                      {
                        name: "Laura Neri",
                        date: "2 weeks ago",
                        rating: 5,
                        comment:
                          "I left my 15 plants with Elena during a two week vacation and came back to find them all in perfect health! She sent me photos and updates every day. Highly recommended!",
                      },
                      {
                        name: "Giovanni Bianchi",
                        date: "1 month ago",
                        rating: 5,
                        comment:
                          "Elena saved my dying bonsai! Not only did she take care of my plants while I was away, but she also gave me valuable advice on how to care for them better. Professional and knowledgeable.",
                      },
                      {
                        name: "Martina Rossi",
                        date: "2 months ago",
                        rating: 4,
                        comment:
                          "Great service, Elena is punctual and reliable. My plants were in good condition when I returned. The only reason I don't give 5 stars is that I would have liked to receive more updates during her visit.",
                      },
                    ].map((review, index) => (
                      <div key={index} className="border-b pb-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-heading">{review.name}</div>
                            <div className="flex items-center mt-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                    }`}
                                />
                              ))}
                              <span className="ml-2 text-xs text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-sm">{review.comment}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline">Show more reviews</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-heading mb-6">Other plantsitter in your area</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedSitters.map((sitter) => (
                <Link href={`/sitter/${sitter.id}`} key={sitter.id} className="group">
                  <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
                    <div className="relative h-48 w-full">
                      <Image
                        src={sitter.coverImage || "/placeholder.svg"}
                        alt={sitter.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white">
                            <Image
                              src={sitter.avatar || "/placeholder.svg"}
                              alt={sitter.name}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <div className="text-white">
                            <h3 className="font-heading">{sitter.name}</h3>
                            <div className="flex items-center text-sm">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                              <span>
                                {sitter.rating} ({sitter.reviews})
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {sitter.location}
                        </div>
                        <span className="font-semibold text-green-600">€{sitter.hourlyRate}/hour</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {sitter.specialties.slice(0, 2).map((specialty) => (
                          <Badge key={specialty} variant="outline" className="bg-green-50 text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
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
