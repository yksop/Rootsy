"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Leaf, User, Settings, ShoppingBag, Heart, LogOut, Mail, Phone, MapPin, Edit } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/contexts/auth-context"
import ProtectedRoute from "@/components/protected-route"

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  if (!user) {
    return null // Questo non dovrebbe mai accadere grazie a ProtectedRoute, ma è una buona pratica
  }

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-heading">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-xl">Rootsy</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/marketplace" className="text-sm font-medium hover:text-green-600 transition-colors">
                Marketplace
              </Link>
              <Link href="/plantsitting" className="text-sm font-medium hover:text-green-600 transition-colors">
                Plant Sitting
              </Link>
              <Link href="/community" className="text-sm font-medium hover:text-green-600 transition-colors">
                Community
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-green-600 transition-colors">
                About
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] font-medium text-white">
                    {user.orders}
                  </span>
                </Button>
              </Link>
              <div className="relative">
                <Button variant="ghost" size="icon" className="relative">
                  <User className="h-5 w-5" />
                </Button>
              </div>
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

        <main className="flex-1 container py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <Card>
                <CardHeader className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      fill
                      className="rounded-full object-cover"
                    />
                    <button className="absolute bottom-0 right-0 bg-green-600 text-white p-1 rounded-full">
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>Member since {user.joinedDate}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-around text-center mb-6">
                    <div>
                      <p className="text-2xl font-bold">{user.plants}</p>
                      <p className="text-xs text-muted-foreground">Plants</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{user.favorites}</p>
                      <p className="text-xs text-muted-foreground">Favorites</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{user.orders}</p>
                      <p className="text-xs text-muted-foreground">Orders</p>
                    </div>
                  </div>

                  <nav className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Orders
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Heart className="mr-2 h-4 w-4" />
                      Favorites
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={logout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="w-full md:w-3/4">
              <Tabs defaultValue="profile">
                <TabsList className="mb-6">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="plants">My Plants</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Manage your personal details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Contact Information</h3>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{user.email}</span>
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>+1 (555) 123-4567</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-2">Address</h3>
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                            <div>
                              <p>123 Plant Street</p>
                              <p>Apt 4B</p>
                              <p>New York, NY 10001</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium mb-2">Bio</h3>
                        <p className="text-muted-foreground">
                          Plant enthusiast with a passion for tropical houseplants. I have a growing collection of
                          Monsteras, Philodendrons, and Pothos. Always looking to expand my plant family!
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium mb-2">Preferences</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center justify-between border p-3 rounded-md">
                            <span>Email Notifications</span>
                            <span className="text-green-600">Enabled</span>
                          </div>
                          <div className="flex items-center justify-between border p-3 rounded-md">
                            <span>SMS Notifications</span>
                            <span className="text-red-500">Disabled</span>
                          </div>
                          <div className="flex items-center justify-between border p-3 rounded-md">
                            <span>Newsletter</span>
                            <span className="text-green-600">Subscribed</span>
                          </div>
                          <div className="flex items-center justify-between border p-3 rounded-md">
                            <span>Two-Factor Authentication</span>
                            <span className="text-red-500">Disabled</span>
                          </div>
                        </div>
                      </div>

                      <Button className="bg-green-600 hover:bg-green-700">Edit Profile</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="plants">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Plants</CardTitle>
                      <CardDescription>Manage your plant collection</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="border rounded-lg overflow-hidden">
                            <div className="relative aspect-square">
                              <Image
                                src={`https://images.unsplash.com/photo-161${i + 1000000}?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3`}
                                alt={`Plant ${i}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium">Plant Name {i}</h3>
                              <p className="text-sm text-muted-foreground">Added: Jan {i + 10}, 2025</p>
                              <div className="flex justify-between items-center mt-2">
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                  Healthy
                                </span>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 text-center">
                        <Button className="bg-green-600 hover:bg-green-700">Add New Plant</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="orders">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                      <CardDescription>View your past orders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="font-medium">Order #{1000 + i}</h3>
                                <p className="text-sm text-muted-foreground">Placed on March {i * 5}, 2025</p>
                              </div>
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${
                                  i === 1
                                    ? "bg-blue-100 text-blue-800"
                                    : i === 2
                                      ? "bg-green-100 text-green-800"
                                      : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {i === 1 ? "Shipped" : i === 2 ? "Delivered" : "Processing"}
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="relative w-16 h-16 rounded overflow-hidden">
                                <Image
                                  src={`https://images.unsplash.com/photo-161${i + 2000000}?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3`}
                                  alt={`Order ${i}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium">Plant Package #{i}</h4>
                                <p className="text-sm text-muted-foreground">{i + 1} items</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">${(19.99 * (i + 1)).toFixed(2)}</p>
                                <Button variant="link" className="h-auto p-0 text-green-600">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="favorites">
                  <Card>
                    <CardHeader>
                      <CardTitle>Favorites</CardTitle>
                      <CardDescription>Plants and items you've saved</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="border rounded-lg overflow-hidden group relative">
                            <div className="absolute top-2 right-2 z-10">
                              <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white rounded-full">
                                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                              </Button>
                            </div>
                            <div className="relative aspect-square">
                              <Image
                                src={`https://images.unsplash.com/photo-161${i + 3000000}?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3`}
                                alt={`Favorite ${i}`}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium">Favorite Plant {i}</h3>
                              <div className="flex justify-between items-center mt-1">
                                <span className="font-semibold text-green-600">${(19.99 + i * 5).toFixed(2)}</span>
                                <Button variant="ghost" size="sm" className="h-auto p-0 text-green-600">
                                  Add to Cart
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>

        <footer className="border-t bg-background">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="font-heading">Rootsy</span>
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
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ProtectedRoute>
  )
}
