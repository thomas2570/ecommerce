import { Suspense } from 'react';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';

type SearchParamsProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home(props: SearchParamsProps) {
  const searchParams = await props.searchParams;
  
  const search = typeof searchParams.search === 'string' ? searchParams.search.toLowerCase() : '';
  const category = typeof searchParams.category === 'string' ? searchParams.category : 'All';
  const maxPrice = typeof searchParams.price === 'string' ? Number(searchParams.price) : 1000;

  const filteredProducts = products.filter((product) => {
    // Search match
    if (search && !product.title.toLowerCase().includes(search)) {
      return false;
    }
    
    // Category match
    if (category !== 'All' && product.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }
    
    // Price match
    if (product.price > maxPrice) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row gap-8">
      <Suspense fallback={<div className="w-full md:w-64 h-96 bg-gray-200 animate-pulse rounded-lg" />}>
        <FilterSidebar />
      </Suspense>
      
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[#0A2A5E] mb-6">Product Listing</h1>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
