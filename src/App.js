import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Imagen from "./grupos.png";
// import Button from "react-bootstrap/Button";
// import Saludo from "./component/saludo/Saludo"; //componente funcional
// import { Table } from "./component/table/Table";
// import Footer from "./component/footer/Footer";
import { Table } from "react-bootstrap";
import { userApi } from "./api/UserApi";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
    
  }, []);

  const getUsers = async () => {
    const response = await userApi.get("https://reqres.in/api/users?page=2");
    setUsers(response.data.data);
  };


  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <>
              <tr>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
