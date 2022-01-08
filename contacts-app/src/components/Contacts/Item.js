import React from "react";
import "../../App.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { Link } from "react-router-dom";


function Item({ item }) {
  const dispatch = useDispatch();
  const handledelete = (id) => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li>
      <span>{item.name}</span>
      <span>{item.phone_number}</span>
      <div className="edit">
        <span>
          <Link to={`/edit/${item.id}`}>Edit</Link>
        </span>
        <span className="deletebtn" onClick={() => handledelete(item.id)}>
          x
        </span>
      </div>
    </li>
  );
}

export default Item;
