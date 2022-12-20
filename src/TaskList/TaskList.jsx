import React from "react";
import Checkbox from "../Checkbox/Checkbox"; //Se importa la funcion de la cual se traen las props necesarias 


const TaskList = props => {   
    const { list, setList } = props; //se crean las props list y setlis 
    
    const onChangeStatus = e => { //Función que maneja el evento 
        
        const { name, checked } = e.target; //Variable que almacena la tarea y el realizado 
        
        const updateList = list.map(item => ({ //Funcion para actualizar la lista 
            ...item, //Trae todos los elementos del array item y los concatena 
            
            done: item.id === name ? checked : item.done //Operador ternario para validar si un elemento ha sido seleccionado 
            }));
         setList(updateList); //Se llama a la funcion por medio de la variable setList para actualizar la lista 
        };  
    
    const onClickRemoveItem = e => { //Funcion que maneja el evento al remover un elemento 
    const updateList = list.filter(item => !item.done);
    setList(updateList);            //Actualización de la lista creada 
    };
    
    const chk = list.map(item => ( //Función que recorre la lista y muestra los cuadros de check          
        
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
        ));

    return (
        <div className="todo-list">        
            {list.length ? chk : "No tasks"} {/* Operador ternario para validar si la lista se encuentra vacía, si no, ingresa de nuevo a chk que recorre por medio de map el array de nuevo. Si el array está vacío imprime no task */}        
            {list.length ? ( /* si el array tiene valores, se muestra un boton para eliminar todos los elementos, si no, el boton se esconde. */ 
                <p>
                    <button className="button blue" onClick={onClickRemoveItem}>
                        Delete all done
                    </button>
                </p>
            ) : null} 
        </div>
    );
};
export default TaskList;