import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task1 from "./components/Task1";
import Navbar from "./components/Navbar";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
