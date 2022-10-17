import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import TextField from "../form/TextField";

const EditUser = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  const handleEditUser = () => {
    setValue({ name: "", email: "" });
    console.log(value);
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label={"Name"}
        inputProps={{ type: "text", placeholder: "Name" }}
        value={value.name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
      />
      <TextField
        label={"Email"}
        inputProps={{ type: "email", placeholder: "Email" }}
        value={value.email}
        onChange={(e) => setValue({ ...value, email: e.target.value })}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};
export default EditUser;
