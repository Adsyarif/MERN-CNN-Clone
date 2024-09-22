import axios from "axios";
import { Sidebar, Header } from "../../components/Admin";
import { Route, Routes } from "react-router-dom";
import { CreateNews, Dasboard } from "./adminPage";

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
    <div className="flex flex-col min-h-screen max-h-full dashboard w-full bg-[#f1f5f9]">
      <div className="flex">
        <Sidebar />
        <div className="flex-grow flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Dasboard />} />
            <Route path="/news-management/create" element={<CreateNews />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
