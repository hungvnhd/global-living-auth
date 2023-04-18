import { useState } from "react";
import { useNavigate } from "react-router";

function Modal({ setCheckShow, setValidate }) {
  const navigate = useNavigate();
  const [notiSuccess, setNotiSuccess] = useState(0);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    let userLogin = {
      email: inputEmail,
      password: inputPassword,
      action: "login",
    };
    fetch(`https://global-living-backend.vercel.app/api/v1/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == true) {
          setNotiSuccess(1);
          setInputEmail("");
          // setValidate(0);
          setInputPassword("");
          window.location.href = "https://global-living-fe.vercel.app/homepage";
        } else {
          setNotiSuccess(2);
          console.log(data);
        }
      })
      .catch();
  };
  const hanleBackIndex = () => {
    setCheckShow(0);
    setNotiSuccess(0);
  };
  return (
    <div>
      <div className="modalLogin">
        <img
          className="logoLogin"
          src="/assits/Mockup LOGO1 4.png"
          alt="logo"
        />
        <p className="textTitle">
          BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI
        </p>
        <form className="formLogin">
          <div className="divLogin">
            <p className="textLogin">Đăng nhập tài khoản</p>
          </div>
          <p className={notiSuccess == 2 ? "checkAcc" : "hidden"}>
            Kiểm tra tài khoản hoặc mật khẩu!
          </p>
          <img className="iconEmail" src="assits/Mail Account.png" />
          <input
            onChange={handleInputEmail}
            className="inputLoginEmail"
            type="email"
            placeholder="Email"
            value={inputEmail}
          />
          <img className="iconBlock" src="/assits/Secure.png" />
          <input
            onChange={handleInputPassword}
            className="inputLoginPassword"
            type="password"
            placeholder="Mật khẩu"
            value={inputPassword}
          />
          <button className="btnLogin" onClick={handleLogin}>
            Đăng nhập
          </button>
        </form>
        <button onClick={hanleBackIndex} className="btnBackIndex">
          Trở về trang chủ
        </button>
        <button onClick={hanleBackIndex} className="btnGoRegister">
          Đăng ký
        </button>
      </div>
      {/*       <div className={notiSuccess == 1 ? "successLogin" : "hidden"}>
        <img
          className="logoLogin"
          src="/assits/Mockup LOGO1 4.png"
          alt="logo"
        />
        <p className="textTitle">
          BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI
        </p>
        <div className="divNotification">
          <img
            className="checkMark"
            src="/assits/Checkmark.png"
            alt="checkmark"
          />
          <p className="titleSuccess">ĐĂNG KÝ THÀNH CÔNG</p>
          <p className="textSuccess">
            Global Living sẽ liên hệ để xác nhận trong thời gian sớm nhất
          </p>
          <button onClick={hanleBackIndex} className="btnSuccessBack">
            Tìm hiểu thông tin dự án
          </button>
          <button className="btnSuccessNext">Xem tài liệu bán hàng</button>
        </div>
      </div> */}
    </div>
  );
}

export default Modal;
