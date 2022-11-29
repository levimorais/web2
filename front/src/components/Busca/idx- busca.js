import React from 'react';
import "./stl-busca.css"
export const Busca = (props) => {
  return (
    <div className="searchbox-wrap">
      <input ref={props.inputref}
      type="search" 
      placeholder="Realize uma busca por grupos: " 
      className="searchbox" 
      value={props.filter}
      onChange={props.searchText.bind(this)}
      onKeyPress={props.handleKeyPress}
      />
    </div>
    
  );

}