import { NavLink, Route, Routes } from "react-router-dom";
import Users from "./pages/Posts";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/users">Users</NavLink>
      </nav>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
