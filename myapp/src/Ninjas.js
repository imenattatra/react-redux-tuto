import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        
        const {ninjas}=this.props;//destructuring
        const ninjaList=ninjas.map(ninja=>{
            return(
                <div className="ninja" key={ninja.id}>
                    <div>Name : {ninja.name}</div>
                    <div>Age : {ninja.age}</div>
                    <div>Belt : {ninja.belt}</div>
                </div>
            );
        })
        return(
            <div className="ninjas-list">
                {ninjaList}
            </div>
        )

    };
}

export default Ninjas;