import { Routes, Route } from "react-router";
import Landing from "./pages/Landing/Landing";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/rooms" element={<HomePage />}></Route>
    </Routes>
  );
};
export default App;
