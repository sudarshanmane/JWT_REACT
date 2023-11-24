import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./components/Routes/Index";

function App() {
  return <BrowserRouter>{Routes()}</BrowserRouter>;
}

export default App;
