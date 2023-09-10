import { useState } from "react";

const useSignUp = ({ callback }) => {
  const [formInputs, setFormInputs] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInputs);
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    setFormInputs((formInputs) => ({
      ...formInputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleChange,
    formInputs,
  };
};

export default useSignUp;
