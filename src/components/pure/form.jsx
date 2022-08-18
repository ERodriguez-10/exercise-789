import React, { useRef } from "react";
import { Contact } from '../../models/contact.class';

export function Form({handleChange}){

  const idRef = useRef('');
  const nameRef = useRef('');
  const surnameRef = useRef('');
  const emailRef = useRef('');
  const nicknameRef = useRef('');


  function addNewUser(e) {
    e.preventDefault();
    const newUser = new Contact(
        idRef.current.value,
        nameRef.current.value,
        surnameRef.current.value,
        emailRef.current.value,
        nicknameRef.current.value,
        false,
        'https://picsum.photos/id/55/100'
    );
    handleChange(newUser);
    e.target.reset();
  }

  return (
    <form onSubmit={addNewUser}>
      <div className="form-group row mb-3">
        <label htmlFor="inputId" className="col-sm-2 col-form-label">ID</label>
        <div className="col-sm-10">
          <input ref={idRef} type="number" className="form-control" id="inputId" placeholder="Ex. 29" />
        </div>
      </div>
      <div className="form-group row mb-3">
        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input ref={nameRef} type="text" className="form-control" id="inputName" placeholder="Ex. Mikel" />
        </div>
      </div>
      <div className="form-group row mb-3">
        <label htmlFor="inputSurname" className="col-sm-2 col-form-label">Surname</label>
        <div className="col-sm-10">
          <input ref={surnameRef} type="text" className="form-control" id="inputSurname" placeholder="Ex. Scott" />
        </div>
      </div>
      <div className="form-group row mb-3">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input ref={emailRef} type="email" className="form-control" id="inputEmail" placeholder="Ex. mscott@example.com" />
        </div>
      </div>
      <div className="form-group row mb-3">
        <label htmlFor="inputNickanme" className="col-sm-2 col-form-label">Nickname</label>
        <div className="col-sm-10">
          <input ref={nicknameRef} type="text" className="form-control" id="inputNickname" placeholder="Ex. @mscott" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save Settings</button>
    </form>
  )
}