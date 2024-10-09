"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const products = [
  { id: 1, name: "Elegant Watch", price: 199.99, image: "https://source.unsplash.com/random/400x300?watch" },
  { id: 2, name: "Designer Sunglasses", price: 129.99, image: "https://source.unsplash.com/random/400x300?sunglasses" },
  { id: 3, name: "Leather Handbag", price: 249.99, image: "https://source.unsplash.com/random/400x300?handbag" },
  { id: 4, name: "Wireless Earbuds", price: 159.99, image: "https://source.unsplash.com/random/400x300?earbuds" },
];

const FeaturedProducts = () => {
  return (
    <section className="my-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Featured Products
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden group">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 w-full mb-4"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </motion.div>
                <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Add to Cart</Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;