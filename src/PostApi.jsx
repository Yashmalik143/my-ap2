import { useEffect, useState } from "react";
import {Table,Button} from 'react-bootstrap';
export default function PostAPi() {
  const [name, setState] = useState("");
  const [users, setUsers] = useState([]);
  function Call() {
    // console.log(name)

    fetch("http://lagimoj-001-site1.dtempurl.com/api/Users/add-customer", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(name),
    }).then((res) => console.log(res));
  }
  function ListUsers() {
    fetch("http://lagimoj-001-site1.dtempurl.com/api/Users/get-all-users")
      .then((d) => d.json())
      .then((res) => {
        setUsers(res);
        console.log(users.length);
      });
  }
  function deleteUser(id){
    console.log(id)
    var str = ("http://lagimoj-001-site1.dtempurl.com/api/Users/delete-user-by-id?id="+String(id))

    fetch(str,{method:'DELETE'}).then((Res) => console.log(Res))

    ListUsers();
  }
  return (
    <>
      <h1>Hello from Post Api</h1>
      <input
        onChange={(e) => {
          setState({ name: e.target.value });
        }}
      ></input>
      <button onClick={Call}>Post</button>

      <br />
      <button onClick={ListUsers}>List</button>
      <br />
      <div>
                {users.length > 0 && (
                    <Table striped bordered hover >
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Role</th>
                        </thead>
                    {users.map(user => (
                        <tbody>

                            <th>{user.id}</th>
                            <th>{user.name}</th>
                            <th>{user.roleName}</th>
                            <th><Button  variant="danger"
                            size="lg" 
                            onClick={()=>deleteUser(user.id)} > Delete </Button></th>
                        </tbody>
                         
                          
                       // <li key={user.id}>{user.id}  {user.name}    {user.roleName}</li>
                    ))}
                    </Table>
                )}
                </div>

    </>
  );
}
