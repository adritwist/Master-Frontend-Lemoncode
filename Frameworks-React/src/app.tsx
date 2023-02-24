import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListMembers } from "./list";
import { DetailPage } from "./detail";
import  {OrganizationNameProvider}  from './OrganizationNameContext';


export const App = () => {

  return (
    <OrganizationNameProvider>
        <Router>
            <Routes>
              <Route path="/" element={<ListMembers />} />
              <Route path="/detail/:id" element={<DetailPage />} />
            </Routes>
        </Router>
    </OrganizationNameProvider>
      
  );
};