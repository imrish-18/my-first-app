import React from 'react'
import 'D:/ReactJs/my-first-app/src/css/bootstrap.css'
//props  allow you to pass data from a parent (wrapping) component to a child (embedded) component.
 const person=(props)=>{
     return (
         <div>
     <p class="text-info ">I'm  {props.name} a person and my age is {props.age}</p>
     <p>{props.children}</p>
     </div>
     )
 }
  export default person