import React, { useReducer } from "react";
import contactContext from "./contactContext";
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
        type: "personal",
      },

      {
        id: 2,
        name: "Siddharth Shah",
        email: "sid35@yahoo.com",
        phone: "6473579079",
        type: "Bussiness",
      },

      {
        id: 1,
        name: "Alex smith",
        email: "alexsmith@yahoo.com",
        phone: "6478645829",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact

  //Delte contact

  //Update contact

  // Filter contact

  // clear filter

  // Set current

  // clear current

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
