import axios from "axios";

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
    <>
      <div>Admiin Page</div>
    </>
  );
};

export default Admin;
