"use client";

import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/CartItem';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice, isMounted } = useCart();

  if (!isMounted) {
    return null; // Avoid hydration mismatch
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-blue-100 mb-6">
          <ShoppingBag className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
        <Link href="/" className="inline-flex items-center bg-[#0B57B0] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
      <h1 className="text-3xl font-bold text-[#0A2A5E] mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-4 mb-4">
              Cart Items ({cart.length})
            </h2>
            <div className="divide-y divide-gray-200 -mt-6">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-4 mb-4">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg text-gray-900">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full bg-[#0B57B0] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
              Proceed to Checkout
            </button>
            
            <div className="mt-4 text-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                or Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
