import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import Geral from './pages/Geral';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/geral" element={<Geral />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;