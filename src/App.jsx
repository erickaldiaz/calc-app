import React from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Results'
import './App.css'


// Arrow Function
const App = () => {
  const arrayTextoFuncionModificaTexto = useState("hola")
  //arrayTextoFuncionModificaTexto =>["hola", funcion]

  //1er posición valor(que inicialmente es el valor por defecto)
  const texto = arrayTextoFuncionModificaTexto[0]

  //2da posición: funcion que me va a permitir modificar el valor por defecto)
  const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]

    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={"0"}></Result>
        <Numbers onClickNumber={number => {
          console.log("Click en numbers", number)
        }}>

        </Numbers>
        <Functions 
          onContentClear={() =>
            console.log("Content Clear")} 
          onDelete={()=>
            console.log("onDelete")}>
        </Functions>
        <MathOperations onClickOperation={operation => 
          console.log("operation:", operation)}
          onClickEqual={equal =>
          console.log("equal:", equal)}>
        </MathOperations>
    </main>)
}

export default App

