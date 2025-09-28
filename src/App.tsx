import { ItemList } from "./components/ItemCard/ItemList/ItemList"


function App() {

  return (
   <div className="min-h-screen bg-gray-50">
    <header></header>
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <section aria-label="Product list">
          <ItemList items={[]} onDeleteItem={() => {}} />
        </section>
    </main>
    <footer></footer>
   </div>
  )
}

export default App
