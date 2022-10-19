import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../features/users/userSlice";
import Button from "../button/Button";
import TextField from "../form/TextField";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  // add user
  const handleAddUser = () => {
    setValue({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: value.name,
        email: value.email,
      })
    );
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
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
