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
import { useState, useEffect } from 'react'
import Logout from './components/logout/Logout'
import GuestGuard from './hoc/GuestGuard'
import PrivateGuard from './hoc/PrivateGuard'
import Search from './components/search/Search'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

function App() {
  const [authData, setAuthData] = useState({});
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthData(user
        ? { _id: user.uid, email: user.email, username: user.displayName || '' }
        : {}
      );
      setIsAuthReady(true);
    });

    return unsubscribe;
  }, []);

  if (!isAuthReady) {
    return <p>Loading...</p>;
  }


  return (
    <UserContext.Provider value={authData}>
      <Header />

      <main>
        <Routes>
          {/* public */}
          <Route path='/' element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:bookId/details" element={<BookDetails />} />
          <Route path='/search' element={<Search />} />
          
          
          {/* guests */}


          <Route element={<GuestGuard />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* registered users */}
          <Route element={<PrivateGuard />}>
            <Route path="/add" element={<AddBook />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/catalog/:bookId/edit" element={<EditBook />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </UserContext.Provider>
  )
}

export default App
