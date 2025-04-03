import { Routes, Route } from 'react-router'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Catalog from './components/catalog/Catalog'
import Home from './components/home/Home'
import AddBook from './components/add-book/AddBook'
import Register from './components/register/Register'
import Login from './components/login/Login'
import BookDetails from './components/book-details/BookDetails'

import './App.css'

function App() {

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog/:bookId/details" element={<BookDetails />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
