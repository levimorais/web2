import React,{useState,useEffect} from "react";
import ReactLoading from 'react-loading';
import Modal from "react-modal"
import {customStyles} from '../Resultado/stl'


Modal.setAppElement("#root");

export const Autenticate = () => {
 

  useEffect(()=>{
    window.localStorage.setItem("token","")
  },[])
  

  const [loading, setLoading] = useState(false)

  const [openModal, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    
  }

  function closeModal() {
    setIsOpen(false);
    setBorderColoremailSetter("#920e7c")
    setBorderColorsenhaSetter("#920e7c")
    setLabelV("")
    setColorLabelV("")
    setPaddingV("")
  }

  const [emailSetter, setemailSetter] = useState("");
  const [senhaSetter, setsenhaSetter] = useState("");
  const [labelV, setLabelV] = useState("");

  const [email, emailSet] = useState("");
  const [senha, setSenha] = useState("");
  const [label, setLabel] = useState("");

  const novaSenha = (e) =>{
    e.preventDefault();
    setLoading(true)

    var data = JSON.stringify({
      email: emailSetter,
      senha: senhaSetter
  
    })

    var requestOptions = {
      method: 'PUT',
      body: data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      redirect: 'follow'
    };
                                               
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)
    
    var data = JSON.stringify({
      email,
      senha
  
    })

    var requestOptions = {
      method: 'POST',
      body: data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      redirect: 'follow'
    };
    

  return (
    
    <div className="containerPage">
      <form className="box" onSubmit={handleSubmit} >

      <a href="https://www.flaticon.com/br/icones-gratis/aluna" title="aluna ícones">Aluna ícones criados por itim2101 - Flaticon</a>
        <div className="div">
        <label className="title">Entrar</label>
        </div>

        <div>
          <input
            type="email"
            className="loginDoUsuario"
            placeholder="Email"
            style={{borderColor: borderColorEmail}}
            onChange={(e) => emailSetter(e.target.value)}
          />
        </div>

        <div>
          
          <input
            type="password"
            placeholder="Senha"
            style={{borderColor: borderColorSenha}}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div>
            <button type="submit">Logar</button>
            {loading===true?<div className="containerLoading">
              <ReactLoading type={"spin"} color={"#528abe"} height={20} width={20} />
            </div>: null}
        </div>

        <p className="text">
          <span onClick={openModal} className='linkModal'> Esqueceu a senha?</span>
        </p>

        <p className="text">
          Não possui registro? <a  style={{textDecoration:"none"}} className='linkModal' href="/register">Cadastrar conta</a>
          
        </p>

        


        <div className="divLabel">
          <p className="contentLabel" style={{backgroundColor: colorLabel, padding:padding}}>
            <label className="Label">{label}</label>
          </p>
        </div>
        
      </form>

    </div>
  );
};