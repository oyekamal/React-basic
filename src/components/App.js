import './App.css';
import React, {useState, useEffect} from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY  = 'contacts';
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: contacts.length + 1, ...contact }]);
}

  const removeContactHandler = (id) => {
    setContacts(contacts.filter(contact => contact.id!== id));
  };
  //   {
  //     id: 1,
  //     name: 'kamal',
  //     email: 'oy@sexample.com',
  //   },
  //   {
  //     id: 2,
  //     name: 'bilal',
  //     email: 'jamil@example.com',
  //   }
  // ];
  useEffect(() => {
    const retriveContents =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    
    
    if (retriveContents && contacts.length === 0) {
      console.log("retriveContents");
      console.log(retriveContents);
      setContacts(retriveContents);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  
  return (
    <div className='ui container' >
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
    
  );
}

export default App;
