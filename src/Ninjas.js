import React from 'react';

const Ninjas =({ninjas,deleteNinja})=>{

    const ninjaList=ninjas.map(ninja=>{
        return ninja.age>10 ? (
            <div className="ninja" key={ninja.id}>
                <div>Name : {ninja.name}</div>
                <div>Age : {ninja.age}</div>
                <div>Belt : {ninja.belt}</div>
                <button onClick={()=>{deleteNinja(ninja.id)}}>Delete</button>
            </div>
        ):null;

    })
    return(
        <div className="ninjas-list">
            {ninjaList}
        </div>
    )

}

export default Ninjas;