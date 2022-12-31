import React from 'react';

function Videocard(props){
    return(<div>
        <h3>{props.name}</h3>
        <img src={props.image? props.image:"data:image/png;base64,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" } alt="foto" />
        <h3>{props.genres}</h3>

    </div>)
}


export default Videocard

// => <Videocard key={e.id} image={e.image} id={e.id} name={e.name} genres={e.genres}/> )