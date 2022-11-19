import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Base from "../components/Base";

const AllUser = () => {

    const [user, setUser] = useState([]);
   const init=()=>{
    loadUser();
   }
    useEffect(() => {                                                                                   
        init();//initial call
      }, []); //dependency - blank array / to run once

      const loadUser = async () => {
        const result = await axios.get("http://localhost:8082/users");
        console.log(result);
        setUser(result.data);
      };

      const deleteUser =  (uID) => {
        axios.delete(`http://localhost:8082/user/${uID}`);
        init();
      };

      return (
        <Base>
        
        <div className="container">
          <div className="py-4">
            <h3>All Users Details</h3>
            <table className="table border shadow">
              <thead className ="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {user.map((Use, index) => (
                  <tr key={index}>
                    <th  scope="row">{Use.userID}</th>
                    <td>{Use.userName }</td>
                    <td>{Use.useremail}</td>
                    
                    <td>
                      <Link className="btn btn-primary mr-2" to={`/viewuser/${Use.userID}`}>
                        View
                      </Link>
                      <Link className="btn btn-outline-primary mr-2" to={`/edituser/${Use.userID}`}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-danger"
                        onClick={() => deleteUser(Use.userID)} >
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

export default AllUser;