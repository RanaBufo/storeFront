import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./component/Product";
import OneProduct from "./component/oneProduct";

function App() {
  return (
      <>
        <Routes>
          <Route path = "/" element={<Product/>}/>
          <Route path = "/:id" element = {<OneProduct />} />
        </Routes>
      </>
    );
 }


export default App;
