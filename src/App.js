import "../src/style/App.css";
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login"

function App() {
  return (
    <div className="App">
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
