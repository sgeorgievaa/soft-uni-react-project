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
import EditBook from './components/book-edit/EditBook'
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState();

  const userLoginHandler = (email) => {
    setEmail(email);
  }

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={userLoginHandler} />} />
          <Route path="/catalog/:bookId/details" element={<BookDetails email={email} />} />
          <Route path="/catalog/:bookId/edit" element={<EditBook />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
