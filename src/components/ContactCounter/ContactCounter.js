import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import css from "./ContactCounter.module.css";

export const ContactCounter = () => {
  const contacts = useSelector(getContacts);

  const count = contacts.reduce(
    (acc, contact) => {
      if (contact.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
