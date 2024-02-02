import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./shared/NavBar/NavBar";

function App() {
  return (
    <>
    <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
