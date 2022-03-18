
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Destinos from './pages/Destinos';
import Passagens from './pages/Passagens';
import Cadastro from './pages/Cadastro';
import PassagensCreate from './pages/Passagens/Create';
import CadastroCreate from './pages/Cadastro/Create';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Destinos' element={<Destinos />} />
            <Route path='/Passagens' element={<Passagens />} />
            <Route path='/Cadastro' element={<Cadastro />} />

            <Route path='/Cadastro-Create' element={<CadastroCreate />} />
            <Route path='/Cadastro-Update/:id' element={<CadastroCreate />} />
            <Route path='/Passagens-Create' element={<PassagensCreate />} />
            <Route path='/Passagens-Update/:id' element={<PassagensCreate />} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
