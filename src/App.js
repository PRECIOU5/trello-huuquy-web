import React from 'react'
import './App.scss'

//Thiết kế thành phần của web
import AppBar from '3 Thành Phần Của Web/AppBar/AppBar'
import BoardBar from '3 Thành Phần Của Web/BoardBar/BoardBar'
import BoardContent from '3 Thành Phần Của Web/BoardContent/BoardContent'

function App() {
  return (
    <div className="trello-huuquy">
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </div>
  );
}

export default App;
