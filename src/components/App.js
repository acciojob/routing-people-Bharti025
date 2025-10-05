
import React from "react";
import './../styles/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UserList from "./UserList";
import UserDetail from "./UserDetail";

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<UserList/>}/>
         <Route path="/users/:id" element={<UserDetail/>}/>
      </Routes>
      </Router>   
   
    </div>
  )
}

export default App
