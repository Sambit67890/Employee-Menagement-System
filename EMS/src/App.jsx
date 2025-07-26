import React from 'react'
import ListEmployeeComponent from './ListEmployeeComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponenet from './HeaderComponenet';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Footer';
import EmployeeComponent from './EmployeeComponent';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <HeaderComponenet/>
      <Routes>
        <Route path='/' element={<ListEmployeeComponent/>}/>
        <Route path="/employees" element={<ListEmployeeComponent/>}/>
        <Route path="/add-employee" element={<EmployeeComponent/>}/>
        <Route path="/edit-employee/:id" element={<EmployeeComponent/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App