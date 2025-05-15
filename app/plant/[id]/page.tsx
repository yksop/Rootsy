import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Leaf, ShoppingCart, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default async function PlantDetailPage({ params }: { params: { id: string } }) {
  // Dati fittizi dei venditori
  const sellerData = {
    1: {
      id: "seller1",
      name: "Marco Rossi",
      location: "Milano, Italia",
      rating: 4.8,
      reviews: 42,
      memberSince: "Marzo 2023",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3",
      description:
        "Passionate about indoor plants with a collection of over 50 specimens. I only sell plants in excellent condition that I have personally cared for.",
    },
    2: {
      id: "seller2",
      name: "Giulia Bianchi",
      location: "Roma, Italia",
      rating: 4.9,
      reviews: 67,
      memberSince: "Gennaio 2022",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3",
      description:
        "Botanist by profession with a passion for tropical plants. Each plant is sold with detailed care instructions.",
    },
    3: {
      id: "seller3",
      name: "Luca Verdi",
      location: "Firenze, Italia",
      rating: 4.7,
      reviews: 31,
      memberSince: "Giugno 2023",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3",
      description:
        "Collector of rare plants. I like to trade and sell plants to make room for new acquisitions.",
    },
    4: {
      id: "seller4",
      name: "Sofia Esposito",
      location: "Napoli, Italia",
      rating: 4.6,
      reviews: 28,
      memberSince: "Settembre 2022",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Plant lover with a small home nursery. I sell plants that I have propagated myself.",
    },
  }

  // Get plant data based on ID
  const plantData = {
    1: {
      name: "Monstera Deliciosa",
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      price: 29.99,
      rating: 4.9,
      reviews: 128,
      description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its quirky natural leaf holes. These tropical plants are easy to care for and can add a jungle feel to your home.",
      longDescription: "Native to the tropical forests of southern Mexico and Panama, the Monstera Deliciosa is a climbing evergreen that can reach heights of 20 meters in its natural habitat. The distinctive holes in its leaves are a natural adaptation that allows wind to pass through, preventing the plant from being uprooted during storms.",
    },
    2: {
      name: "Snake Plant",
      image: "https://plus.unsplash.com/premium_photo-1673969608395-9281e5e4395f?q=80&w=2616&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 24.99,
      rating: 4.7,
      reviews: 96,
      description: "The Snake Plant, or Sansevieria, is one of the most low-maintenance plants you can grow. With its striking upright leaves and ability to purify air, it's perfect for beginners.",
      longDescription: "Native to West Africa, the Snake Plant is known for its hardiness and ability to survive in a wide range of conditions. It's one of the few plants that convert CO2 to oxygen at night, making it an excellent bedroom plant.",
    },
    3: {
      name: "Fiddle Leaf Fig",
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmlkZGxlJTIwTGVhZiUyMEZpZ3xlbnwwfHwwfHx8MA%3D%3D",
      price: 34.99,
      rating: 4.6,
      reviews: 112,
      description: "The Fiddle Leaf Fig is known for its large, violin-shaped leaves that create a dramatic statement in any space. It's a popular choice for modern interiors.",
      longDescription: "Native to western Africa, the Fiddle Leaf Fig grows in lowland tropical rainforests. In its natural habitat, it can reach heights of up to 40 feet. As a houseplant, it typically grows to 6-10 feet tall with proper care.",
    },
    4: {
      name: "Pothos",
      image: "https://plus.unsplash.com/premium_photo-1673969608398-18921179fa7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG90aG9zfGVufDB8fDB8fHww",
      price: 19.99,
      rating: 4.9,
      reviews: 145,
      description: "Pothos is a versatile trailing plant with heart-shaped leaves that can brighten up any space. It's incredibly easy to care for and can thrive in a variety of conditions.",
      longDescription: "Native to the Solomon Islands, Pothos is a popular houseplant known for its air-purifying qualities and ability to grow in low light. Its trailing vines can grow up to 10 feet long indoors, making it perfect for hanging baskets or climbing up trellises.",
    },
    5: {
      name: "ZZ Plant",
      image: "https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WlolMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D",
      price: 22.99,
      rating: 4.8,
      reviews: 89,
      description: "The ZZ Plant is renowned for its ability to tolerate neglect and low light, making it perfect for beginners or busy plant parents.",
      longDescription: "Native to Eastern Africa, the ZZ Plant (Zamioculcas zamiifolia) has become popular due to its attractive, glossy foliage and extreme durability. It stores water in its rhizomes, allowing it to survive extended periods without water.",
    },
    6: {
      name: "Calathea",
      image: "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      price: 27.99,
      rating: 4.5,
      reviews: 72,
      description: "Calathea plants are known for their stunning, patterned leaves and dramatic nighttime leaf movements, earning them the nickname 'prayer plant'.",
      longDescription: "Native to the tropical Americas, Calathea plants are prized for their decorative leaves with intricate patterns and purple undersides. They're known for their nyctinastic movements - their leaves fold up at night and open during the day.",
    },
    7: {
      name: "Aloe Vera",
      image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWxvZSUyMHZlcmF8ZW58MHx8MHx8fDA%3D",
      price: 18.99,
      rating: 4.7,
      reviews: 103,
      description: "Aloe Vera is a popular succulent plant known for its medicinal properties and striking architectural form with thick, serrated leaves.",
      longDescription: "Native to the Arabian Peninsula but grown worldwide, Aloe Vera is prized for the clear gel inside its leaves that has been used for centuries for skin conditions and minor burns. As a houseplant, it's valued for its distinctive appearance and low maintenance needs.",
    },
    8: {
      name: "Peace Lily",
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      price: 25.99,
      rating: 4.6,
      reviews: 118,
      description: "The Peace Lily is an elegant houseplant with glossy green leaves and distinctive white flowers, known for its air-purifying qualities and ability to thrive in low light.",
      longDescription: "Native to tropical rainforests of the Americas, the Peace Lily is valued for its striking white 'flowers' (actually modified leaves called spathes) and its ability to remove common household toxins from the air. It's one of the most popular houseplants due to its beauty and relatively easy care.",
    },
    9: {
      name: "Rubber Plant",
      image: "https://images.unsplash.com/photo-1669392597221-bbfd4b6e13ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      price: 32.99,
      rating: 4.7,
      reviews: 85,
      description: "The Rubber Plant features large, glossy leaves with a rich burgundy to dark green color, making it a striking addition to any space.",
      longDescription: "Native to Southeast Asia, the Rubber Plant (Ficus elastica) gets its name from its milky sap once used to produce rubber. As a houseplant, it's prized for its large, dramatic foliage and architectural form that can grow into an impressive indoor tree with proper care.",
    },
    10: {
      name: "String of Pearls",
      image: "https://images.unsplash.com/photo-1648070024741-43f8fa965966?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      price: 21.99,
      rating: 4.5,
      reviews: 63,
      description: "String of Pearls features unique bead-like leaves that cascade down from hanging planters, creating a stunning living necklace effect.",
      longDescription: "Native to southwest Africa, String of Pearls (Senecio rowleyanus) is a striking succulent vine with unusual spherical leaves evolved to minimize water loss and maximize light absorption. As a houseplant, it's treasured for its distinctive trailing appearance that adds visual interest to shelves and hanging planters.",
    },
    11: {
      name: "Bird of Paradise",
      image: "https://plus.unsplash.com/premium_photo-1674473872726-f59a276c4287?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmlyZCUyMG9mJTIwcGFyYWRpc2V8ZW58MHx8MHx8fDA%3D",
      price: 39.99,
      rating: 4.6,
      reviews: 94,
      description: "The Bird of Paradise plant features dramatic paddle-shaped leaves that create a striking tropical statement in any space.",
      longDescription: "Native to South Africa, the Bird of Paradise (Strelitzia nicolai) is named for its unusual flowers that resemble exotic birds. As a houseplant, it's primarily grown for its impressive, banana-like foliage that adds a bold tropical element to interiors. With proper care and sufficient light, mature plants may produce the iconic bird-shaped flowers.",
    },
    12: {
      name: "Chinese Money Plant",
      image: "https://images.unsplash.com/photo-1714674119508-6676b71d3bf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      price: 23.99,
      rating: 4.8,
      reviews: 108,
      description: "The Chinese Money Plant features distinctive round, coin-shaped leaves on arching stems, creating an elegant and playful appearance.",
      longDescription: "Native to southern China, the Chinese Money Plant (Pilea peperomioides) has become incredibly popular in recent years for its quirky, coin-like leaves and easy care. According to feng shui tradition, it's believed to bring good fortune and prosperity to its owner, hence its common name.",
    },
  }[parseInt(params.id)] || {
    name: "Monstera Deliciosa",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 29.99,
    rating: 4.9,
    reviews: 128,
    description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its quirky natural leaf holes. These tropical plants are easy to care for and can add a jungle feel to your home.",
    longDescription: "Native to the tropical forests of southern Mexico and Panama, the Monstera Deliciosa is a climbing evergreen that can reach heights of 20 meters in its natural habitat. The distinctive holes in its leaves are a natural adaptation that allows wind to pass through, preventing the plant from being uprooted during storms.",
  }

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
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
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
        <div className="container py-8">
          <div className="mb-6">
            <Link
              href="/marketplace"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Marketplace
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={plantData.image || "/placeholder.svg"}
                  alt={plantData.name}
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="overflow-hidden rounded-md border cursor-pointer hover:border-green-600">
                    <Image
                      src={plantData.image || "/placeholder.svg"}
                      alt={`${plantData.name} view ${i}`}
                      width={150}
                      height={150}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-100">Top vendor</Badge>
                <h1 className="text-3xl font-heading">
                  {plantData.name} <span className="text-lg text-muted-foreground">(Used)</span>
                </h1>
                <p className="text-sm text-muted-foreground">
                  Used plant - Available for on place pickup or shipping
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-heading text-green-600">€{(plantData.price)}</div>
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <div className="flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Leaf className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Healthy plant guaranteed</p>
                    <p className="text-xs text-muted-foreground">30-day plant health guarantee</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Truck className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Free shipping on orders over €50</p>
                    <p className="text-xs text-muted-foreground">Delivered in eco-friendly packaging</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-2 text-sm font-medium">Condition</p>
                <div className="flex gap-2">
                  <Badge className="px-3 py-1 bg-green-100 text-green-800 hover:bg-green-100">
                    Used - Good shape
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Age: ~1 year
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  This plant has been cared for in a home environment with indirect light. It is in excellent condition and has produced new leaves in the last few months.
                </p>
              </div>

              <div className="mb-6 p-4 border rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={sellerData[1]?.avatar || "/placeholder.svg"}
                      alt={sellerData[1]?.name || "Venditore"}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-lg">{sellerData[1]?.name || "Venditore"}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm">
                          {sellerData[1]?.rating} ({sellerData[1]?.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {sellerData[1]?.location} • Member from {sellerData[1]?.memberSince}
                    </p>
                    <p className="mt-2 text-sm">{sellerData[1]?.description}</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Chat with the seller
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to Wishlist</span>
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="description" className="mb-12">
            <TabsList className="w-full grid grid-cols-3 mb-8">
              <TabsTrigger value="description" className="font-heading">
                Description
              </TabsTrigger>
              <TabsTrigger value="care" className="font-heading">
                Care guide
              </TabsTrigger>
              <TabsTrigger value="sale-details" className="font-heading">
                Selling details
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <h2 className="text-2xl font-heading">About {plantData.name}</h2>
              <p>{plantData.description}</p>
              <p>{plantData.longDescription}</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="rounded-lg border p-4">
                  <h3 className="font-heading mb-2">Plant Details</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Botanical Name</span>
                      <span>{plantData.name}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Also Known As</span>
                      <span>
                        {plantData.name === "Monstera Deliciosa"
                          ? "Swiss Cheese Plant"
                          : plantData.name === "Snake Plant"
                            ? "Sansevieria"
                            : plantData.name === "Fiddle Leaf Fig"
                              ? "Ficus Lyrata"
                              : "Devil's Ivy"}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Origin</span>
                      <span>
                        {plantData.name === "Monstera Deliciosa"
                          ? "Southern Mexico, Panama"
                          : plantData.name === "Snake Plant"
                            ? "West Africa"
                            : plantData.name === "Fiddle Leaf Fig"
                              ? "Western Africa"
                              : "Solomon Islands"}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Plant Type</span>
                      <span>
                        {plantData.name === "Monstera Deliciosa"
                          ? "Tropical Evergreen"
                          : plantData.name === "Snake Plant"
                            ? "Succulent"
                            : plantData.name === "Fiddle Leaf Fig"
                              ? "Tropical Tree"
                              : "Trailing Vine"}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-heading mb-2">Growth</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Mature Height</span>
                      <span>
                        {plantData.name === "Monstera Deliciosa"
                          ? "3-10 feet (indoors)"
                          : plantData.name === "Snake Plant"
                            ? "1-4 feet"
                            : plantData.name === "Fiddle Leaf Fig"
                              ? "6-10 feet"
                              : "Trailing up to 10 feet"}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Growth Rate</span>
                      <span>
                        {plantData.name === "Monstera Deliciosa"
                          ? "Moderate to Fast"
                          : plantData.name === "Snake Plant"
                            ? "Slow"
                            : plantData.name === "Fiddle Leaf Fig"
                              ? "Moderate"
                              : "Fast"}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Leaf Size</span>
                      <span>
                        {plantData.name === "Monstera Deliciosa"
                          ? "Up to 18 inches"
                          : plantData.name === "Snake Plant"
                            ? "Up to 3 feet tall"
                            : plantData.name === "Fiddle Leaf Fig"
                              ? "Up to 12 inches"
                              : "2-4 inches"}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Toxicity</span>
                      <span>{plantData.name === "Snake Plant" ? "Mildly toxic to pets" : "Toxic to pets"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="care" className="space-y-4">
              <h2 className="text-2xl font-heading">Care Instructions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
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
                      <path d="M12 3v18" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2">Light</h3>
                  <p className="text-sm text-muted-foreground">
                    {plantData.name === "Monstera Deliciosa"
                      ? "Bright, indirect light is ideal. Can tolerate some direct morning sun, but avoid harsh afternoon sun which can burn the leaves."
                      : plantData.name === "Snake Plant"
                        ? "Adaptable to various light conditions, from low light to bright indirect light. Avoid direct sunlight which can scorch the leaves."
                        : plantData.name === "Fiddle Leaf Fig"
                          ? "Bright, indirect light is essential. Place near a window with filtered light. Rotate occasionally for even growth."
                          : "Adaptable to various light conditions, from low to bright indirect light. Variegated varieties need more light to maintain their patterns."}
                  </p>
                </div>
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
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
                      <path d="M12 22V2" />
                      <path d="M5 12H2" />
                      <path d="M22 12h-3" />
                      <path d="M15 12h-3" />
                      <path d="M9 12H6" />
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2">Water</h3>
                  <p className="text-sm text-muted-foreground">
                    {plantData.name === "Monstera Deliciosa"
                      ? "Allow the top 1-2 inches of soil to dry out between waterings. Water less in winter. Monsteras are more tolerant of under-watering than over-watering."
                      : plantData.name === "Snake Plant"
                        ? "Allow soil to dry completely between waterings. Water sparingly, especially in winter. Overwatering is the most common cause of problems."
                        : plantData.name === "Fiddle Leaf Fig"
                          ? "Water when the top inch of soil is dry. Consistent watering is key - avoid extremes of drought or soggy soil. Use room temperature water."
                          : "Allow the top inch of soil to dry between waterings. Can tolerate occasional drought but will grow faster with regular watering. Yellowing leaves often indicate overwatering."}
                  </p>
                </div>
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
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
                      <path d="M2 12h20" />
                      <path d="M12 2v20" />
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2">Humidity</h3>
                  <p className="text-sm text-muted-foreground">
                    {plantData.name === "Monstera Deliciosa"
                      ? "Enjoys higher humidity levels of 60% or more. Regular misting or a humidifier can help, especially in dry environments."
                      : plantData.name === "Snake Plant"
                        ? "Tolerates dry air and doesn't require additional humidity. One of the few plants that thrives in typical indoor conditions."
                        : plantData.name === "Fiddle Leaf Fig"
                          ? "Prefers moderate to high humidity (40-60%). Consider using a humidifier or pebble tray in dry environments."
                          : "Adaptable to normal household humidity but appreciates higher humidity. Misting occasionally can help, especially in dry environments."}
                  </p>
                </div>
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2">Temperature</h3>
                  <p className="text-sm text-muted-foreground">
                    {plantData.name === "Monstera Deliciosa"
                      ? "Thrives in temperatures between 65-85°F (18-30°C). Avoid cold drafts and temperatures below 60°F (15°C)."
                      : plantData.name === "Snake Plant"
                        ? "Tolerates a wide range of temperatures from 55-85°F (13-29°C). Avoid temperatures below 50°F (10°C)."
                        : plantData.name === "Fiddle Leaf Fig"
                          ? "Prefers consistent temperatures between 65-75°F (18-24°C). Avoid drafts, sudden temperature changes, and temperatures below 60°F (15°C)."
                          : "Prefers temperatures between 65-85°F (18-29°C). Can tolerate brief periods outside this range but avoid temperatures below 50°F (10°C)."}
                  </p>
                </div>
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
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
                      <path d="M3 6h18" />
                      <path d="M7 12h10" />
                      <path d="M10 18h4" />
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2">Soil</h3>
                  <p className="text-sm text-muted-foreground">
                    {plantData.name === "Monstera Deliciosa"
                      ? "Use a well-draining potting mix rich in organic matter. A mix of potting soil, perlite, and orchid bark works well."
                      : plantData.name === "Snake Plant"
                        ? "Prefers well-draining, somewhat sandy soil. A cactus or succulent mix with some regular potting soil works well."
                        : plantData.name === "Fiddle Leaf Fig"
                          ? "Use well-draining, nutrient-rich soil. A mix of high-quality potting soil with perlite for drainage is ideal."
                          : "Adapts to most well-draining potting soils. A standard indoor potting mix works well, or you can add perlite to improve drainage."}
                  </p>
                </div>
                <div className="rounded-lg border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
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
                      <path d="M16 2s-2 4-2 6c0 3 2 5 2 8 0 2-1 4-4 4-2 0-3-1-3-1" />
                      <path d="M10 10c0-2.5 1.5-6 5-6" />
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2">Fertilizer</h3>
                  <p className="text-sm text-muted-foreground">
                    {plantData.name === "Monstera Deliciosa"
                      ? "Feed monthly during the growing season (spring and summer) with a balanced liquid fertilizer diluted to half strength."
                      : plantData.name === "Snake Plant"
                        ? "Fertilize sparingly, only 2-3 times per year with a balanced houseplant fertilizer diluted to half strength."
                        : plantData.name === "Fiddle Leaf Fig"
                          ? "Feed with a nitrogen-rich fertilizer during the growing season (spring and summer) every 4-6 weeks. Reduce or eliminate feeding in fall and winter."
                          : "Feed monthly during the growing season with a balanced houseplant fertilizer. Can grow without fertilizer but will be more lush with regular feeding."}
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sale-details" className="space-y-6">
              <h2 className="text-2xl font-heading mb-6">Selling details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-heading mb-2">Plants insights</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Original purchase date</span>
                        <span>May 2024</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Motivo della vendita</span>
                        <span>Move</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Actual dimensions</span>
                        <span>High: 45 cm, Lenght: 30 cm</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Vase included</span>
                        <span>Yes, white ceraminc</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-heading mb-2">Plant history</h3>
                    <p className="text-sm">
                      This {plantData.name} was purchased from a local nursery about a year ago. It has been growing in
                      bright indirect light near an east-facing window. It has produced 3 new leaves
                      in the last few months and has never had any pest or disease problems.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-heading mb-2">Shipping details</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Delivery method</span>
                        <span>Pick up in person or ship</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Pick up location</span>
                        <span>{sellerData[1]?.location}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Costo spedizione</span>
                        <span>€12,99 (Italy)</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Preparation time</span>
                        <span>1-2 working days</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-heading mb-2">Seller policies</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Returns</span>
                        <span>Not accepted</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Warranty</span>
                        <span>7 days for shipping damages</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div>
            <h2 className="text-2xl font-heading mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link href="/plant/1" className={`group ${params.id === "1" ? "hidden" : ""}`}>
                <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                  <div className="relative aspect-square">
                    <Image
                      src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                      alt="Monstera Deliciosa"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading">Monstera Deliciosa</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-semibold text-green-600">€29.99</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm text-muted-foreground">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/plant/2" className={`group ${params.id === "2" ? "hidden" : ""}`}>
                <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                  <div className="relative aspect-square">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1673969608395-9281e5e4395f?q=80&w=2616&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Snake Plant"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading">Snake Plant</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-semibold text-green-600">€24.99</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm text-muted-foreground">4.7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/plant/3" className={`group ${params.id === "3" ? "hidden" : ""}`}>
                <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                  <div className="relative aspect-square">
                    <Image
                      src="https://images.unsplash.com/photo-1545239705-1564e58b9e4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmlkZGxlJTIwTGVhZiUyMEZpZ3xlbnwwfHwwfHx8MA%3D%3D"
                      alt="Fiddle Leaf Fig"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading">Fiddle Leaf Fig</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-semibold text-green-600">€34.99</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm text-muted-foreground">4.6</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/plant/4" className={`group ${params.id === "4" ? "hidden" : ""}`}>
                <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                  <div className="relative aspect-square">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1673969608398-18921179fa7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG90aG9zfGVufDB8fDB8fHww"
                      alt="Pothos"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading">Pothos</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-semibold text-green-600">€19.99</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm text-muted-foreground">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/plant/5" className={`group ${params.id === "5" ? "hidden" : ""}`}>
                <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                  <div className="relative aspect-square">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WlolMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="ZZ Plant"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading">ZZ Plant</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-semibold text-green-600">€22.99</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm text-muted-foreground">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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
