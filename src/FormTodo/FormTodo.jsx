import React, { useState } from "react"; //Se importa el componente useState de la librería REACT para 

const FormTodo = props => { //Se crea funcion constante de FormTodo, el parametro props sirve para traer una clave de un objeto, o las propiedades de un componente para que se pueda reutilizar de padre a hijo.
    const { handleAddItem } = props; 
    const [description, setDescription] = useState(""); //Variable creada para que los valores iniciales de las variables sean vacías. 
    const handleSubmit = e => {//Se crea una función que utiliza eventos 
        e.preventDefault(); //Método para que no se actualice la página
        handleAddItem({ //se crea un objeto que contiene propiedades 
            done: false,
            id: (+new Date()).toString(),
            description
        });
        
        setDescription(""); //Mientras que se escriba algo, el estado actual es vacío.
        };
        return (
        <form onSubmit={handleSubmit}>{/*Se llama la propiedad onSubmit y en cuanto el usuario interactue con el form, se llame la función */} 
        
        <div className="todo-list">
        <div className="file-input">
       
        <input  //en este input se traen los elementos que escriba el ususario y se envian a la función donde se muestra el estado actual de la lista. 
        type="text"
        className="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        />
       
        <button
        className="button pink"
        disabled={description ? "" : "disabled"} //Operador ternario encargado de verificar si hay algún elemento en description, si no lo hay, el botón se deshabilita. 
        >
        Add
        </button>
        </div>
        </div>
        </form>
        );
    };
    export default FormTodo;