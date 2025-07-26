import axios from 'axios'

const API= 'http://localhost:8081/api/employees/deleteempbyid';
const API_BASE = 'http://localhost:8081/api/employees/updateemp';
const API_BASE_URL = 'http://localhost:8081/api/employees/list';
const CREATE_EMPLOYEE_URL = 'http://localhost:8081/api/employees/saveemp';

export const listEmployees = () => {
    return axios.get(API_BASE_URL);
}   

export const createEmployee = (employee) => axios.post(CREATE_EMPLOYEE_URL, employee);

export const getEmployee=(employeeId)=>axios.get(API_BASE_URL + '/' + employeeId);

export const updateEmployee=(employeeId, employee) => axios.put(API_BASE + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(API + '/' + employeeId);