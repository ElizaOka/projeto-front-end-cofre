
import './App.css'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import ListExtrat from './components/pages/ListExtrat'
import CreateDream from './components/pages/CreateDream'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
// import { } from 'express'

const server = axios.create({
  baseURL: 'http://localhost:3001'
})

function App() {

  server.get ('/').then((response)=>{
    console.log(response)
  }).catch(error => {
    console.error('Erro ao buscar dados:', error)
  })
  
  return (
    <>
      
      <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route path= '/'  element ={<Home/>}/>
              <Route path='/listExtrat' element ={<ListExtrat/>}/>
              <Route path='/createDream' element ={<CreateDream/>}/>

          </Route>
        </Routes>
      </Container>
      </BrowserRouter>
      
    </>
  )
}

export default App