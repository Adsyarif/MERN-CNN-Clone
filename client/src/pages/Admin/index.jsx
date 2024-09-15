import axios from "axios";
import { Sidebar, Header } from "../../components/Admin";
import { Route, Routes } from "react-router-dom";
import Dasboard from "./Dashboard";

const Admin = () => {
  axios
    .get("http://localhost:8080/api/isAuth", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log("response is: ", response.data.data.userId);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div className="flex flex-col min-h-screen max-h-full dashboard w-full">
      <div className="flex">
        <Sidebar />
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Dasboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
