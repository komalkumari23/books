import React,{useEffect,useState} from 'react'
import './App.css';
import Card from './Component/Card';
import Navbar from './Component/Navbar';


import {Link} from 'react-router-dom'


function App(props) {
  const [books, setBooks] = useState([])
  const [currentlyReading, setcurrentlyReading] = useState([])
  const [wantToRead, setwantToRead] = useState([]);
  const [read, setread] = useState([]);
  const api = "https://reactnd-books-api.udacity.com"
    // Generate a unique token for storing your bookshelf data on the backend server.....
    let token = localStorage.token
    if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

    const headers = { 
    'Accept': 'application/json',
    'Authorization': token
    }
    //This func is for fetching books
    const getAll=async ()=>{
      try{
        let data=await fetch(`${api}/books`, { headers })
        let parsedData=await data.json()
        setBooks(parsedData.books)
        
      }
      catch(error){
        console.log("The error is ",error)
      }
     }
     useEffect(() => {
       getAll()
     }, [])
    useEffect(() => {
      CurrentlyReading()
      WantToRead()
      Read()

    }, [books])
     const CurrentlyReading=()=>{
      let  array1= books.filter((element)=>element["shelf"]==="currentlyReading")
       setcurrentlyReading(array1)
     }
     const WantToRead=()=>{
      let  array2= books.filter((element)=>element["shelf"]==="wantToRead")
       setwantToRead(array2)
     }
     const Read=()=>{
      let  array3= books.filter((element)=>element["shelf"]==="read")
       setread(array3)
     }
  return (
    < >
      <Navbar setemail={props.setemail}/>
      <div className="container-fluid" style={{marginTop:"75px"}}>
        <Card heading="Currently Reading" Reading={currentlyReading} getAll={getAll} id={"currentlyReading"}/>
        <Card heading="Want to Read" Reading={wantToRead} getAll={getAll} id={"wantToRead"}/>
        <Card heading="Read" Reading={read} getAll={getAll} id={"read"}/>
      </div>
      <Link to='/search'>
        <div className="btn fixedbutton"></div>
        </Link>

    </>
  );
}

export default App;
