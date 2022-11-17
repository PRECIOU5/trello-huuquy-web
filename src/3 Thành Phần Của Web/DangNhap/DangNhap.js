function DangNhap(props) {
  return (
    <>
      <div className="Login">
        <div className="contain-login">
          <div className="login-form">
            <form action="">
              <div className="form-group">
                <label htmlFor="un">Email</label>
                <input type="email" id="un" required />
              </div>
              <div className="form-group">
                <label htmlFor="pw">Mật khẩu</label>
                <input type="password" id="pw" required />
              </div>
              <button type="submit">Đăng nhập</button>
              <a href="/dang-ky">Chưa có tài khoản?</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DangNhap;
