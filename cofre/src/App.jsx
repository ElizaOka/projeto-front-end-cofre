
/*importa o css*/
import './App.css'


import NavBar from './components/layout/NavBar'

import Container from './components/layout/Container'
import Home from './components/pages/Home'
import ListExtrat from './components/pages/ListExtrat'
import CreateDream from './components/pages/CreateDream'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      {/* estrutura de navegação */}
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