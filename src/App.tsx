import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { useEffect, useState } from "react";
import User from "./model/User";


function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(()=>{
    const fetchUser = async():Promise<void> => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const userData = await response.json();

      setUsers(userData);
    }
    fetchUser();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home users={users}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
