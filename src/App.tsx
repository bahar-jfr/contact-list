import { useState } from "react";
import { ContactForm, ContactType } from "./components/contact-form/ContactForm";
import { UserWrapper } from "./components/user-wrapper/UserWrapper";
import { Layout } from "./layouts/Layout";

export function App() {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [editContact,setEditContact]=useState<ContactType|null>(null)
  return (
    <Layout >
      <div className="flex gap-10 h-screen ">
      <ContactForm setContacts={setContacts} contacts={contacts}  editContact={editContact} setEditContact={setEditContact} />
     <UserWrapper setContacts={setContacts} contacts={contacts} setEditContact={setEditContact}/>
      </div>
    </Layout>
  );
}
