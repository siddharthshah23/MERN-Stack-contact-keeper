import React, { useContext, Fragment } from "react";
import ContactContext from "../../../src/context/contact/contactContext";
import ContactItem from "./ContactItems";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact}></ContactItem>
      ))}
    </Fragment>
  );
};

export default Contacts;
