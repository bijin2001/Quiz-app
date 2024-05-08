import './App.css'
import {Route, Routes} from 'react-router-dom'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
function App() {
  
  return (
    <>
    <Routes>

    <Route element= {<Page1/>} path='/'/>
    <Route element={<Page2/>} path='/Page2'/>
    {/* <Route element={<Page3/>} path='/Page3'/>
    <Route element={<Page4/>} path='Page4'/>
    <Route element={<Page5/>} path='Page5'/>
    <Route element={<Page6/>} path='Page6'/> */}
    
   </Routes>
   </>
  )}
export default App
