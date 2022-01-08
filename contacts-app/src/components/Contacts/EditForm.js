import { useState } from "react";
import { updateContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


function EditForm({ contact }) {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone_number);
  const navigate = useNavigate();


  const dispatch = useDispatch();

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;
    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phone_number: number,
        },
      })
    );

    navigate('/');
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div className="btn">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditForm;
