import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const [text, setText] = useState(true); 

    // Funcion para obtener los datos del input
    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    // Funcion para evitar la accion por defrcto del formulario
    const onSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length <= 1) return; // compruebo si el dato ingresado es mas de dos caracteres
        onNewCategory(inputValue.trim());
        setInputValue(''); // para que el input se limpie
        setText(false);
    }

  return (
    <form className="contenedor-general" onSubmit={onSubmit}>

        <input
            
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange}
            />
            
            {text && <p className="entrada-text">Escribe el nombre de tu personaje favorito🤩</p>}
    </form>
  )
}

// ME QUEDE EN EL VIDEO 80