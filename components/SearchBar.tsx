"use client";

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') || '');

  useEffect(() => {
    setQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = e.target.value;
      setQuery(newQuery);

      const params = new URLSearchParams(searchParams.toString());
      if (newQuery) {
        params.set('search', newQuery);
      } else {
        params.delete('search');
      }
      
      router.replace(`/?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-blue-200" />
      </div>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleSearch}
        className="block w-full pl-10 pr-3 py-2 border border-blue-400 rounded-md leading-5 bg-[#0A4A96] text-white placeholder-blue-200 focus:outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 sm:text-sm transition-colors duration-200"
      />
    </div>
  );
}
