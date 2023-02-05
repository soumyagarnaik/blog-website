import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import {AuthContextProvider, AuthContext} from './context/AuthContext'

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
    <Header/>
    <main>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
    </main>
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
