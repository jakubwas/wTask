import React, { useState } from "react";

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;
  return <div></div>;
};

export default RegisterForm;
