import React, { useEffect, useState } from "react";
import { AddButton } from "../buttons/AddButton";

import { post } from "../../api/post/post";
import { get } from "../../api/get/get";
import { putContact } from "../../api/put/put";

export interface ContactType {
  id: number;
  firstName: string;
  lastName: string;
  phoneNum: string;
  relation: string;
  email: string;
}

export function ContactForm({
  contacts,
  setContacts,
  editContact,
  setEditContact,
}: {
  contacts: ContactType[];
  setContacts: (e: ContactType[] | []) => void;
  editContact: ContactType | null;
  setEditContact: (e: ContactType | null) => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [relation, setRelation] = useState("نسبت");
  const [email, setEmail] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumError, setPhoneNumError] = useState("");
  const [relationError, setRelationError] = useState("");
  const [emailError, setEmailError] = useState("");
const [textButton,setTextButton] = useState("اضافه کردن")

  useEffect(() => {
    if (editContact) {
      setFirstName(editContact.firstName);
      setLastName(editContact.lastName);
      setPhoneNum(editContact.phoneNum);
      setRelation(editContact.relation);
      setEmail(editContact.email);
      setTextButton("ویرایش کردن")
    }
  }, [editContact]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    if (firstName.trim() === "") {
      setFirstNameError("لطفا نام را وارد کنید");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (lastName.trim() === "") {
      setLastNameError("لطفا نام خانوادگی را وارد کنید");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (phoneNum.trim() === "") {
      setPhoneNumError("لطفا شماره موبایل را وارد کنید");
      isValid = false;
    } else {
      setPhoneNumError("");
    }

    if (relation.trim() === "نسبت") {
      setRelationError("لطفا نسبت خود را انتخاب کنید");
      isValid = false;
    } else {
      setRelationError("");
    }

    if (email.trim() === "") {
      setEmailError("لطفا ایمیل خود را وارد کنید");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!isValid) {
      return;
    }

    if (editContact) {
      const updatedContact = {
        ...editContact,
        firstName,
        lastName,
        phoneNum,
        relation,
        email,
      };
      await putContact(updatedContact).then(() => {
        get().then((res) => setContacts(res));
      });
      setEditContact(null);
      setTextButton("اضافه کردن")
    } else {
      const newContact = {
        firstName,
        lastName,
        phoneNum,
        relation,
        email,
        id: Date.now(),
      };
      const data = await post(newContact);
      setContacts([...contacts, data]);
    }

    // Reset form fields
    setFirstName("");
    setLastName("");
    setPhoneNum("");
    setRelation("نسبت");
    setEmail("");
  };

  return (
    <div className="w-1/2 flex flex-col gap-4 items-center h-full">
      <h2 className="text-2xl font-bold">اضافه/ویرایش کاربران</h2>
      <form
        className="flex flex-col gap-1.5 w-full py-3 px-6 border rounded-md shadow-lg mr-4 h-4/6"
        onSubmit={handleSubmit}
      >
        <label htmlFor="first-name">نام : </label>
        <input
          id="first-name"
          className="outline-none py-2 px-3 rounded-md shadow-md border "
          type="text"
          placeholder="نام ... "
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p className="text-xs text-red-600">{firstNameError}</p>
        <label htmlFor="last-name">نام خانوادگی : </label>
        <input
          id="last-name"
          className="outline-none py-2 px-3 rounded-md shadow-md border "
          type="text"
          placeholder="نام خانوادگی ... "
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <p className="text-xs text-red-600">{lastNameError}</p>
        <label htmlFor="phone-number">شماره موبایل : </label>
        <input
          id="phone-number"
          className="outline-none py-2 px-3 rounded-md shadow-md border "
          type="text"
          placeholder="شماره موبایل ... "
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
        />
        <p className="text-xs text-red-600">{phoneNumError}</p>
        <label htmlFor="relation">نسبت : </label>
        <select
          id="relation"
          onChange={(e) => setRelation(e.target.value)}
          className="outline-none py-2 px-3 rounded-md shadow-md border "
        >
          <option value={relation} >نسبت</option>
          <option value="دوست">دوست</option>
          <option value="همکار">همکار</option>
          <option value="خانواده">خانواده</option>
        </select>
        <p className="text-xs text-red-600">{relationError}</p>
        <label htmlFor="email">ایمیل : </label>
        <input
          id="email"
          className="outline-none py-2 px-3 rounded-md shadow-md border "
          type="email"
          placeholder="ایمیل ... "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-xs text-red-600">{emailError}</p>
        <AddButton text={textButton} />
      </form>
    </div>
  );
}
