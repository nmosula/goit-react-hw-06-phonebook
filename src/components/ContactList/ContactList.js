import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { getContacts, getStatusFilter } from "redux/selectors";
import { statusFilters } from "redux/constants";
import css from "./ContactList.module.css";

const getVisibleContacts = (contacts, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return contacts.filter(contact => !contact.completed);
    case statusFilters.completed:
      return contacts.filter(contact => contact.completed);
    default:
      return contacts;
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
