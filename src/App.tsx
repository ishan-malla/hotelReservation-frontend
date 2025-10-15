import { Routes, Route } from "react-router";
import Landing from "./pages/Landing/Landing";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RoomPage from "./pages/RoomPage";
import RoomDisplayPage from "./pages/RoomDisplayPage";
import AdminLogin from "./pages/admin/AdminLogin";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/rooms" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/room" element={<RoomPage />}></Route>
      <Route path="/room-display" element={<RoomDisplayPage />}></Route>
      <Route path="/admin/login" element={<AdminLogin />}></Route>
      <Route path="/admin/homwPage" element={<AdminLogin />}></Route>
    </Routes>
  );
};
export default App;
