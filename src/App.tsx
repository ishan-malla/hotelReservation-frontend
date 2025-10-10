import { Routes, Route } from "react-router";
import Landing from "./pages/Landing/Landing";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RoomPage from "./pages/RoomPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/rooms" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/room" element={<RoomPage></RoomPage>}></Route>
    </Routes>
  );
};
export default App;
