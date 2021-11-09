import React from 'react'
import Carditem from './Carditem'

export default function Card(props) {
    console.log(props.Reading,"test24")
    return (
        <div style={{marginBottom:"165px"}}>
            <h1>{props.heading}</h1>
            <hr></hr>
            <div className="d-flex flex-row justify-content-center " >
            {props?.Reading?.map((element)=>{

                return(
                    <div  key={element.id}>
                    <Carditem
                    title={element.title}
                    authors={element.authors}
                    imageLinks={element.imageLinks}
                    shelf={element.shelf}
                    id={element.id}
                    getAll={props.getAll}
                    /> 
                    </div>
                );
            })}
            </div>
        </div>
        
    )
}
