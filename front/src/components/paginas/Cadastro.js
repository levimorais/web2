import React, { useState, useEffect } from "react";
import ReactLoading from 'react-loading';

export const Register = () => {

  const [loading, setLoading] = useState(false)

  const [nome, cadastrarNome] = useState("");
  const [email, cadastrarEmail] = useState("");
  const [senha, cadastrarSenha] = useState("");
  const [label, cadastrarLabel] = useState("");
 
  const [colorLabel, setColorLabel] = useState("")

  const [borderColorNome, setBorderColorNome] = useState("#920e7c")
  const [borderColorEmail, setBorderColorEmail] = useState("#920e7c")
  const [borderColorSenha, setBorderColorSenha] = useState("#920e7c")

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)
    
    var data = JSON.stringify({
      nome,
      email,
      senha,
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
    <>
    
    <div className="containerPage">

      <form className="box" onSubmit={handleSubmit} >
      <a href="https://www.flaticon.com/br/icones-gratis/aluna" title="aluna ícones">Aluna ícones criados por itim2101 - Flaticon</a>
        <label className="title">Cadastro</label>
        </div>

        <div>
          <input
            type="text"
            placeholder="Insira seu nome completo"
            style={{borderColor: '#920e7c'}}
            onChange={(e) => cadastrarNome(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Insira seu Email"
            style={{borderColor: '#920e7c'}}
            onChange={(e) => cadastrarEmail(e.target.value)}
          />
        </div>

        <div>
          
          <input
            type="password"
            placeholder="Insira uma Senha"
            style={{borderColor: '#920e7c'}}
            onChange={(e) => cadastrarSenha(e.target.value)}
          />
        </div>

        </form>
    </div>
    </>
  );
};