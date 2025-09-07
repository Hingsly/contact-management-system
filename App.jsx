import { useState } from "react";
import ContactForm from "./componenets/ContactForm";
import ContactList from "./componenets/ContactList";

export default function App() {
  const[contacts, setContacts] = useState([]);
  return (
    <div className="p-8 max-w-[1440px] mx-auto grid grid-cols-3 gap-[50px]"> 
      <div className="col-span-1 space-y-4">
        <h1 className="text-[32px] font-bold mb-10 text-[#00277a]
        ">Contact Management</h1>
        <ContactForm setContacts={setContacts} contacts={contacts}/>
      </div>
      <div className="col-span-2 space-y-4">
        <ContactList setContacts={setContacts} contacts={contacts}/>
      </div>
    </div>
  )
}
