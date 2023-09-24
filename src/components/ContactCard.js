import React from "react";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <div className="content">
                <Link to={`/contact/${id}`}>
                    <div className="header">
                        {name}
                    </div>
                    <div>
                        {email}
                    </div>
                </Link>

            </div>
            <i className="trash alternate outline icon" onClick={() => props.clickHandler(id)}
                style={{ color: 'red', marginTop: "7px" }}></i>

        </div>
    );
};

export default ContactCard;