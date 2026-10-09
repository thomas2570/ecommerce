import { products } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return <ProductDetailClient id={params.id} />;
}
