"use client";

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <span className="font-medium text-gray-700">Quantity</span>
      <div className="flex items-center border border-gray-300 rounded-md">
        <button
          onClick={onDecrease}
          className="p-2 hover:bg-gray-100 transition-colors rounded-l-md"
          disabled={quantity <= 1}
        >
          <Minus className="h-4 w-4 text-gray-600" />
        </button>
        <span className="px-4 py-2 font-medium text-gray-900 border-x border-gray-300 min-w-[3rem] text-center">
          {quantity}
        </span>
        <button
          onClick={onIncrease}
          className="p-2 hover:bg-gray-100 transition-colors rounded-r-md"
        >
          <Plus className="h-4 w-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
