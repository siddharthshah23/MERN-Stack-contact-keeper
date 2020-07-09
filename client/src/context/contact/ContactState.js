import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Harin Shah",
        email: "harinshah45@yahoo.com",
        phone: "6478699079",
        type: "professional",
      },

      {
        id: 2,
        name: "Siddharth Shah",
        email: "sid35@yahoo.com",
        phone: "6473579079",
        type: "personal",
      },

      {
        id: 1,
        name: "Alex smith",
        email: "alexsmith@yahoo.com",
        phone: "6478645829",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact

  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delte contact

  //Update contact

  // Filter contact

  // clear filter

  // Set current

  // clear current

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
