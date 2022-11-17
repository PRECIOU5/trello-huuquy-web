import React from "react";
import "./App.scss";

//Thiết kế thành phần của web
import AppBar from "3 Thành Phần Của Web/AppBar/AppBar";
import BoardBar from "3 Thành Phần Của Web/BoardBar/BoardBar";
import BoardContent from "3 Thành Phần Của Web/BoardContent/BoardContent";
import { Route, Routes } from "react-router-dom";
import DangNhap from "3 Thành Phần Của Web/DangNhap/DangNhap";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="trello-huuquy">
            <AppBar />
            <BoardBar />
            <BoardContent />
          </div>
        }
      />

      <Route path="/dang-nhap" element={<DangNhap />} />
    </Routes>
  );
}

export default App;
