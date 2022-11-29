import React, {useState } from "react";
import Navbar from "../Navbar/Navbar"

const nomeUsuario = window.localStorage.getItem("nome");
const idUsuario = window.localStorage.getItem("id");
const fotoUsuario = window.localStorage.getItem("foto");
const emailUsuario = window.localStorage.getItem("email");
const tokenUsuario = window.localStorage.getItem("token")

var photo;
if (fotoUsuariolcl===""){
  photo = fotoUsuariolcl
}else{
  if(fotoUsuariolcl===null){
    photo = ""
  }else{
    photo = "data:image/png;base64," + fotoUsuariolcl
  }
  

  return (
  
    <>
    <Navbar/>
      <div className="containerPage">
      
      <form className="boxProfile"  >

      
        <input type="file" id="fileImage" accept="image/*" className="inputImage" onChange={changePhoto}/>

        <p className="titleProfile">{"Perfil de Usuário"}</p>
        
        {image===""?<img src={noProfile} style={{opacity: 0.5}} id="fotoUsuariolcl" alt="Foto de perfil" title="Atualizar foto de perfil" className="fotoUsuariolcl" onClick={select}/>:
        <img src={image} id="fotoUsuariolcl" onClick={select} alt="Foto de perfil" title="Atualizar foto de perfil" className="fotoUsuariolcl"/>} 
      </form>

      </div>

    
    </>
  );
};