import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import NoPage from './NoPage';

function Routing(){

return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>

)

}

export default Routing
