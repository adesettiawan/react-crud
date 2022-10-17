import { Route, Routes } from "react-router-dom";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";
import UserLists from "./components/user/UserLists";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl md:pt-32">
      <h1 className="text-center items-center text-gray-700 font-bold text-2xl pb-10">
        CRUD With Redux Toolkit
      </h1>
      <Routes>
        <Route path="/" element={<UserLists />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
