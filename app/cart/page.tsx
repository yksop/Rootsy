"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MinusIcon, PlusIcon, ShoppingBagIcon, TrashIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

// Dati fittizi per il carrello
const initialCartItems = [
  {
    id: "1",
    name: "Monstera Deliciosa (Usata)",
    price: 39.99,
    originalPrice: 59.99,
    image: "/images/monstera.png",
    seller: "GreenThumb Kate",
    quantity: 1,
  },
  {
    id: "2",
    name: "Fiddle Leaf Fig (Usata)",
    price: 45.5,
    originalPrice: 65.0,
    image: "/images/fiddle-leaf.png",
    seller: "PlantLover Tom",
    quantity: 1,
  },
  {
    id: "3",
    name: "Snake Plant (Usata)",
    price: 22.99,
    originalPrice: 29.99,
    image: "/images/snake-plant.png",
    seller: "Urban Jungle Maria",
    quantity: 2,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const { toast } = useToast()

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))

    toast({
      title: "Articolo rimosso",
      description: "L'articolo è stato rimosso dal carrello",
      duration: 3000,
    })
  }

  const clearCart = () => {
    setCartItems([])

    toast({
      title: "Carrello svuotato",
      description: "Tutti gli articoli sono stati rimossi dal carrello",
      duration: 3000,
    })
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 7.99 : 0
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8 font-roc">Il tuo carrello</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <ShoppingBagIcon className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2 font-roc">Il tuo carrello è vuoto</h2>
          <p className="text-gray-500 mb-6">Sembra che tu non abbia ancora aggiunto nessuna pianta al carrello.</p>
          <Button asChild className="bg-green-700 hover:bg-green-800">
            <Link href="/marketplace">Sfoglia il marketplace</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold font-roc">
                    Articoli nel carrello ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                  </h2>
                  <Button
                    variant="ghost"
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-800 hover:bg-red-50"
                  >
                    Svuota carrello
                  </Button>
                </div>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0 w-full sm:w-24 h-24 relative rounded-md overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium text-lg">{item.name}</h3>
                            <p className="text-gray-500 text-sm">Venduto da: {item.seller}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-lg">{(item.price * item.quantity).toFixed(2)} €</div>
                            {item.originalPrice && (
                              <div className="text-gray-500 line-through text-sm">
                                {(item.originalPrice * item.quantity).toFixed(2)} €
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <MinusIcon className="h-4 w-4" />
                              <span className="sr-only">Diminuisci quantità</span>
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <PlusIcon className="h-4 w-4" />
                              <span className="sr-only">Aumenta quantità</span>
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-800 hover:bg-red-50"
                          >
                            <TrashIcon className="h-4 w-4 mr-1" />
                            Rimuovi
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 font-roc">Metodi di spedizione</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="standard"
                    name="shipping"
                    className="h-4 w-4 text-green-700 focus:ring-green-700"
                    defaultChecked
                  />
                  <label htmlFor="standard" className="ml-2 block">
                    <span className="font-medium">Spedizione standard</span>
                    <span className="block text-sm text-gray-500">3-5 giorni lavorativi</span>
                  </label>
                  <span className="ml-auto font-medium">7,99 €</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="express"
                    name="shipping"
                    className="h-4 w-4 text-green-700 focus:ring-green-700"
                  />
                  <label htmlFor="express" className="ml-2 block">
                    <span className="font-medium">Spedizione express</span>
                    <span className="block text-sm text-gray-500">1-2 giorni lavorativi</span>
                  </label>
                  <span className="ml-auto font-medium">12,99 €</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4 font-roc">Riepilogo ordine</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotale</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Spedizione</span>
                  <span>{shipping.toFixed(2)} €</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Totale</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>

              <Button className="w-full bg-green-700 hover:bg-green-800 mb-4">Procedi al checkout</Button>

              <div className="text-center">
                <Link href="/marketplace" className="text-green-700 hover:text-green-800 text-sm font-medium">
                  Continua lo shopping
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-2">Accettiamo</h3>
                <div className="flex gap-2">
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
