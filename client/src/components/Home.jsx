import React from 'react';
import Searchbar from './Searchbar'
import Container from './Container';

class Home extends React.Component{
 
constructor(props){
    super(props)
}

render(){
    return (
        <div>
            <Searchbar/>
            <Container/>
            <h1>SOY EL HOME</h1>
        </div>
    )
}

}

export default Home