
  import './App.css';
  import { Home } from './pages/Home';
  import { Navbar } from './components/Navbar';
  import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";     
  import { LoginRegister } from './pages/LoginRegister';

  function App() {
    return (
      
      
      <BrowserRouter>
      <Routes>
        <Route  
          path="/"
          element={
              <Home />
          }
        />
        <Route  
          path="/login-register"
          element={
            <LoginRegister />
          }
        />
        </Routes>
        </BrowserRouter> 
    );
  }

  export default App;
