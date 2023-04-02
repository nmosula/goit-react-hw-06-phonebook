import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { deleteContact, toggleCompleted } from "redux/contactsSlice";
import css from "./Contact.module.css";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  const handleToggle = () => dispatch(toggleCompleted(contact.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={contact.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{contact.name}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
