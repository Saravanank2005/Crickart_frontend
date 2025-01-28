import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Bats' element={<ShopCategory category="Bats" />} />
          <Route path='/Balls' element={<ShopCategory category="Balls"  />} />
          <Route path='/Kits' element={<ShopCategory category="Kits"  />} />
          <Route path='/product' element={<Product/>}>
            <Route path='/productId' element={<Product/>}/> 
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;