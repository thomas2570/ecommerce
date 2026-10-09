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

  // Sync state with URL if it changes externally
  useEffect(() => {
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
    <div className="bg-[#0B57B0] text-white p-6 rounded-lg shadow-md w-full md:w-64 flex-shrink-0">
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
  );
}
