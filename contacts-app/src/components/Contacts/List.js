import React, { useState } from "react";
import "../../App.css";

import { contactSelectors, removeAllContact } from "../../redux/contactsSlice";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);

  const dispatch = useDispatch();

  const handledeleteAll = () => {
    if (window.confirm("are you sure ?")) {
      dispatch(removeAllContact());
    }
  };
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  console.log(contacts);
  return (
    <div>
      {total > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontSize: 12,
            cursor: "pointer",
          }}
          onClick={handledeleteAll}
        >
          Delete All
        </div>
      )}
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list">
        {filtered.map((contact) => (
          <Item key={contact.id} item={contact} />
        ))}
      </ul>
    </div>
  );
}

export default List;
