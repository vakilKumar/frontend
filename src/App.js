
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Nav from './components/nav';
import SignUp from './components/signup';
import QrCodePage from './components/qr-code';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product component</h1>}/>
          <Route path="/add" element={<h1>add component</h1>}/>
          <Route path="/update" element={<h1>update component</h1>}/>
          <Route path="/logout" element={<h1>logout component</h1>}/>
          <Route path="/profile" element={<h1>profile component</h1>}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/qrcode" element={<QrCodePage />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
