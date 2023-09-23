import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {

    const renderContactList = props.contacts.map((contact) => {
        return (    
            <ContactCard key={contact.id} contact={contact}/>
        );
    })
    return (
        <div className="ui celled list">
            {/* <h1>Contact List</h1> */}
            {renderContactList}
        </div>
    );
};

export default ContactList;