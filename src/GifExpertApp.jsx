
import React, { useState } from 'react'
import { AddCategory, GifGrid } from './componets';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['motorbikes']);

    const onAddCategory =( newCategory) => {

      if(categories.includes(newCategory)) return;       
       setCategories([newCategory,...categories]);

    }

  return (
    <>
     
        <h1>GifExpertApp</h1>
             <AddCategory 
          onNewCategory={value => onAddCategory(value)} 
         
         />
            {
            categories.map((category) =>(
                <GifGrid 
                  key={category}
                 category={category} />
            ))  
            }
    
    </>
  )
}
