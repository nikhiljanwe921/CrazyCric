import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Base from "../components/Base";
import {Row, Col } from "reactstrap";
import emp1 from "../components/img/emp1.jpg";
export default function ViewEmployee() {
  const [employee, setEmployee] = useState({
    employeeID: "",
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    job: "",
  });

  const { empID } = useParams();

  console.log(empID);

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee =  () => {
   axios.get(`http://localhost:8082/employee/${empID}`).then((response) => {
      console.log(response);
      setEmployee(response.data);
      console.log(response.data);
     },(error) => {
      console.log(error)
     }
     )
  };

  return (
    <Base>
    <br />
  <Row>
    <Col>
    <div>
            <img src={emp1} className="center"
           ></img>
          </div>
    </Col>
    <Col>
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4" style={{color:'blue'}}>Our Employee Details</h2>

          <div className="card">
            <div className="card-header">
              <p style={{color:'blue' ,fontSize:'20px'}}>Details of Employee id :</p>{'   '} {employee.empID}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:{'     '}</b>
                  {employee.firstName + employee.lastName}
                </li>
                <li className="list-group-item">
                  <b>UserName: {'    '}</b>
                  {employee.userName}
                </li>
                <li className="list-group-item">
                  <b>Job: {'   '}</b>
                  {employee.job}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/allemployee"}>
            Back
          </Link>
        </div>
      </div>
    </div>
    </Col>
    </Row>
    <br/>
    </Base>
  );
}

