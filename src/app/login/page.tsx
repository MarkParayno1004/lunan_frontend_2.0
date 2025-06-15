"use client";

import React from "react";
import { loginHelper } from "./loginHelper";

export default function Login() {
  const [submitForm, setSubmitForm] = React.useState({
    userName: "",
    userPassword: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubmitForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting", submitForm);
    loginHelper(submitForm.userName, submitForm.userPassword);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          name="userName"
          placeholder="email"
          value={submitForm.userName || ""}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="userPassword"
          placeholder="password"
          value={submitForm.userPassword || ""}
          onChange={handleFormChange}
        />
        <button type="submit" className="rounded-full bg-primary">
          Login
        </button>
      </form>
    </div>
  );
}
