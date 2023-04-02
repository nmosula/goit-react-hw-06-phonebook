import { useDispatch } from "react-redux";
import { Button } from "components/Button/Button";
import { addContact } from "redux/contactsSlice";
import css from "./ContactForm.module.css";

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.contactName.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="contactName"
        placeholder="Enter Contact name..."
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
};
