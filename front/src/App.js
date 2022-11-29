import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Cadastro } from "./components/pages/Cadastro";
import { Autenticacao } from "./components/pages/Autenticacao";
import { PerfilUsuarip } from "./components/pages/PerfilUsuarip";
import { ListarGrupos} from "./components/pages/ListarGrupos";
import PrivateRoute from "./components/PrivateRoute";


function App() {

  return (
    <>
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Autenticacao/>} />
            <Route path="/Cadastro" element={<Cadastro/>} />
            <Route path="/Autenticacao" element={<Autenticacao/>} />
            <Route element={<PrivateRoute/>}>
                <Route path="/PerfilUsuarip" element={<PerfilUsuarip/>} />
                <Route path="/my_groups" element={<ListarGrupos/>} />
            </Route>
            
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
