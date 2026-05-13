import {Home, Projects, Blogs, SSI} from './PagesRoute'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Blogs' element={<Blogs/>}/>
      <Route path='/SSI' element={<SSI/>}/>
    </Routes>
    </>
  )
}

export default App
