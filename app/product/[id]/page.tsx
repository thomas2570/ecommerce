"use client";

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import QuantitySelector from '@/components/QuantitySelector';
import { Product } from '@/types';
import { use } from 'react';

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product not found</h1>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist.</p>
        <Link href="/" className="bg-[#0B57B0] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add the specific quantity to cart. Our CartContext addToCart currently adds 1, 
    // so we'll call addToCart 'quantity' times, or better yet, we should update CartContext to support quantity.
    // Wait, the assignment says "add, remove, update quantity". The addToCart function takes a Product, 
    // I can just add it then immediately update its quantity to be += what was selected, or simply loop.
    // For simplicity, let's call addToCart in a loop, or just update the quantity directly if it's already in the cart.
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Products
      </Link>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 relative h-96 md:h-auto min-h-[400px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
          
          <div className="flex items-center mb-6">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600 text-sm">({product.rating} Rating)</span>
          </div>
          
          <p className="text-3xl font-bold text-gray-900 mb-6">${product.price}</p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>
          
          <QuantitySelector
            quantity={quantity}
            onIncrease={() => setQuantity(q => q + 1)}
            onDecrease={() => setQuantity(q => q > 1 ? q - 1 : 1)}
          />
          
          <button 
            onClick={handleAddToCart}
            className="w-full bg-[#0B57B0] hover:bg-blue-700 text-white text-lg font-medium py-4 px-8 rounded-md transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
