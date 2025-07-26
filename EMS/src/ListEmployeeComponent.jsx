import React,{useState,useEffect} from 'react'
import { deleteEmployee,listEmployees } from './EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [Employees, setEmployees] = useState([]);
    const navigator = useNavigate();
    useEffect(() => {
       getAllEmployees();
    },[]);

    function getAllEmployees(){
         listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.error("Error fetching employees:", error);
        });
    }
    function addNewEmployee() {
        console.log("Add new employee clicked");
        navigator('/add-employee');
    }
    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }
    function removeEmployee(id) {
        console.log(id);
        deleteEmployee(id).then((response)=>{
            getAllEmployees();
        }).catch((error)=>{
            console.error("Error deleting employee:", error);
        });
    }

  return (
    <div className='container'>
      <h1 className='text-center'>List of Employees</h1>
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>EmployeeId</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                Employees.map(employee=><tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.first_name}</td>
                    <td>{employee.last_name}</td>
                    <td>{employee.email_id}</td>
                    <td>
                        <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                        <button className='btn btn-danger' onClick={()=> removeEmployee(employee.id)}>Delete</button>
                    </td>
                </tr>)
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent