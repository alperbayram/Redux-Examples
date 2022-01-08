import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { contactSelectors } from "../../redux/contactsSlice";
import EditForm from "./EditForm";

function Edit() {
  const { id } = useParams();
  const contact = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );

  if (!contact) {
    return (
        <Navigate to="/" replace={true} />
      )
  }

  return (
    <div>
      <h1>Edit</h1>
      <EditForm contact={contact} />
    </div>
  );
}

export default Edit;
