
  import './App.css';
  import { Home } from './pages/Home';
  import { Navbar } from './components/Navbar';
  import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";     

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
        </Routes>
        </BrowserRouter> 
    );
  }

  export default App;
