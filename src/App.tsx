import { Routes, Route } from "react-router";
import Landing from "./pages/Landing/Landing";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/rooms" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
export default App;
