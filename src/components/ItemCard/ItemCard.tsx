import React from 'react';
import type { Item } from '../../types';
import { X } from 'lucide-react';

interface ItemCardProps {
  item: Item;
  onDelete: (id: string) => void;
}

const ItemCard = React.memo<ItemCardProps>(({ item, onDelete }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
      <button
        onClick={() => onDelete(item.id.toString())}
        className="text-gray-400 hover:text-red-500 transition-colors p-1"
        aria-label={`Delete ${item.title}`}
      >
        <X size={16} />
      </button>
    </div>
    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.description}</p>
    <div className="flex justify-between items-center">
      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
        {item.category}
      </span>
      <span className="text-xs text-gray-400">
        {item.createdAt.toLocaleDateString()}
      </span>
    </div>
  </div>
));

ItemCard.displayName = 'ItemCard';