
import { get } from "../../api/get/get";
import { UserCard } from "../user-card/UserCard";
import { ContactType } from "../contact-form/ContactForm";
import { deleteContact } from "../../api/delete/delete";
import { useEffect } from "react";

export function UserWrapper({
  contacts,
  setContacts,
  setEditContact
}: {
  contacts: ContactType[];
  setContacts: (e: ContactType[] | []) => void;
  setEditContact: (e:ContactType | null)=> void
}) {
  const handleDelete = async (id:number) => {
    await deleteContact(id).then(()=>{
      get().then((res) => setContacts(res));
    });

  };

  const handleEdit=async(contact:ContactType)=>{
    setEditContact(contact)
  }

  useEffect(() => {
    const getContacts = async () => {
      const data = await get();
      setContacts(data);
    };
    getContacts();
  }, []);
  return (
    <div className="w-1/2 flex flex-col gap-4 items-center h-full ml-4 ">
      <h2 className="text-2xl font-bold">لیست کاربران</h2>
      <div className="w-full h-3/5 rounded-md shadow-lg flex flex-wrap gap-8 p-4 bg-gray-100">
      {contacts.map((contact) => {
        return (
          <UserCard
          key={contact.id}
          contact = {contact}
            onDelete={()=>handleDelete(contact.id)}
            onEdit={()=>handleEdit(contact)}
          />
        );
      })}
      </div>
    </div>
  );
}
