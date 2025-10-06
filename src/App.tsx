import { Routes, Route } from "react-router";
import Landing from "./pages/Landing/Landing";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
    </Routes>
  );
};
export default App;
