import React from 'react';

function Videocard(props){
    return(<div>
        <h3>{props.name}</h3>
        <img src={props.image} alt="foto" />
        <h3>{props.genres}</h3>

    </div>)
}


export default Videocard

// => <Videocard key={e.id} image={e.image} id={e.id} name={e.name} genres={e.genres}/> )