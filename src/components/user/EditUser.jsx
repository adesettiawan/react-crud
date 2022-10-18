import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../../features/users/userSlice";
import Button from "../button/Button";
import TextField from "../form/TextField";

const EditUser = () => {
  const users = useSelector((store) => store.users);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingUser = users.filter((user) => user.id === id);
  const { name, email } = existingUser[0];
  const [value, setValue] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValue({ name: "", email: "" });
    dispatch(editUser({ id: id, name: value.name, email: value.email }));
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
