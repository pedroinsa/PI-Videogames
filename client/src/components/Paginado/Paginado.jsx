import React from "react";
function Paginado (props){
const pageNumbers= []
for (let i=0; i< Math.ceil(props.videogames/ props.porPage);i++){
  pageNumbers.push(i+1)    
}
return(<div>
        <ul>
           {pageNumbers && pageNumbers.map(number =><li key={number}>
               <a onClick={()=>props.paginado(number)}>{number}</a>
           </li>)}


        </ul>
        <h2>PAGINADO EAEAE</h2>
</div>)

}

export default Paginado