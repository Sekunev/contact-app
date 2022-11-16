import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import ToastifySuccess from "./utils/customToastify";
import { AddUser, UpdateUser } from "./utils/functions";

const initialValue = {
  userName: "",
  phoneNumber: "",
  gender: "",
};
function App() {
  const [info, setInfo] = useState(initialValue);
  const [isAdd, setIsAdd] = useState("ADD");

  const hanleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      UpdateUser(info);
    } else {
      AddUser(info);
    }
    ToastifySuccess("Başarılı");
    setInfo(initialValue);
    setIsAdd("ADD");
  };

  const editUser = (id, userName, phoneNumber, gender) => {
    setIsAdd("UPDATE");
    setInfo({ id, userName, phoneNumber, gender });
  };
  return (
    <div className="App">
      <Form
        info={info}
        setInfo={setInfo}
        hanleSubmit={hanleSubmit}
        isAdd={isAdd}
      />
      <Table editUser={editUser} />
      <ToastContainer />
    </div>
  );
}

export default App;
