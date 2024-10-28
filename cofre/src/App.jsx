/* IMPORTA O CSS */
import './App.css'

//IMPORTA O COMPONENTE CONTAINER
import Container from './components/layout/Container'

//IMPORTA O COMPONENTE NAVBAR
import NavBar from './components/layout/NavBar'

// IMPORTA OS COMPONENTES DE NAVEGAÇÃO DA APLICAÇÃO
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//
import Home from './components/pages/Home'

import CreateDream from './components/pages/CreateDream' 

import ListExtrat from './components/pages/ListExtrat' 
import DetailDream from './components/pages/DetailDream'


function App() {
 
 
  return (
    <>

      {/* ESTRUTURA DE NAVEGAÇÃO */}
        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>
                <Route path='/' element={<Home />}/>
                <Route path='/ListExtrat' element={<ListExtrat />}/>
                <Route path='/CreateDream' element={<CreateDream />}/>
                <Route path='/DetailDream/:cod_sonho' element={<DetailDream />}/>
              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

    </>
  )
}
 
export default App