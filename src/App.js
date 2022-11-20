import React from "react";
import "./App.scss";

//Thiết kế thành phần của web
import AppBar from "3 Thành Phần Của Web/AppBar/AppBar";
import BoardBar from "3 Thành Phần Của Web/BoardBar/BoardBar";
import BoardContent from "3 Thành Phần Của Web/BoardContent/BoardContent";
import { Route, Routes } from "react-router-dom";
import DangNhap from "3 Thành Phần Của Web/DangNhap/DangNhap";
import DangKy from "3 Thành Phần Của Web/DangNhap/DangKy";
import { useEffect } from "react";
import { getMe } from "Action/ApiCall/user-api";

function App() {
  useEffect(() => {
    const init = async () => {
      const me = await getMe();
      localStorage.setItem("me", JSON.stringify(me));
    };
    init();
  }, []);
  return (
    <Routes>
      <Route
        path="/:id"
        element={
          <div className="trello-huuquy">
            <AppBar />
            <BoardBar />
            <BoardContent />
          </div>
        }
      />

      <Route path="/" element={<DangNhap />} />
      <Route path="/dang-ky" element={<DangKy />} />
    </Routes>
  );
}

export default App;
