import "./App.css";
import Login from "./Authentacation/Login";
import Signup from "./Authentacation/Signup";
import Forget from "./Authentacation/Forget";
import Dashboard from "./Components/Home/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* Routes this is multi page routing  */}
        <Routes>
          {/* public route */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/forgot" element={<Forget />}></Route>
          {/* protected route */}
          <Route path="/" element={<Dashboard />}>
            Dashboard
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
