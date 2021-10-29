import React from "react";
import { Create } from "./CRUD/Create";
import { Delete } from "./CRUD/Delete";
import { Read } from "./CRUD/Read";
import { Update } from "./CRUD/Update";

import { SignIn } from "./auth/SignIn";
import { SignUp } from "./auth/SignUp";
import { LogOut } from "./auth/LogOut";
import { ConditionalDisplay } from "./auth/ConditionalDisplay";
export const Home = () => {
  return (
    <div>
      <h1>Create</h1>
        <Create />
      <h1>Read</h1>
        <Read />
      <h1>Update</h1>
        <Update />
      <h1>Delete</h1>
        <Delete />

        <h1>Sign In</h1>
        <SignIn />
        <h1>Sign Up</h1>
        <SignUp />
        <h1>Logout</h1>
        <LogOut />
        <h1>Conditional Display</h1>
        <ConditionalDisplay />
    </div>
  );
};
