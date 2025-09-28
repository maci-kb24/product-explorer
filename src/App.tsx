import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { ItemList } from "./components/ItemCard/ItemList/ItemList"
import "./App.css"


function App() {

  return (
   <div className="min-h-screen bg-gray-50">
   <Header itemCount={0} searchTerm="" onSearchChange={() => {}} selectedCategory="" onCategoryChange={() => {}} />
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <section aria-label="Product list">
          <ItemList items={[]} onDeleteItem={() => {}} />
        </section>
    </main>
    <Footer />
   </div>
  )
}

export default App
