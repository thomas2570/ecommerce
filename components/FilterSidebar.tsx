"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Home'];

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentCategory = searchParams.get('category') || 'All';
  const currentPrice = searchParams.get('price') || '1000';
  
  const [price, setPrice] = useState(currentPrice);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Sync state with URL if it changes externally
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrice(searchParams.get('price') || '1000');
  }, [searchParams]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === 'All' && name === 'category') {
        params.delete('category');
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleCategoryChange = (category: string) => {
    router.replace(`/?${createQueryString('category', category)}`);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handlePriceCommit = () => {
    router.replace(`/?${createQueryString('price', price)}`);
  };

  return (
    <div className="w-full md:w-64 flex-shrink-0 flex flex-col gap-6">
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden w-full bg-[#0B57B0] text-white p-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
        </svg>
        {isMobileOpen ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* Filter Content */}
      <div className={`flex-col gap-6 ${isMobileOpen ? 'flex' : 'hidden'} md:flex`}>
      {/* Original Blue Filter Box */}
      <div className="bg-[#0B57B0] text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6">Filters</h2>

        <div className="mb-8">
          <h3 className="font-semibold mb-3">Category</h3>
          <div className="space-y-2">
            {CATEGORIES.map((category) => (
              <label key={category} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={currentCategory.toLowerCase() === category.toLowerCase()}
                  onChange={() => handleCategoryChange(category)}
                  className="form-radio text-blue-500 focus:ring-blue-500 h-4 w-4"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Price</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={price}
            onChange={handlePriceChange}
            onMouseUp={handlePriceCommit}
            onTouchEnd={handlePriceCommit}
            className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer accent-white"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>0</span>
            <span>{price}</span>
          </div>
        </div>
      </div>

      {/* Category White Filter Box (Added as requested) */}
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-6">Category</h2>

        <div className="mb-8">
          <div className="space-y-2">
            {CATEGORIES.map((category) => (
              <label key={`category-${category}`} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={currentCategory.toLowerCase() === category.toLowerCase()}
                  onChange={() => handleCategoryChange(category)}
                  className="form-radio text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm mb-3">Price</h3>
          <input
            type="number"
            min="0"
            max="5000"
            value={price}
            onChange={handlePriceChange}
            onBlur={handlePriceCommit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handlePriceCommit();
            }}
            className="w-full border border-gray-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
