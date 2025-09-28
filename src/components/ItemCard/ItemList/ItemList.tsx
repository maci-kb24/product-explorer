// Update the import path to the correct location of your Item type
import React from 'react';
import type { Item } from '../../../types'; 
import { ShoppingBag } from 'lucide-react';
import { ItemCard } from '../ItemCard';

interface ItemListProps {
  items: Item[];
  onDeleteItem: (id: string) => void;
}

const ItemList = React.memo<ItemListProps>(({ items, onDeleteItem }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500 text-lg">No items found</p>
        <p className="text-gray-400 text-sm">Try adjusting your search or add a new item</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} onDelete={onDeleteItem} />
      ))}
    </div>
  );
});

ItemList.displayName = 'ItemList';

export { ItemList };