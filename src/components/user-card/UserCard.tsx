import { UserButton } from "../buttons/UserButton";
import { ContactType } from "../contact-form/ContactForm";

export function UserCard({contact,onDelete,onEdit}:{contact:ContactType,onDelete:()=>Promise<void>,onEdit:()=>void}) {
  return (
    <div className="flex flex-col gap-5 bg-gray-200 rounded-md shadow-lg border border-gray-300 w-2/5 py-5 px-7 h-fit">
    <div>  <p className="flex gap-2"><strong>نام :</strong>{contact.firstName} {contact.lastName} </p>
      <p className="flex gap-2"><strong>شماره موبایل :</strong> {contact.phoneNum}</p>
      <p className="flex gap-2"><strong>نسبت :</strong> {contact.relation}</p>
      <p className="flex gap-2"><strong>ایمیل :</strong> {contact.email}</p></div>
      <UserButton onDelete={onDelete} onEdit={onEdit}/>
    </div>
  );
}
