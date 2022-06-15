import "./App.css";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          console.log("re", response);
          localStorage.setItem(" item2", response);
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed");
        })
        .then((resObject) => {
          localStorage.setItem("item1", resObject);
          console.log(resObject);
          setUser(resObject.user);
          // console.log(resObject.user);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, []);

  console.log(user);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={!user ? <Navigate to="/login" /> : <Post />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
