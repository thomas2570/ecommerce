import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#0B57B0] text-white py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex-shrink-0">
          Logo
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-blue-200" />
            </div>
            <input
              type="text"
              placeholder="Search for products..."
              className="block w-full pl-10 pr-3 py-2 border border-blue-400 rounded-md leading-5 bg-[#0A4A96] text-white placeholder-blue-200 focus:outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 sm:text-sm transition-colors duration-200"
            />
          </div>
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
              0
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
