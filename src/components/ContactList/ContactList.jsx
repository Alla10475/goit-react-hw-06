import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filter.name);
  const filteredContacts =
    selectNameFilter.trim() !== ""
      ? selectContacts.filter((value) =>
          value.name
            .toLowerCase()
            .includes(selectNameFilter.toLowerCase().trim())
        )
      : selectContacts;

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
                <Contact {...contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
