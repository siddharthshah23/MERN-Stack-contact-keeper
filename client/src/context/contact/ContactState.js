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
        id: 3,
        name: "Alex smith",
        email: "alexsmith@yahoo.com",
        phone: "6478645829",
        type: "professional",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact

  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delte contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter contact

  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };
  // clear filter

  const clearFilter = (text) => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Set current
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // clear current
  const clearCurrent = (contact) => {
    dispatch({ type: CLEAR_CURRENT });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
