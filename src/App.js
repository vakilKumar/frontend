
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Nav from './components/nav';
import SignUp from './components/signup';
import QrCodePage from './components/qr-code';
import Login from './components/login';
import DashBord from './screens/dashbord';
import AddQuiz from './screens/addQuiz';
import Logout from './components/logout';
import { Provider } from 'react-redux';
import store from './store';
import ProductComponet from './pages/product';
import Home from './pages/home';
import Cart from './pages/cart';
import ProductDetail from './pages/admin';
import AddProductPage from './pages/admin/addProduct';
import UpdateProductPage from './pages/admin/UpdateProductPage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/add" element={<h1>add component</h1>}/>
          <Route path="/dashbord" element={<DashBord/>}/>
          <Route path="/productDetail" element={<ProductDetail />}/>
          <Route path="/addproduct" element={<AddProductPage />}/>
          <Route path="/profile" element={<h1>profile component</h1>}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/updateproduct" element={<UpdateProductPage />}/>
          {/* <Route path="/qrcode" element={<QrCodePage />}/> */}
          <Route path="/login" element={<Login />}/>
          {/* <Route path="/addquiz" element={<AddQuiz />}/> */}
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
      </Provider>
    </div>
  );
}

export default App;
