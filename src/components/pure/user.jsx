import React, { useState } from "react";

import './user.css';

export function User({user_info, handleDelete, id}){

  const idTarget = `#exampleTarget${id}`;
  const idModal = `exampleTarget${id}`

  const [status, setStatus] = useState(user_info.available)

  const handleStatus = () => {
    setStatus((prevState) => !prevState)
  }

  return(
    <tr>
      <td className="align-middle">{id}</td>
      <td><img src={user_info.profile_picture} alt="Profile user"/></td>
      <td className="align-middle">{user_info.nickname}</td>
      <td className="align-middle">{user_info.email}</td>
      <td className="align-middle">{status ? <div><i className="bi bi-circle-fill online" onClick={handleStatus}></i> ONLINE</div> : <div><i className="bi bi-circle-fill offline" onClick={handleStatus}></i> OFFLINE</div>}</td>
      <td className="align-middle">
        <div className="d-grid gap-2 md-auto">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idTarget}>Show Info</button>
          <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Contact Info</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <img src={user_info.profile_picture} alt="Profile user" className="mb-3"/>
                  <p>Full name: {user_info.name} {user_info.surname}</p>
                  <p>Email: {user_info.email}</p>
                  <p>Nickname: {user_info.nickname}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <button type="button" className="btn btn-danger" onClick={() => handleDelete(user_info.id)}>Delete User</button>
        </div>
      </td>
    </tr>
  )
}