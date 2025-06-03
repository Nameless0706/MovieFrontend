import './css/App.css';
import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorites" element={<Favorite/>}>
            </Route>
        </Routes>
      </main>
    </MovieProvider>
   
  );
}


export default App;
