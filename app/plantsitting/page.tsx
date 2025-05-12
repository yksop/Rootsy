"use client"  // Aggiungiamo questa direttiva per poter usare gli stati in React

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, MapPin, Search, SlidersHorizontal, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { RangeSlider } from "@/components/ui/range-slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function PlantsittingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("distance");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [distance, setDistance] = useState([5]);
  const [services, setServices] = useState({
    watering: false,
    fertilizing: false,
    pruning: false,
    repotting: false,
    pestControl: false
  });
  const [experienceLevel, setExperienceLevel] = useState({
    beginner: false,
    intermediate: false,
    expert: false
  });
  const [availability, setAvailability] = useState({
    weekdays: false,
    weekends: false,
    holidays: false
  });

  const [filtersApplied, setFiltersApplied] = useState(false);
  const [tempFilters, setTempFilters] = useState({
    priceRange: [0, 50],
    distance: [5],
    services: { ...services },
    experienceLevel: { ...experienceLevel },
    availability: { ...availability }
  });

  const resetFilters = () => {
    setTempFilters({
      priceRange: [0, 50],
      distance: [5],
      services: {
        watering: false,
        fertilizing: false,
        pruning: false,
        repotting: false,
        pestControl: false
      },
      experienceLevel: {
        beginner: false,
        intermediate: false,
        expert: false
      },
      availability: {
        weekdays: false,
        weekends: false,
        holidays: false
      }
    });
  };

  const applyFilters = () => {
    setPriceRange(tempFilters.priceRange);
    setDistance(tempFilters.distance);
    setServices({ ...tempFilters.services });
    setExperienceLevel({ ...tempFilters.experienceLevel });
    setAvailability({ ...tempFilters.availability });
    setFiltersApplied(true);
  };

  // Definisci i tipi per i servizi, i livelli di esperienza e la disponibilità
  type ServiceKey = 'watering' | 'fertilizing' | 'pruning' | 'repotting' | 'pestControl';
  type ExperienceLevelKey = 'beginner' | 'intermediate' | 'expert';
  type AvailabilityKey = 'weekdays' | 'weekends' | 'holidays';

  // Modifica le funzioni di gestione dei cambiamenti specificando i tipi
  const handleServiceChange = (service: ServiceKey) => {
    setTempFilters({
      ...tempFilters,
      services: {
        ...tempFilters.services,
        [service]: !tempFilters.services[service]
      }
    });
  };

  const handleExperienceChange = (level: ExperienceLevelKey) => {
    setTempFilters({
      ...tempFilters,
      experienceLevel: {
        ...tempFilters.experienceLevel,
        [level]: !tempFilters.experienceLevel[level]
      }
    });
  };

  const handleAvailabilityChange = (type: AvailabilityKey) => {
    setTempFilters({
      ...tempFilters,
      availability: {
        ...tempFilters.availability,
        [type]: !tempFilters.availability[type]
      }
    });
  };

  const sitters = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      rating: 4.9,
      reviews: 24,
      distance: 2.5,
      description: "Plant enthusiast with 5+ years of experience caring for all types of indoor plants.",
      price: 15,
      badges: ["Watering", "Pruning", "Fertilizing"],
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
      rating: 4.8,
      reviews: 18,
      distance: 3.2,
      description: "Certified botanist specializing in tropical plants and succulents.",
      price: 18,
      badges: ["Watering", "Repotting", "Pest Control"],
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      rating: 4.7,
      reviews: 31,
      distance: 1.8,
      description: "Passionate plant lover with expertise in rare and exotic species.",
      price: 16,
      badges: ["Watering", "Pruning", "Plant Health"],
    },
    {
      id: 4,
      name: "David Kim",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 4.6,
      reviews: 15,
      distance: 4.1,
      description: "Horticulture student with a focus on indoor plant ecosystems.",
      price: 14,
      badges: ["Watering", "Fertilizing", "Light Management"],
    },
    {
      id: 5,
      name: "Olivia Martinez",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      rating: 4.9,
      reviews: 27,
      distance: 2.3,
      description: "Former greenhouse manager with extensive knowledge of plant care.",
      price: 20,
      badges: ["Full Service", "Repotting", "Pest Control"],
    },
    {
      id: 6,
      name: "James Wilson",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 4.7,
      reviews: 22,
      distance: 3.7,
      description: "Plant enthusiast specializing in air purifying plants and ferns.",
      price: 17,
      badges: ["Watering", "Humidity Control", "Propagation"],
    },
    {
      id: 7,
      name: "Sophia Lee",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      rating: 4.8,
      reviews: 19,
      distance: 1.5,
      description: "Experienced with rare tropical plants and creating optimal growing conditions.",
      price: 19,
      badges: ["Specialized Care", "Propagation", "Seasonal Care"],
    },
    {
      id: 8,
      name: "Ethan Brown",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
      rating: 4.6,
      reviews: 14,
      distance: 5.2,
      description: "Plant collector focusing on cacti and succulents with desert-like conditions.",
      price: 16,
      badges: ["Drought Plants", "Soil Management", "Watering"],
    },
    {
      id: 9,
      name: "Ava Thompson",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      rating: 4.9,
      reviews: 33,
      distance: 2.8,
      description: "Botanical garden volunteer with expertise in a wide variety of plant species.",
      price: 18,
      badges: ["Full Service", "Plant Rotation", "Light Management"],
    },
  ]

  // Filtrare i sitter in base al termine di ricerca
  // Filtrare i sitter in base al termine di ricerca e ai filtri applicati
  const filteredSitter = sitters.filter(sitter => {
    // Filtraggio per termine di ricerca
    const matchesSearch =
      sitter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sitter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sitter.badges.some(badge => badge.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!matchesSearch) return false;

    // Filtraggio per prezzo se i filtri sono applicati
    if (filtersApplied) {
      if (sitter.price < priceRange[0] || sitter.price > priceRange[1]) return false;

      // Filtraggio per distanza
      if (sitter.distance > distance[0]) return false;

      // Filtraggio per servizi
      const servicesSelected = Object.values(services).some(v => v);
      if (servicesSelected) {
        const hasWatering = services.watering && sitter.badges.includes("Watering");
        const hasFertilizing = services.fertilizing && sitter.badges.includes("Fertilizing");
        const hasPruning = services.pruning && sitter.badges.includes("Pruning");
        const hasRepotting = services.repotting && sitter.badges.includes("Repotting");
        const hasPestControl = services.pestControl && sitter.badges.includes("Pest Control");

        if (!(hasWatering || hasFertilizing || hasPruning || hasRepotting || hasPestControl)) return false;
      }

      // Filtraggio per esperienza (simulazione basata su ID, in un'app reale useremmo anni di esperienza)
      const expSelected = Object.values(experienceLevel).some(v => v);
      if (expSelected) {
        const isBeginner = experienceLevel.beginner && sitter.id > 6; // Simulazione: ID più alto = più recente = principiante
        const isIntermediate = experienceLevel.intermediate && (sitter.id > 3 && sitter.id <= 6);
        const isExpert = experienceLevel.expert && sitter.id <= 3;

        if (!(isBeginner || isIntermediate || isExpert)) return false;
      }

      // Per la disponibilità, in un'app reale avremmo dati effettivi sulla disponibilità
      // Qui facciamo solo una simulazione
    }

    return true;
  });

  const sortedSitter = [...filteredSitter].sort((a, b) => {
    switch (sortBy) {
      case "distance":
        return b.distance - a.distance;
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "experience":
        return a.id - b.id;
      default:
        return 0;
    }
  });

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
            <Link href="/plantsitting" className="text-sm font-medium text-green-600">
              Plant Sitting
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-green-600 transition-colors">
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
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-800/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=1200&auto=format&fit=crop"
            alt="Plant Sitting"
            width={1200}
            height={400}
            className="w-full h-[300px] object-cover"
          />
          <div className="container relative z-20 flex flex-col items-center justify-center text-center py-12 text-white">
            <h1 className="text-3xl font-heading tracking-tight sm:text-4xl">Find the Perfect Plant Sitter</h1>
            <p className="mt-4 max-w-md text-lg">
              Connect with experienced plant sitters who will care for your green friends while you're away
            </p>
          </div>
        </div>

        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-heading tracking-tight">Plant Sitting Services</h2>
              <p className="text-muted-foreground mt-1">Find reliable plant sitters in your area</p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search plantsitter..."
                  className="w-full pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Find the perfect plant sitter with these filters.</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-6 py-6">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Price Range (per day)</h3>
                      <RangeSlider
                        value={tempFilters.priceRange}
                        onValueChange={(value) => setTempFilters({ ...tempFilters, priceRange: value })}
                        max={100}
                        step={1}
                        minStepsBetweenThumbs={1}
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">€{tempFilters.priceRange[0]}</span>
                        <span className="text-xs text-muted-foreground">€{tempFilters.priceRange[1]}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Distance</h3>
                      <Slider
                        value={tempFilters.distance}
                        onValueChange={(value) => setTempFilters({ ...tempFilters, distance: value })}
                        max={50}
                        step={1}
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">0 kilometers</span>
                        <span className="text-xs text-muted-foreground">{tempFilters.distance[0]} kilometers</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Services</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="watering"
                            checked={tempFilters.services.watering}
                            onCheckedChange={() => handleServiceChange('watering')}
                          />
                          <Label htmlFor="watering">Watering</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="fertilizing"
                            checked={tempFilters.services.fertilizing}
                            onCheckedChange={() => handleServiceChange('fertilizing')}
                          />
                          <Label htmlFor="fertilizing">Fertilizing</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="pruning"
                            checked={tempFilters.services.pruning}
                            onCheckedChange={() => handleServiceChange('pruning')}
                          />
                          <Label htmlFor="pruning">Pruning</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="repotting"
                            checked={tempFilters.services.repotting}
                            onCheckedChange={() => handleServiceChange('repotting')}
                          />
                          <Label htmlFor="repotting">Repotting</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="pest-control"
                            checked={tempFilters.services.pestControl}
                            onCheckedChange={() => handleServiceChange('pestControl')}
                          />
                          <Label htmlFor="pest-control">Pest Control</Label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Experience Level</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="beginner-sitter"
                            checked={tempFilters.experienceLevel.beginner}
                            onCheckedChange={() => handleExperienceChange('beginner')}
                          />
                          <Label htmlFor="beginner-sitter">Beginner (0-1 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="intermediate-sitter"
                            checked={tempFilters.experienceLevel.intermediate}
                            onCheckedChange={() => handleExperienceChange('intermediate')}
                          />
                          <Label htmlFor="intermediate-sitter">Intermediate (1-3 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="expert-sitter"
                            checked={tempFilters.experienceLevel.expert}
                            onCheckedChange={() => handleExperienceChange('expert')}
                          />
                          <Label htmlFor="expert-sitter">Expert (3+ years)</Label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Availability</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="weekdays"
                            checked={tempFilters.availability.weekdays}
                            onCheckedChange={() => handleAvailabilityChange('weekdays')}
                          />
                          <Label htmlFor="weekdays">Weekdays</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="weekends"
                            checked={tempFilters.availability.weekends}
                            onCheckedChange={() => handleAvailabilityChange('weekends')}
                          />
                          <Label htmlFor="weekends">Weekends</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="holidays"
                            checked={tempFilters.availability.holidays}
                            onCheckedChange={() => handleAvailabilityChange('holidays')}
                          />
                          <Label htmlFor="holidays">Holidays</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={resetFilters}>Reset</Button>
                    <Button className="bg-green-600 hover:bg-green-700" onClick={applyFilters}>Apply Filters</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Showing {filteredSitter.length} results
                {filtersApplied && " with filters"}
              </span>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Distance</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedSitter.map((sitter) => (
              <div key={sitter.id} className="rounded-lg border bg-white p-6 transition-all hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={sitter.image || "/placeholder.svg"}
                      alt={`Plant Sitter ${sitter.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading">{sitter.name}</h3>
                    <div className="mt-1 flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm text-muted-foreground">
                        {sitter.rating} ({sitter.reviews} reviews)
                      </span>
                    </div>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>{sitter.distance} kilometers away</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {sitter.badges.map((badge, j) => (
                    <Badge key={j} variant="outline" className="bg-green-50">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{sitter.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-medium text-green-600">€{sitter.price}/day</span>
                  <Link href={`/sitter/${sitter.id}`}>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
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
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">Previous</span>
              </Button>
              <Button variant="outline" className="h-8 w-8" disabled>
                1
              </Button>
              <Button variant="outline" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" className="h-8 w-8">
                3
              </Button>
              <Button variant="outline" size="icon">
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
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">Next</span>
              </Button>
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
