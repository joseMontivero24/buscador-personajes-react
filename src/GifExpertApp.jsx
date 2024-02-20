import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { ModoDark } from "./components/ModoDark";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) =>{
        // Para ver si en categories ya existe la misma categoria
        if( categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    
  return (
    <>
       <div className="content-header">
            <a href="#">JM-<span>DEV</span></a>
            <h1 className="title">GifExpertApp</h1>
            <ModoDark/>
       </div>

        <AddCategory 
            onNewCategory={(value) => onAddCategory(value)}
        />

        {
            categories.map((category) =>(
                <GifGrid 
                    key={category}
                    category={category}
                />
            ))
        }
    </>
  )
}
