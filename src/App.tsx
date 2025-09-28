import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { ItemList } from "./components/ItemCard/ItemList/ItemList"
import "./App.css"
import { useCallback, useEffect, useMemo, useState } from "react";
import { sampleItems } from "./data/SampleData";
import { useDebounce } from "./hooks/useDebounce";
import type { Item, ItemFormData } from "./types";
import ItemForm from "./components/ItemForm/ItemForm";


const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Debounced search term for performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Load sample items on mount
  useEffect(() => {
    setItems(sampleItems);
  }, []);

  // Filtered items based on search and category
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [items, debouncedSearchTerm, selectedCategory]);

  // Add new item
  const handleAddItem = useCallback((formData: ItemFormData) => {
    const newItem: Item = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date()
    };
    setItems(prev => [newItem, ...prev]);
  }, []);

  // Delete item
  const handleDeleteItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        itemCount={filteredItems.length}
      />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Items List */}
        <section aria-label="Product list">
          <ItemList items={filteredItems} onDeleteItem={handleDeleteItem} />
        </section>

        {/* Add Item Form */}
        <section aria-label="Add new product">
          <ItemForm onAddItem={handleAddItem} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;