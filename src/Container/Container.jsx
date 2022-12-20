import React, {useState} from 'react' //Importación del elemento useState 
import FormTodo from '../FormTodo/FormTodo'; //se importan los componentes de los cuales se traeran las props utilizadas 
import TaskList from '../TaskList/TaskList';


const Container = () => {
    const [list, setList] = useState([]);       // Uso de useState que se le asigna un valor de un arreglo vacío 
    
    const handleAddItem = addItem =>            { //Arrow function encargada de ingresar los valores a setlist ⬆ 
    setList([...list, addItem]); 
    };

    return (
    <div>    
    <FormTodo handleAddItem={handleAddItem} />         {/* Aqui se llama a la función */} 
    <TaskList list={list} setList={setList} />          {/* Se toman los valores almacenados en las constantes creadas con el useState */}
    </div>
    );
    };





export default Container