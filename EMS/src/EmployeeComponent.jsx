import React from 'react'
import { createEmployee , getEmployee, updateEmployee} from './EmployeeService';
import { useState , useEffect} from 'react'
import { useNavigate ,useParams} from 'react-router-dom';

const EmployeeComponent = () => {
    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [email_id, setEmail_Id] = useState('');

    const {id}=useParams();

    const [error, setError] = useState({
        first_name: '',
        last_name: '',
        email_id: ''
    });

    const navigator = useNavigate();

    useEffect(() => {
        if(id){
            getEmployee(id).then((response) => {
                const employee = response.data;
                setFirst_Name(employee.first_name);
                setLast_Name(employee.last_name);
                setEmail_Id(employee.email_id);
            }).catch((error) => {
                console.error("Error fetching employee:", error);
            }); 
        }
    }, [id]);

    function handleFirstName(event) {
        setFirst_Name(event.target.value);
    }
    function handleLastName(event) {
        setLast_Name(event.target.value);
    } 
    function handleEmailId(event) {
        setEmail_Id(event.target.value);
    }
    function saveorUpdateEmployee(event) {
        event.preventDefault();
        const employee = {
        first_name,
        last_name,
        email_id
    };
        if (validateForm()) {
           // Logic to save employee data
        console.log("Employee saved:", { first_name, last_name, email_id });

        if(id){
            updateEmployee(id, employee).then((response) => {
                console.log(response.data);
                navigator('/employees');
            }).catch((error) => {
                console.error("Error updating employee:", error);
            })
        }else{
        createEmployee(employee).then((response)=>{console.log(response.data)
            navigator('/employees');
        })
        .catch((error) => {
                console.error("Error from backend:", error);
            }); 
        }
        }
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
    function validateForm() {
        let valid=true;
        const errorCopy={...error};

        if(first_name.trim()){
            errorCopy.first_name='';
         }else{
            errorCopy.first_name='First Name is required';
            valid=false;
        }
        if(last_name.trim()){
            errorCopy.last_name='';
        }
        else{
            errorCopy.last_name='Last Name is required';
            valid=false;
        }
        if(email_id.trim()){
            errorCopy.email_id='';
        }
        else{
            errorCopy.email_id='Email is required';
            valid=false;
        }
        setError(errorCopy);
        return valid;
    }
  return (
    <div className='container'>
        <br/> <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form  onSubmit={saveorUpdateEmployee}>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input type='text' placeholder='Enter First Name' className={`form-control ${error.first_name? 'is-invalid' : ''}`} name='first_name' value={first_name} onChange={handleFirstName} />
                            {error.first_name && <div className='invalid-feedback'>{error.first_name}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input type='text' placeholder='Enter Last Name' className={`form-control ${error.last_name? 'is-invalid' : ''}`} name='last_name' value={last_name} onChange={handleLastName} />
                            {error.last_name && <div className='invalid-feedback'>{error.last_name}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input type='email' placeholder='Enter Email' className={`form-control ${error.email_id? 'is-invalid' : ''}`} name='email_id' value={email_id} onChange={handleEmailId} />
                            {error.email_id && <div className='invalid-feedback'>{error.email_id}</div>}
                        </div>
                        <button className='btn btn-success' type='submit'>Submit</button> 
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent