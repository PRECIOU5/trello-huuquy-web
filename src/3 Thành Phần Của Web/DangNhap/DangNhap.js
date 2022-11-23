// import { dangNhap, getMe } from "Action/ApiCall/user-api";
// import { useState } from "react";
// import "./Form.css";

// function DangNhap(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = await dangNhap({ email, password });
//       alert("Đăng nhập thành công!");
//       localStorage.setItem("jwt-token", token);
//       const me = await getMe();
//       localStorage.setItem("me", JSON.stringify(me));
//       setEmail("");
//       setPassword("");
//       window.location.href = "/" + me.boardOwner;
//     } catch (e) {
//       alert(e.response.data);
//     }
//   };
//   return (
//     <>
//       <div className="Form">
//         <div className="contain-form">
//           <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
//           <div className="login-form">
//             <form action="" onSubmit={onSubmit}>
//               <div className="form-group">
//                 <label htmlFor="un">Email</label>
//                 <input
//                   type="email"
//                   id="un"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="pw">Mật khẩu</label>
//                 <input
//                   type="password"
//                   id="pw"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn-form">
//                 Đăng nhập
//               </button>
//               <a href="/dang-ky">Chưa có tài khoản?</a>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DangNhap;

import { dangNhap, getMe } from "Action/ApiCall/user-api";
import { useState } from "react";
import "./Form.scss";

function DangNhap(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await dangNhap({ email, password });
      alert("Đăng nhập thành công!");
      localStorage.setItem("jwt-token", token);
      const me = await getMe();
      localStorage.setItem("me", JSON.stringify(me));
      setEmail("");
      setPassword("");
      window.location.href = "/" + me.boardOwner;
    } catch (e) {
      alert(e.response.data);
    }
  };
  return (
    <>
      <div className="Form">
        <div className="title">
          <img src="/images/trello.png" />
          <label>
            Trello giúp bạn kết nối và chia sẻ công việc với mọi người trong
            cuộc sống của bạn.
          </label>
        </div>
        <div className="contain-form">
          <h2>Đăng nhập</h2>
          <div className="login-form">
            <form action="" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="un">Email</label>
                <input
                  type="email"
                  id="un"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pw">Mật khẩu</label>
                <input
                  type="password"
                  id="pw"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-form">
                Đăng nhập
              </button>
              <div className="forgot_password">
                <a href="#">Quên mật khẩu</a>
                <div className="regis">
                  <label>Bạn chưa có tài khoản? </label>
                  <a href="/dang-ky">Đăng ký?</a>
                </div>
              </div>
              <div className="group_icons"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DangNhap;
