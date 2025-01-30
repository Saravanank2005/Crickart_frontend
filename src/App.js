import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kids_banner from './components/assets/banner_kids.png';
import ShopContextProvider from './context/ShopContext';
import Collections from './components/Collections/Collections';
import Thanks from './pages/Thanks';
import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import AdminPanel from './admin/AdminPanel'; 
import { AdminAuthProvider } from './context/AdminAuthContext'; // Ensure AdminAuthContext is inside the Router
import AdminLogin from './admin/components/AdminLogin'; 
import { UserAuthProvider } from './context/UserAuthContext';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import { FavoritesProvider } from './context/FavoritesContext';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Contact from './pages/Contact';
import ShippingPolicy from './pages/ShippingPolicy';
import Returns from './pages/Returns';
import FAQ from './pages/FAQ';
import About from './pages/About';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminProvider } from './context/AdminContext';
import AddProduct from './admin/components/AddProduct';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/thanks';

  return (
    <div className="App">
      {!isAuthPage && !isAdminRoute && <Navbar />}
      <main>{children}</main>
      {!isAuthPage && !isAdminRoute && <Footer />}
    </div>
  );
};

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <AuthProvider>
      <UserAuthProvider>
        <BrowserRouter> {/* Ensure everything is inside BrowserRouter */}
          <AdminAuthProvider> {/* Wrap AdminAuthProvider inside BrowserRouter */}
            <AdminProvider>
              <CartProvider>
                <FavoritesProvider>
                  <ShopContextProvider>
                    <Layout>
                      <Routes>
                        <Route path='/' element={<Shop />} />
                        <Route path='/bats' element={<ShopCategory category="bats" banner={men_banner}/>} />
                        <Route path='/balls' element={<ShopCategory category="balls" banner={women_banner}/>} />
                        <Route path="/new-collections" element={<Collections />} />
                        <Route path='/kits' element={<ShopCategory category="kits" banner={kids_banner}/>} />
                        <Route path='/product/:productId' element={
                          <ErrorBoundary>
                            <Product />
                          </ErrorBoundary>
                        } />
                        <Route path='/cart' element={
                          <ProtectedRoute>
                            <Cart />
                          </ProtectedRoute>
                        } />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/thanks" element={
                          <ProtectedRoute>
                            <Thanks />
                          </ProtectedRoute>
                        } />
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin/dashboard" element={
                          <ProtectedRoute>
                            <AdminPanel />
                          </ProtectedRoute>
                        } />
                        <Route path="/admin/addproduct" element={
                          <ProtectedRoute>
                            <AddProduct />
                          </ProtectedRoute>
                        } />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                        <Route path="/terms" element={<TermsConditions />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/shipping-policy" element={<ShippingPolicy />} />
                        <Route path="/returns-policy" element={<Returns />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/about" element={<About />} />
                      </Routes>
                      {isPopupVisible && <Thanks closePopup={closePopup} />}
                    </Layout>
                  </ShopContextProvider>
                  <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </FavoritesProvider>
              </CartProvider>
            </AdminProvider>
          </AdminAuthProvider>
        </BrowserRouter>
      </UserAuthProvider>
    </AuthProvider>
  );
};

export default App;
