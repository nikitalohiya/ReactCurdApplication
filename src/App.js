
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import EmpListing from './EmpListing'
import  EmpCreate from './EmpCreate';
import  EmpDetail  from './EmpDetail';
import  EmpEdit from './EmpEdit';


function App() {
  return (
    

  <BrowserRouter>
<Routes>
  <Route path="/" element={<EmpListing/>}></Route>
  <Route path="/employee/create" element={<EmpCreate/>}></Route>
  <Route path="/employee/edit/:empid" element={<EmpEdit/>}></Route>
  
  <Route path="/employee/detail/:empid" element={<EmpDetail/>}></Route>
  

  
</Routes>
  </BrowserRouter>
  )
}

export default App;
