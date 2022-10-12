import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import { Search } from './pages/search/Search';
import Navbar from './pages/components/Navbar'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
          <Routes>
            <Route state={true} path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/search" element={<Search/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
