import Image from 'next/image';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { CartItemType } from '../types';
import QuantitySelector from './QuantitySelector';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center py-6 border-b border-gray-200 gap-6">
      <Link href={`/product/${item.id}`} className="flex-shrink-0 relative h-24 w-24 bg-gray-100 rounded-md overflow-hidden block">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="96px"
        />
      </Link>
      
      <div className="flex-1 min-w-0 text-center sm:text-left">
        <Link href={`/product/${item.id}`} className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
          {item.title}
        </Link>
        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        <p className="mt-2 font-bold text-gray-900">${item.price}</p>
      </div>

      <div className="flex flex-col items-center sm:items-end gap-4 mt-4 sm:mt-0">
        <QuantitySelector
          quantity={item.quantity}
          onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
          onDecrease={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
        />
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 flex items-center text-sm font-medium transition-colors"
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Remove
        </button>
      </div>
    </div>
  );
}
