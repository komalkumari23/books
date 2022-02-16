import React from 'react'
import Carditem from './Carditem'
import Spinner from './Spinner'

export default function Card(props) {
    return (
        <div style={{marginBottom:"165px"}} id={props.id}>
            <h1>{props.heading}</h1>
            <hr></hr>
            {props.loading&&<Spinner/>}
            <div className="d-flex flex-row justify-content-center " >
            {!props.loading && props?.Reading?.map((element)=>{

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
