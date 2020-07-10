import React, { useContext } from "react";
import ContactContext from "../../../src/context/contact/contactContext";

const ContactItems = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  const contactContext = useContext(ContactContext);

  const onDelete = (e) => {
    e.preventDefault();
    contactContext.deleteContact(id);
  };
  const onEdit = () => {
    contactContext.setCurrent(contact);
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list" style={{ padding: "10px" }}>
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i>{" "}
            {email.charAt(0).toUpperCase() + email.slice(1)}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};
export default ContactItems;
