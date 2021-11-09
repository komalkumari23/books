import React from 'react'
import "./style.css"
export default function Carditem(props) {
    const api = "https://reactnd-books-api.udacity.com"
    // Generate a unique token for storing your bookshelf data on the backend server.
    let token = localStorage.token
    if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

    const headers = {
    'Accept': 'application/json',
    'Authorization': token
    }
    
    const handleOnchange=(e)=>{
        // setshelf(e.target.value)
        // setid(e.target.id)
        update(e.target.id,e.target.value)

    }
    const update=async(id,shelf)=>{
        try{
            await fetch(`${api}/books/${id}`, {
                method: 'PUT',
                headers: {
                  ...headers,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ shelf })
              })
            props.getAll()
        }
        catch(error){
            console.log("The error is ",error)
        }
    }
    // useEffect(() => {
    //     update(id,shelf)
    // }, [shelf]);

    return (
        <div className="mx-2">
            <div className="card" style={{width:"8rem"}}>
                <img src={props.imageLinks.smallThumbnail} style={{width:"8rem",height:"10rem"}}className="card-img-top" alt="..."/>
                    <b style={{fontSize:"13px"}} className="card-title">{props.title}</b>
                    <div style={{fontSize:"13px"}}  className="card-subtitle mb-2 text-muted">{props.authors}</div>
            </div>
            {/* <div class="btn"></div> */}
            <select onChange={handleOnchange} id={props.id} value={props?.shelf}>
            <option disabled>Move to..</option>
            <option  value="currentlyReading">currentlyReading</option>
            <option  value="wantToRead">wantToRead</option>
            <option  value="read">read</option>
            <option  value="None">None</option>
            </select>
        </div>
    )
}
