import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { signup } from "../../actions/auth";

export const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, history));
  };

  return (
    <div>
      <input
        placeholder="email"
        type="text"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        placeholder="confirm password"
        type="confirmPassword"
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
      />

      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};
