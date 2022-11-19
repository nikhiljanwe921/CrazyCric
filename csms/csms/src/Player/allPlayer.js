import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Base from "../components/Base";

const AllPlayer = () => {

    const [player, setPlayer] = useState([]);
    const init=()=>{
      loadPlayer();
    }
    useEffect(() => {                                                                                   
        loadPlayer();//initial call
      }, []); //dependency - blank array / to run once

      const loadPlayer = async () => {
        const result = await axios.get("http://localhost:8082/players");
        console.log(result);
        setPlayer(result.data);
      };
      const deletePlayer = (pID) => {
        
        axios.delete(`http://localhost:8082/players/${pID}`);
        loadPlayer();
      };
     
    
      return (
    <Base>
        <div className="container">
          <div className="py-4">
            <h3>All Players Detail</h3>
            <table className="table border shadow">
              <thead className ="thead-dark">
                <tr>
                  <th scope="col">Player no.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Team Name</th>
                  <th scope="col">Ability</th>
                  <th scope="col">Position</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {player.map((Play, index) => (
                  <tr key={index}>
                    <th  scope="row">{Play.playerID}</th>
                    <td>{Play.playerFullname }</td>
                    <td>{Play.teamName}</td>
                    <td>{Play.ability}</td>
                    <td>{Play.position}</td>
                    <td>
                      <Link className="btn btn-primary mr-2" to={`/viewplayer/${Play.playerID}`}>
                        View
                      </Link>{'  '}
                      <Link className="btn btn-outline-primary mr-2" to={`/editplayer/${Play.playerID}`}
                      >
                        Edit
                      </Link>{'  '}
                      <Link
                        className="btn btn-danger"
                        onClick={() => deletePlayer(Play.playerID)}
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

export default AllPlayer;