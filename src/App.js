import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Spidey, Home} from './components/routes/index'
import { Header } from './components/index'
import {useEffect, useState} from 'react'



function App() {

  let image_ratio = 'standard_fantastic'



  const [characters, setCharacters] = useState([])

  //Hooks
  useEffect (() => {
    axios.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=32deddddef41cd252fdfa7d757c2656d&hash=ac91760fc3d1cf67e615817a3ee560a6').then(res=>{
        setCharacters(res.data.data.results)
        console.log(res.data)  
    }).catch(err=>console.log(err))
  },[])


  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"spidey"} element={<Spidey/>}/>            
      </Routes>  
    </Router>

    {characters.map(char=> (

      
        // <div className='heu'>
        //   <h1>{char.name}</h1>
        //   <img src={`${char.thumbnail.path}/${image_ratio}.${char.thumbnail.extension}`} alt="hero" />
        // </div>


      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={`${char.thumbnail.path}/${image_ratio}.${char.thumbnail.extension}`} alt="hero"/>
              <h3>{char.name}</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>{char.description}</p>
            </div>
          </div>
        </div>
      </div>
    
      ))}
    </div>
  );
}

export default App;

