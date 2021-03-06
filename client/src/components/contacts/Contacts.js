import React, { useContext, Fragment } from "react";
import ContactContext from "../../../src/context/contact/contactContext";
import ContactItem from "./ContactItems";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition timeout={500} classNames="item">
                <ContactItem contact={contact}></ContactItem>
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition timeout={500} classNames="item">
                <ContactItem contact={contact}></ContactItem>
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
