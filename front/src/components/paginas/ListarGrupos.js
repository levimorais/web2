import React,{useRef,useState,useEffect} from "react";
import Navbar from "../Navbar/Navbar"
import {Busca} from "../Busca/Busca"
import {ResultadoGrupo} from "../Resultado/ResultadoGrupo";
const userToken = window.localStorage.getItem("token");

export const BuscaGrupo = () => {

  const [dataDoGrupo, setdataDoGrupo] = useState([])
  const [buscaData, setbuscaData] = useState([])
  const ref = useRef();
  const [filtro, setfiltro] = useState('');

  const searchText = (e) =>{
    setfiltro(e.target.value)
  }


  useEffect(() => {

    var requestOptions = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        'x-access-token': userToken
      },
      redirect: 'follow'
    };


  return (
  
    <>
      <Navbar/>
      <div>
      <h1 className="titleBuscaGrupo">Realizar Busca de Grupos</h1>
      <Busca searchText={searchText} filtro={filtro} handleKeyPress={handleKeyPress} ref={ref}/>
      <BuscaGrupoResullt buscaData={buscaData}/>
      
    </div>
    
    </>
  );
};
