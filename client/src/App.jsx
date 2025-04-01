import { Routes, Route } from 'react-router'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Catalog from './components/Catalog'
import Home from './components/Home'
import AddBook from './components/add-book/AddBook'

function App() {

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
