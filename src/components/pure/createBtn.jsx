import React from "react";

import { Form } from "./form";

export function Button({handleChange, handleSubmit}){
  return(
    <div className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-2">
          <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#create-modal">Create New User</button>
          <div className="modal fade" id="create-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Create a new User</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <Form handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
  <div className="row mb-3 justify-content-center">
    <div className="col-sm-2">
      <label htmlFor="id_user" className="col-form-label">ID</label>
    </div>
    <div className="col-sm-8">
      <input type="text" id="id_user" className="form-control" aria-describedby="idUser" />
    </div>
  </div>
  <div className="row mb-3 justify-content-center">
    <div className="col-sm-2">
                      <label htmlFor="user_name" className="col-form-label">Name</label>
                    </div>
                    <div className="col-sm-8">
                      <input type="text" id="user_name" className="form-control" aria-describedby="userName" />
                    </div>
                  </div>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-sm-2">
                      <label htmlFor="user_surname" className="col-form-label">Surname</label>
                    </div>
                    <div className="col-sm-8">
                      <input type="text" id="user_surname" className="form-control" aria-describedby="userSurname" />
                    </div>
                  </div>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-sm-2">
                      <label htmlFor="user_email" className="col-form-label">Email</label>
                    </div>
                    <div className="col-sm-8">
                      <input type="email" id="user_email" className="form-control" aria-describedby="userEmail" />
                    </div>
                  </div>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-sm-2">
                      <label htmlFor="user_nickcname" className="col-form-label">Nickname</label>
                    </div>
                    <div className="col-sm-8">
                      <input type="text" id="user_nickname" className="form-control" aria-describedby="userNickname" />
                    </div>
                  </div>
*/