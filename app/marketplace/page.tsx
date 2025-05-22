"use client"  // Aggiungiamo questa direttiva per poter usare gli stati in React

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, Search, SlidersHorizontal, Star, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { RangeSlider } from "@/components/ui/range-slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function MarketplacePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [tempFilters, setTempFilters] = useState({
    priceRange: [0, 100],
    plantType: {
      indoor: false,
      outdoor: false,
      succulents: false,
      tropical: false,
      cacti: false
    },
    lightRequirements: {
      lowLight: false,
      mediumLight: false,
      brightLight: false
    },
    careLevel: {
      beginner: false,
      intermediate: false,
      expert: false
    }
  });

  const [filters, setFilters] = useState({
    priceRange: [0, 100],
    plantType: {
      indoor: false,
      outdoor: false,
      succulents: false,
      tropical: false,
      cacti: false
    },
    lightRequirements: {
      lowLight: false,
      mediumLight: false,
      brightLight: false
    },
    careLevel: {
      beginner: false,
      intermediate: false,
      expert: false
    }
  });

  // Plant data for the marketplace
  const plants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: 29.99,
      rating: 4.8,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F_RxKTB2LvppM%2FS2NOOEY8qZI%2FAAAAAAAAA0M%2F0v0vBMJBV-o%2Fs400%2FMonstera%2Bpost%2Bshower%2B2%2Bcmp.jpg&f=1&nofb=1&ipt=0476a845a62c61c963c63debec1cbce67d991512c72f541f89551c69156d2f36",
      lightLevel: "Medium light • Moderate",
      careLevel: "Easy",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 24.99,
      rating: 4.7,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechnofaq.org%2Fwp-content%2Fuploads%2F2017%2F04%2FSnake-Plant-713x1024.jpg&f=1&nofb=1&ipt=eb754c3b5c9478f07516525f049913437318e540585c13fed60b84b529852812",
      lightLevel: "Low light • Easy care",
      careLevel: "Easy",
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      price: 34.99,
      rating: 4.6,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fterragreenhouses.com%2Fwp-content%2Fuploads%2F2020%2F08%2FFiddle-Leaf-Fig-10-Inch-Grower-Pot-scaled.jpg&f=1&nofb=1&ipt=b2c88ddea8209a4106bcba0af15a1fcb70dc4f54b8d5d61a2372925e663bd203",
      lightLevel: "Bright light • Regular water",
      careLevel: "Moderate",
    },
    {
      id: 4,
      name: "Pothos",
      price: 19.99,
      rating: 4.9,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F1411%2F1409790495_4b2c5ca74a_b.jpg&f=1&nofb=1&ipt=a4be47c332aec27907f0611571887f548de2eb1a44f6b7e9d1b811bb6a471cf3",
      lightLevel: "Low to bright light • Easy care",
      careLevel: "Easy",
    },
    {
      id: 5,
      name: "ZZ Plant",
      price: 22.99,
      rating: 4.8,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbp0.blogger.com%2F_eaKbvlcIK10%2FR5x_UNEuRYI%2FAAAAAAAAAss%2FZvN90kdrmpU%2Fs400%2Fhomalomena%2Bemerald%2Bgem%2B(own)2.jpg&f=1&nofb=1&ipt=d2460025b208fc0e33785d76cbf9674a9d41d09e0cbfeecebe4de71bb517881a",
      lightLevel: "Low light • Drought tolerant",
      careLevel: "Easy",
    },
    {
      id: 6,
      name: "Calathea",
      price: 27.99,
      rating: 4.5,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F65535%2F47784340922_929925ed5c_b.jpg&f=1&nofb=1&ipt=d1a552bd084f52267035d2757a530fa8bfe88d609461cf400b34ccfec7e51317",
      lightLevel: "Medium light • High humidity",
      careLevel: "Moderate",
    },
    {
      id: 7,
      name: "Aloe Vera",
      price: 18.99,
      rating: 4.7,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F_eaKbvlcIK10%2FTToKQqJeU5I%2FAAAAAAAAKPA%2FcDpTBZsQhiY%2Fs1600%2Fagave%252Bvictoriae-reginae%252B%252528own%2525293.jpg&f=1&nofb=1&ipt=084055765b30e5d1f4ed1805495a8f1fce2f2fecf91db9a09258e97079844120",
      lightLevel: "Bright light • Drought tolerant",
      careLevel: "Easy",
    },
    {
      id: 8,
      name: "Peace Lily",
      price: 25.99,
      rating: 4.6,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbugwoodcloud.org%2Fimages%2F1536x1024%2F5563982.jpg&f=1&nofb=1&ipt=31f7a8d96b18bd69785062718d14849ef7d0aa26072040e355390e7c45003076",
      lightLevel: "Low to medium light • Regular water",
      careLevel: "Easy",
    },
    {
      id: 9,
      name: "Rubber Plant",
      price: 32.99,
      rating: 4.7,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffarm3.staticflickr.com%2F2146%2F2489335887_e40d6cc95f_o_d.jpg&f=1&nofb=1&ipt=2d2e6483729ec230d37dc779f04da54f76463a89818f29270d0990c41d98dafd",
      lightLevel: "Medium to bright light • Moderate water",
      careLevel: "Moderate",
    },
    {
      id: 10,
      name: "String of Pearls",
      price: 21.99,
      rating: 4.5,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F_eaKbvlcIK10%2FSvhKEitYJQI%2FAAAAAAAAGgE%2FmA2JYubJNzc%2Fs400%2Fsenecio%2Browleyanus%2B(own).jpg&f=1&nofb=1&ipt=2aefff66adf2f0dcb6d42bc603b9a90739e4852ce01f06cc39c75436136ddca8",
      lightLevel: "Bright indirect light • Sparse water",
      careLevel: "Moderate",
    },
    {
      id: 11,
      name: "Bird of Paradise",
      price: 39.99,
      rating: 4.6,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F20%2F88125366_55ea40adbd_b.jpg&f=1&nofb=1&ipt=380d9188bf9d37da52dc26fbec06fd9aa7235520263054ab7758ee3229ba8ea9",
      lightLevel: "Bright light • Moderate water",
      careLevel: "Moderate",
    },
    {
      id: 12,
      name: "Chinese Money Plant",
      price: 23.99,
      rating: 4.8,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-nM6WvSyR46k%2FVNo92-QRDOI%2FAAAAAAAAQy4%2Fn9omz_zNcdk%2Fs1600%2FPieni%25C4%2585%25C5%25BCek%252Bpilea%252Bpeperomoides.jpg&f=1&nofb=1&ipt=dfb5e6499329d87895df303328a8fac09007b3d737d384f71be7d6442bd0daaa&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbmVzZSUyMG1vbmV5JTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      lightLevel: "Bright indirect light • Moderate water",
      careLevel: "Easy",
    },
  ]

  const resetFilters = () => {
    setTempFilters({
      priceRange: [0, 100],
      plantType: {
        indoor: false,
        outdoor: false,
        succulents: false,
        tropical: false,
        cacti: false
      },
      lightRequirements: {
        lowLight: false,
        mediumLight: false,
        brightLight: false
      },
      careLevel: {
        beginner: false,
        intermediate: false,
        expert: false
      }
    });
  };

  // Funzione per applicare i filtri
  const applyFilters = () => {
    setFilters({ ...tempFilters });
    setFiltersApplied(true);
  };

  // Funzione per gestire il cambiamento del tipo di pianta
  const handlePlantTypeChange = (type: string) => {
    setTempFilters({
      ...tempFilters,
      plantType: {
        ...tempFilters.plantType,
        [type]: !tempFilters.plantType[type as keyof typeof tempFilters.plantType]
      }
    });
  };

  // Funzione per gestire il cambiamento dei requisiti di luce
  const handleLightRequirementsChange = (level: string) => {
    setTempFilters({
      ...tempFilters,
      lightRequirements: {
        ...tempFilters.lightRequirements,
        [level]: !tempFilters.lightRequirements[level as keyof typeof tempFilters.lightRequirements]
      }
    });
  };

  // Funzione per gestire il cambiamento del livello di cura
  const handleCareLevelChange = (level: string) => {
    setTempFilters({
      ...tempFilters,
      careLevel: {
        ...tempFilters.careLevel,
        [level]: !tempFilters.careLevel[level as keyof typeof tempFilters.careLevel]
      }
    });
  };

  // Filtrare le piante in base al termine di ricerca
  const filteredPlants = plants.filter(plant => {
    // Filtraggio per termine di ricerca
    const matchesSearch =
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.lightLevel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.careLevel.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    // Filtraggio per prezzo se i filtri sono applicati
    if (filtersApplied) {
      // Filtraggio per prezzo
      if (plant.price < filters.priceRange[0] || plant.price > filters.priceRange[1]) return false;

      // Filtraggio per livello di cura
      const careLevelSelected = Object.values(filters.careLevel).some(v => v);
      if (careLevelSelected) {
        const matchesBeginner = filters.careLevel.beginner && plant.careLevel === "Easy";
        const matchesIntermediate = filters.careLevel.intermediate && plant.careLevel === "Moderate";
        const matchesExpert = filters.careLevel.expert && plant.careLevel === "Expert";

        if (!(matchesBeginner || matchesIntermediate || matchesExpert)) return false;
      }

      // Filtraggio per requisiti di luce
      const lightSelected = Object.values(filters.lightRequirements).some(v => v);
      if (lightSelected) {
        const matchesLowLight = filters.lightRequirements.lowLight &&
          plant.lightLevel.toLowerCase().includes("low");
        const matchesMediumLight = filters.lightRequirements.mediumLight &&
          plant.lightLevel.toLowerCase().includes("medium");
        const matchesBrightLight = filters.lightRequirements.brightLight &&
          (plant.lightLevel.toLowerCase().includes("bright") ||
            plant.lightLevel.toLowerCase().includes("high"));

        if (!(matchesLowLight || matchesMediumLight || matchesBrightLight)) return false;
      }

      // Nota: Per il tipo di pianta, dovremmo avere dati più specifici
      // Questo è un esempio che simula il filtro basandosi sul nome
      const plantTypeSelected = Object.values(filters.plantType).some(v => v);
      if (plantTypeSelected) {
        const matchesIndoor = filters.plantType.indoor &&
          !plant.lightLevel.toLowerCase().includes("direct");
        const matchesOutdoor = filters.plantType.outdoor &&
          plant.lightLevel.toLowerCase().includes("direct");
        const matchesSucculents = filters.plantType.succulents &&
          (plant.name.toLowerCase().includes("aloe") ||
            plant.name.toLowerCase().includes("string of pearls"));
        const matchesTropical = filters.plantType.tropical &&
          (plant.name.toLowerCase().includes("monstera") ||
            plant.name.toLowerCase().includes("bird of paradise"));
        const matchesCacti = filters.plantType.cacti &&
          plant.name.toLowerCase().includes("cacti");

        if (!(matchesIndoor || matchesOutdoor || matchesSucculents || matchesTropical || matchesCacti)) return false;
      }
    }

    return true;
  });

  // Ordinare le piante in base al criterio selezionato
  const sortedPlants = [...filteredPlants].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        // Per semplicità, ordiniamo per ID (assumendo che ID più alti siano più recenti)
        return b.id - a.id;
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "popular":
        // Ordina per valutazione più alta
        return b.rating - a.rating;
      case "featured":
      default:
        // L'ordinamento predefinito "featured" lo lasciamo come è
        return 0;
    }
  });

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
            <Link href="/marketplace" className="text-sm font-medium text-green-600">
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
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="mt-8 flex flex-col gap-6">
                <Link
                  href="/marketplace"
                  className="text-base font-medium text-green-600"
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
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Sign up
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-heading tracking-tight">Plant Marketplace</h1>
              <p className="text-muted-foreground mt-1">Find the perfect plants for your home</p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search plants..."
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
                    <SheetDescription>Narrow down your plant search with these filters.</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-6 py-6">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Price Range</h3>
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
                      <h3 className="text-sm font-medium font-heading">Plant Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="indoor"
                            checked={tempFilters.plantType.indoor}
                            onCheckedChange={() => handlePlantTypeChange('indoor')}
                          />
                          <Label htmlFor="indoor">Indoor Plants</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="outdoor"
                            checked={tempFilters.plantType.outdoor}
                            onCheckedChange={() => handlePlantTypeChange('outdoor')}
                          />
                          <Label htmlFor="outdoor">Outdoor Plants</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="succulents"
                            checked={tempFilters.plantType.succulents}
                            onCheckedChange={() => handlePlantTypeChange('succulents')}
                          />
                          <Label htmlFor="succulents">Succulents</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="tropical"
                            checked={tempFilters.plantType.tropical}
                            onCheckedChange={() => handlePlantTypeChange('tropical')}
                          />
                          <Label htmlFor="tropical">Tropical</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="cacti"
                            checked={tempFilters.plantType.cacti}
                            onCheckedChange={() => handlePlantTypeChange('cacti')}
                          />
                          <Label htmlFor="cacti">Cacti</Label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Light Requirements</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="low-light"
                            checked={tempFilters.lightRequirements.lowLight}
                            onCheckedChange={() => handleLightRequirementsChange('lowLight')}
                          />
                          <Label htmlFor="low-light">Low Light</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="medium-light"
                            checked={tempFilters.lightRequirements.mediumLight}
                            onCheckedChange={() => handleLightRequirementsChange('mediumLight')}
                          />
                          <Label htmlFor="medium-light">Medium Light</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="bright-light"
                            checked={tempFilters.lightRequirements.brightLight}
                            onCheckedChange={() => handleLightRequirementsChange('brightLight')}
                          />
                          <Label htmlFor="bright-light">Bright Light</Label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium font-heading">Care Level</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="beginner"
                            checked={tempFilters.careLevel.beginner}
                            onCheckedChange={() => handleCareLevelChange('beginner')}
                          />
                          <Label htmlFor="beginner">Beginner Friendly</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="intermediate"
                            checked={tempFilters.careLevel.intermediate}
                            onCheckedChange={() => handleCareLevelChange('intermediate')}
                          />
                          <Label htmlFor="intermediate">Intermediate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="expert"
                            checked={tempFilters.careLevel.expert}
                            onCheckedChange={() => handleCareLevelChange('expert')}
                          />
                          <Label htmlFor="expert">Expert</Label>
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
                Showing {sortedPlants.length} results
                {filtersApplied && " with filters"}
              </span>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedPlants.map((plant) => (
              <Link href={`/plant/${plant.id}`} key={plant.id} className="group">
                <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                  <div className="relative aspect-square">
                    <Image
                      src={plant.image || "/placeholder.svg"}
                      alt={plant.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading">{plant.name}</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-semibold text-green-600">€{plant.price.toFixed(2)}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm text-muted-foreground">{plant.rating}</span>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">{plant.lightLevel}</div>
                  </div>
                </div>
              </Link>
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
