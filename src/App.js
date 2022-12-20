import React from 'react';
import Container from './Container/Container'; //Se importa el contenedor que almacena toda la funcionalidad 
import './App.scss' //Se llaman el archivo sass correspondiente 

function App() {
  return (
    <div className="App">
      <Container/>          {/*  Uso de container que almacena formtodo y tasklist  */}
    </div>  
  );
}

export default App;
