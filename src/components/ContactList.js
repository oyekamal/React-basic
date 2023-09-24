import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = (props) => {

    const deleteContacthandler = (contact) => {
        props.getContactId(contact);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} clickHandler={deleteContacthandler} />
        );
    })
    return (
        <div className="main">
            <h2>
                Contact List
            </h2>
            <Link to="/">
                <button className="ui button blue right" >Add Contact</button>
            </Link>

            <div className="ui celled list">
                {/* <h1>Contact List</h1> */}
                {renderContactList}
            </div>
        </div>

    );
};

export default ContactList;