import Home from "./components/pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
