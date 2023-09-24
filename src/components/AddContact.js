import React from "react";
import { Link } from "react-router-dom";


class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === ""){
            alert("Please enter all information");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({
            name: "",
            email: ""
        });
    };
    render() {
        return (
            <div className="ui main">
                <h1>Add Contact</h1>
                <Link to="/list" className="ui button right">List Contact</Link>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e)=> this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"
                        value={this.state.email}
                        onChange={(e)=>this.setState({email: e.target.value})}/>
                    </div>
                    <button type="submit" className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}


export default AddContact;