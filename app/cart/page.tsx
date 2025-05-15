"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MinusIcon, PlusIcon, ShoppingBagIcon, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const initialCartItems = [
  {
    id: "1",
    name: "Monstera Deliciosa",
    price: 59.99,
    image: "/images/monstera.png",
    seller: "GreenThumb Kate",
    quantity: 1,
  },
  {
    id: "2",
    name: "Fiddle Leaf Fig",
    price: 65.0,
    image:
      "https://images.unsplash.com/photo-1643819131782-474a409da244?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "PlantLover Tom",
    quantity: 1,
  },
  {
    id: "3",
    name: "Snake Plant",
    price: 29.99,
    image: "/images/snake-plant.png",
    seller: "Urban Jungle Maria",
    quantity: 2,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const { toast } = useToast();

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));

    toast({
      title: "Item removed",
      description: "The item has been removed from the cart",
      duration: 3000,
    });
  };

  const clearCart = () => {
    setCartItems([]);

    toast({
      title: "Emptied cart",
      description: "All items have been removed from the cart",
      duration: 3000,
    });
  };

  const [shippingType, setShippingType] = useState<"standard" | "express">(
    "standard"
  );
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping =
    subtotal > 0 ? (shippingType === "express" ? 12.99 : 7.99) : 0;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8 font-roc">Your cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <ShoppingBagIcon className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2 font-roc">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            It looks like you have not added a plant to your cart yet.
          </p>
          <Button asChild className="bg-green-700 hover:bg-green-800">
            <Link href="/marketplace">See marketplace</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold font-roc">
                    Items in the cart (
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                  </h2>
                  <Button
                    variant="ghost"
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-800 hover:bg-red-50"
                  >
                    Empty cart
                  </Button>
                </div>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <div className="flex-shrink-0 w-full sm:w-24 h-24 relative rounded-md overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium text-lg">{item.name}</h3>
                            <p className="text-gray-500 text-sm">
                              Sold by: {item.seller}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-lg">
                              {(item.price * item.quantity).toFixed(2)} €
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
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
              <h2 className="text-xl font-bold mb-4 font-roc">
                Delivery options
              </h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="standard"
                    name="shipping"
                    className="h-4 w-4 text-green-700 focus:ring-green-700"
                    checked={shippingType === "standard"}
                    onChange={() => setShippingType("standard")}
                  />
                  <label htmlFor="standard" className="ml-2 block">
                    <span className="font-medium">Standard delivery</span>
                    <span className="block text-sm text-gray-500">
                      3-5 working days
                    </span>
                  </label>
                  <span className="ml-auto font-medium">7,99 €</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="express"
                    name="shipping"
                    className="h-4 w-4 text-green-700 focus:ring-green-700"
                    checked={shippingType === "express"}
                    onChange={() => setShippingType("express")}
                  />
                  <label htmlFor="express" className="ml-2 block">
                    <span className="font-medium">Express delivery</span>
                    <span className="block text-sm text-gray-500">
                      1-2 working days
                    </span>
                  </label>
                  <span className="ml-auto font-medium">12,99 €</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4 font-roc">Order wrap-up</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span>{shipping.toFixed(2)} €</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>

              <Button className="w-full bg-green-700 hover:bg-green-800 mb-4">
                Proceed with checkout
              </Button>

              <div className="text-center">
                <Link
                  href="/marketplace"
                  className="text-green-700 hover:text-green-800 text-sm font-medium"
                >
                  Continue shopping
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-2">We accept</h3>
                <div className="flex gap-2">
                  <Image
                    src="/images/visa.png"
                    alt="Visa"
                    width={48}
                    height={32}
                    className="rounded bg-white"
                  />
                  <Image
                    src="/images/mastercard.png"
                    alt="Mastercad"
                    width={48}
                    height={32}
                    className="rounded bg-white"
                  />
                  <Image
                    src="/images/paypal.png"
                    alt="Paypal"
                    width={48}
                    height={32}
                    className="rounded bg-white"
                  />
                  <Image
                    src="/images/shrek-logo-brand-a.jpg"
                    alt="Shrek"
                    width={48}
                    height={32}
                    className="rounded bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
