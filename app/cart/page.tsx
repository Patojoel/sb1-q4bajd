"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  // This is a placeholder for cart items. In a real application, this would be managed by a state management solution like Redux or React Context.
  const cartItems = [
    { id: 1, name: "Elegant Watch", price: 199.99, quantity: 1 },
    { id: 2, name: "Designer Sunglasses", price: 129.99, quantity: 2 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Your Cart
      </motion.h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Cart Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}