import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import editEmployee from "./editEmployee";
import Base from "../components/Base";
const AllEmployee = () => {

    const [emps, setEmployee] = useState([]);

    useEffect(() => {                                                                                   
        loadEmployee();//initial call
      }, []); //dependency - blank array / to run once

      const loadEmployee = async () => {
        const result = await axios.get("http://localhost:8082/employees");
        console.log(result);
        setEmployee(result.data);
      };

      const deleteEmployee = (empID) => {
        
        axios.delete(`http://localhost:8082/employees/${empID}`);
        loadEmployee();
      };

      return (
        <Base>
        <div className="container">
          <div className="py-4">
            <h3 style={{color:'blue'}}>All Employee Details</h3><br/>
            <table className="table border shadow">
              <thead className ="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Position</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {emps.map((Emp, index) => (
                  <tr key={index}>
                    <th  scope="row">{Emp.employeeID}</th>
                    <td>{Emp.firstName +" "+ Emp.lastName}</td>
                    <td>{Emp.userName}</td>
                    <td>{Emp.job}</td>
                    <td>
                      <Link className="btn btn-primary mr-2" to={`/viewemployee/${Emp.employeeID}`}>
                        View
                      </Link>
                      <Link className="btn btn-outline-primary mr-2" to={`/editemployee/${Emp.employeeID}`}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-danger"
                        onClick={() => deleteEmployee(Emp.employeeID)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </Base>
      );


};

export default AllEmployee;