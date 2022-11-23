import { addBoard } from "Action/ApiCall/user-api";
import { useEffect } from "react";
import { useState } from "react";
import "./ModalAllBoards.css";

function ModalAllBoards(props) {
  const [boards, setBoards] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [title, setTitle] = useState("");
  const me = JSON.parse(localStorage.getItem("me"));

  useEffect(() => {
    setBoards([{ _id: me.boardOwner, title: "My Board" }, ...me.boards]);
  }, []);

  const handleClose = () => {
    props.setClose(<></>);
  };

  const handleAddBoard = async (e) => {
    e.preventDefault();
    const response = await addBoard(me._id, { title });
    console.log(response);
    setBoards([...boards, response]);
    setTitle("");
  };

  return (
    <div className="Modal">
      <div className="ModalAllBoards Modal-content">
        <h4 style={{ textAlign: "center" }}>TẤT CẢ BẢNG LÀM VIỆC</h4>
        <div style={{ textAlign: "end", margin: "10px 0px" }}>
          <button className="btn btn-success" onClick={() => setIsAdd(true)}>
            Thêm bảng làm việc
          </button>
        </div>

        {isAdd && (
          <div style={{ margin: "10px 0px" }}>
            <form action="" onSubmit={handleAddBoard}>
              <div className="form-group">
                <label htmlFor="name">Tên bảng làm việc</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  required
                  id="name"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Thêm
              </button>
              <button
                type="button"
                className="btn btn-danger"
                style={{ marginLeft: "5px" }}
                onClick={() => setIsAdd(false)}
              >
                Hủy
              </button>
            </form>
          </div>
        )}

        <div className="contain-boards">
          {boards.map((b) => (
            <div
              key={b._id}
              className="boards"
              onClick={() => (window.location.href = "/" + b._id)}
            >
              {b.title}
            </div>
          ))}
        </div>
      </div>
      <div className="Modal-backdrop" onClick={handleClose}></div>
    </div>
  );
}

export default ModalAllBoards;
