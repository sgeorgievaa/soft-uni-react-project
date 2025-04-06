import { Routes, Route } from 'react-router'

import { UserContext } from './contexts/UserContext'

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
import Logout from './components/logout/Logout'

function App() {
  const [authData, setAuthData] = useState({});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  }

  return (
    <UserContext.Provider value={{...authData, userLoginHandler}}>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/catalog/:bookId/details" element={<BookDetails />} />
          <Route path="/catalog/:bookId/edit" element={<EditBook />} />
        </Routes>
      </main>

      <Footer />
    </UserContext.Provider>
  )
}

export default App
