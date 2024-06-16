import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
// removed the part from the screenshot
  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.contactItem}>
              <Contact
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
