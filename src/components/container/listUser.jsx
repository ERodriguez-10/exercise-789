import React, { useState } from "react";

import { Button } from "../pure/createBtn";

import { Contact } from "../../models/contact.class";
import { User } from "../pure/user";

export function ListUser() {

  const userA = new Contact(0, 'Mark', 'Otto', 'markotto@example.com', '@mdo', true, 'https://picsum.photos/id/1/100');
  const userB = new Contact(1, 'Jacob', 'Thronton', 'jathronto@example.com', '@fat', false, 'https://picsum.photos/id/29/100');
  const userC = new Contact(2, 'Larry', 'The bird', 'thebird@example.com', '@twitter', true, 'https://picsum.photos/id/23/100');
  const userD = new Contact(3, 'Ariel', 'Templeton', 'templeariel@example.com', '@tariel', true, 'https://picsum.photos/id/4/100');
  const userE = new Contact(4, 'Asuel', 'Otto', 'asuelotto@example.com', '@asuel', false, 'https://picsum.photos/id/15/100');

  const [dataUser, setDataUser] = useState([userA, userB, userC, userD, userE]);

  const handleDelete = (id) => {
    const filterData = dataUser.filter((prevState) => {
      return prevState.id !== id
    });
    setDataUser(filterData);
  }

  const handleChange = (user) => {
    setDataUser((prevState) => [...prevState, user]);
  }

  return (
    <div className="container text-center py-5">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Profile Picture</th>
            <th>Nickname</th>
            <th>Email</th>
            <th>Status</th>
            <th>. . .</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((people, i) => {
            return <User key={i} id={i} user_info={people} handleDelete={handleDelete} />
          })}
        </tbody>
      </table>
      <Button handleChange={handleChange} />
    </div>
  )
}