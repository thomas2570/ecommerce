"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '@/context/CartContext';

interface SmartphoneCardProps {
  product: Product;
}

export default function SmartphoneCard({ product }: SmartphoneCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row col-span-1 sm:col-span-2 lg:col-span-2 h-full hover:shadow-md transition-shadow duration-200 p-6 gap-6">
      <Link href={`/product/${product.id}`} className="block relative w-full md:w-1/2 h-64 md:h-auto min-h-[250px] cursor-pointer shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Link>
      
      <div className="flex flex-col flex-1 justify-center">
        <Link href={`/product/${product.id}`} className="block mb-2">
          <h3 className="font-bold text-2xl text-gray-900 hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="font-bold text-2xl text-gray-900 mb-2">${product.price}</p>
        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(product.rating)
                  ? 'text-[#0B57B0] fill-[#0B57B0]'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">Category</p>
          <p className="text-sm font-medium text-gray-900">{product.category}</p>
        </div>
        
        <div className="mt-auto">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-[#0B57B0] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
