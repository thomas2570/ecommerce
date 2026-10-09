"use client";

import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';
import { Suspense } from 'react';
import SearchBar from './SearchBar';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { totalItems, isMounted } = useCart();

  return (
    <header className="bg-[#0B57B0] text-white py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex-shrink-0">
          Logo
        </Link>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 max-w-2xl mx-4">
          <Suspense fallback={<div className="h-9 w-full bg-[#0A4A96] rounded-md opacity-50" />}>
            <SearchBar />
          </Suspense>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <Link
            href="/cart"
            className="flex items-center space-x-2 bg-[#0A2A5E] hover:bg-blue-900 px-4 py-2 rounded-md transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline font-medium">Cart</span>
            <span className="bg-white text-[#0A2A5E] text-xs font-bold px-2 py-0.5 rounded-full">
              {isMounted ? totalItems : 0}
            </span>
          </Link>
          <button className="p-2 hover:bg-[#0A4A96] rounded-full transition-colors">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
